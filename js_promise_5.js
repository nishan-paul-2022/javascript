function FuncReturn() {
	const value = Math.round(Math.random() * 10);
	const flag = value % 2 !== 0 ? true : false;
	if (flag) {
		return true;
	} else {
		throw false;
	}
}

async function FuncReturnAsync() {
	return FuncReturn();
}

function HandleReturn(func) {
	try {
		const value = func();
		console.log('TRY: ', value);
	} catch (error) {
		console.log('CATCH: ', error);
	}
}

function GetResolve(message) {
	console.log('resolve message:', message);
}

function GetReject(message) {
	console.log('reject message:', message);
}

function GetResolve1(message) {
	console.log('resolve message (1):', message);
	return Promise.resolve(Math.PI);
}

function GetResolve2(message) {
	console.log('resolve message (2):', message);
	return Promise.reject(Math.E);
}

function GetReject3(message) {
	console.log('reject message (3):', message);
	return Promise.reject(Number.MAX_VALUE);
}

function GetReject4(message) {
	console.log('reject message (4):', message);
	return Promise.resolve(Number.MIN_VALUE);
}

function GetBoth(message) {
	console.log('resolve / reject message (5):', message);
	const value = Math.round(Math.random() * 10);
	const promise = value % 2 ? Promise.resolve(value) : Promise.reject(value);
	return promise;
}

function Get(check) {
	switch (check) {
		case 1:
			return GetResolve1;
		case 2:
			return GetResolve2;
		case 3:
			return GetReject3;
		case 4:
			return GetReject4;
		default:
			return GetBoth;
	}
}

function CreatePromise(flag) {
	console.log(flag);
	const promise = new Promise((SetResolve, SetReject) => {
		if (flag % 2 !== 0) {
			SetResolve(`resolved (${flag})`);
		} else {
			SetReject(`rejected (${flag})`);
		}
	});
	return promise;
}

async function SettlePromise(promise) {
	try {
		const resolve = await promise;
		console.log('TRY: ', resolve);
		return resolve;
	} catch (error) {
		console.log('CATCH: ', error);
		throw error;
	}
}

async function HandlePromise(func) {
	try {
		const resolve = await func();
		console.log('TRY:', resolve);
		if (resolve instanceof Promise) {
			resolve.then(GetResolve).catch(GetReject);
		}
	} catch (error) {
		console.log('CATCH:', error);
		if (error instanceof Promise) {
			error.then(GetResolve).catch(GetReject);
		}
	}
}

function ReturnOfFunction01() {
	HandleReturn(FuncReturn);
	HandleReturn(FuncReturn);
	FuncReturnAsync().then(GetResolve).catch(GetReject);
	FuncReturnAsync().then(GetResolve).catch(GetReject);
}

async function ReturnOfFunction02() {
	const f1 = async () => {
		console.log('f1');
		return Math.PI;
	};
	await HandlePromise(f1);

	const f2 = async () => {
		console.log('f2');
		throw Math.E;
	};
	await HandlePromise(f2);

	const f3 = async () => {
		console.log('f3');
		return Promise.resolve(Number.MAX_VALUE);
	};
	await HandlePromise(f3);

	const f4 = async () => {
		console.log('f4');
		return Promise.reject(Number.MIN_VALUE);
	};
	await HandlePromise(f4);

	const f5 = async () => {
		console.log('f5');
		throw Promise.resolve(Number.POSITIVE_INFINITY);
	};
	await HandlePromise(f5);

	const f6 = async () => {
		console.log('f6');
		throw Promise.reject(Number.NEGATIVE_INFINITY);
	};
	await HandlePromise(f6);
}

function ReturnOfThenCatch01() {
	const promise1 = CreatePromise(1);

	const promise11 = promise1
		.then(Get(1))
		.then(Get(2))
		.catch(Get(3))
		.catch(Get(4))
		.then(Get(5));

	SettlePromise(SettlePromise(promise11)).then(GetResolve).catch(GetReject);
}

function ReturnOfThenCatch02() {
	function functionD(failure) {
		console.log('D');
		console.log(failure);
	}

	function functionB(success) {
		console.log('B');
		function functionC(_resolve, reject) {
			console.log('C');
			reject(success);
		}
		return functionC;
	}

	function functionA(success) {
		console.log('A');
		const functionC = functionB(success);
		const promise = new Promise(functionC);
		return promise;
	}

	const promise = new Promise((resolve) => {
		resolve('fear-is-a-tool');
	});

	promise.then(functionA).catch(functionD);
}

async function ReturnOfThenCatch03() {
	const promise1 = CreatePromise(1);
	const promise11 = promise1.catch(GetReject);
	await promise11.then(GetResolve); // resolved

	const promise2 = CreatePromise(2);
	const promise22 = promise2.then(GetResolve);
	await promise22.catch(GetReject); // rejected

	const promise3 = CreatePromise(3);
	const promise33 = promise3.then(GetResolve); // resolved
	await promise33.then(GetResolve); // undefined

	const promise4 = CreatePromise(4);
	const promise44 = promise4.catch(GetReject); // rejected
	await promise44.then(GetResolve); // undefined
}

function ReturnOfThenCatch04() {
	const promise1 = CreatePromise(1);

	promise1
		.then((m) => {
			console.log(m + ' / promise 01');
			return CreatePromise(2);
		})
		.catch((m) => {
			console.log(m + ' / promise 02');
			return CreatePromise(3);
		})
		.then((m) => {
			console.log(m + ' / promise 03');
			return CreatePromise(4);
		})
		.catch((m) => {
			console.log(m + ' / promise 04');
		});
}

function ReturnOfThenCatch05() {
	Promise.resolve('resolve/1')
		.then((m) => {
			console.log(m);
			throw 'reject/1';
		})
		.catch((m) => {
			console.log(m);
			throw 'reject/2';
		})
		.catch((m) => {
			console.log(m);
			return 'resolve/2';
		})
		.then((m) => {
			console.log(m);
			return 'resolve/3';
		})
		.then((m) => {
			console.log(m);
			return Promise.resolve('resolve/4');
		})
		.then((m) => {
			console.log(m);
			return Promise.reject('reject/3');
		})
		.catch((m) => {
			console.log(m);
			return Promise.reject('reject/4');
		})
		.catch((m) => {
			console.log(m);
			return Promise.resolve('resolve/5');
		})
		.then((m) => {
			console.log(m);
			throw Promise.resolve('reject/5');
		})
		.catch((m) => {
			console.log(m);
			m.then(GetResolve).catch(GetReject);
			throw Promise.resolve('reject/6');
		})
		.catch((m) => {
			console.log(m);
			m.then(GetResolve).catch(GetReject);
			throw Promise.reject('reject/7');
		})
		.catch((m) => {
			console.log(m);
			m.then(GetResolve).catch(GetReject);
			return Promise.resolve('resolve/6');
		})
		.then((m) => {
			console.log(m);
			throw Promise.reject('reject/8');
		})
		.catch((m) => {
			console.log(m);
			m.then(GetResolve).catch(GetReject);
		});
}

async function ReturnOfFinally01() {
	await CreatePromise(1)
		.then((m) => {
			console.log(m + ' / example 01');
		})
		.then((m) => {
			console.log(m + ' / promise 01 (handled)');
		});

	await CreatePromise(2)
		.catch((m) => {
			console.log(m + ' / example 02');
		})
		.then((m) => {
			console.log(m + ' / promise 02 (handled)');
		});

	await CreatePromise(3)
		.catch((m) => {
			console.log(m + ' / example 03');
		})
		.then((m) => {
			console.log(m + ' / promise 03 (not-handled)');
		});

	await CreatePromise(4)
		.then((m) => {
			console.log(m + ' / example 04');
		})
		.catch((m) => {
			console.log(m + ' / promise 04 (not-handled)');
		});

	await CreatePromise(5)
		.finally(() => {
			console.log('promise 05 is settled (resolved)');
		})
		.then((m) => {
			console.log(m + ' / example 05');
		});

	await CreatePromise(6)
		.finally(() => {
			console.log('promise 06 is settled (rejected)');
		})
		.catch((m) => {
			console.log(m + ' / example 06');
		});
}

async function ReturnOfFinally02() {
	const promise3 = CreatePromise(3);

	await promise3
		.finally(() => {
			console.log('return Math.PI /');
			return Math.PI;
		})
		.then(GetResolve)
		.catch(GetReject);

	await promise3
		.finally(() => {
			console.log('return Math.E /');
			return Math.E;
		})
		.then(GetResolve)
		.catch(GetReject);

	await promise3
		.finally(() => {
			console.log('throw Number.MAX_VALUE /');
			throw Number.MAX_VALUE;
		})
		.then(GetResolve)
		.catch(GetReject);

	await promise3
		.finally(() => {
			console.log('throw Number.MIN_VALUE /');
			throw Number.MIN_VALUE;
		})
		.then(GetResolve)
		.catch(GetReject);
}

async function ReturnOfFinally03() {
	const promise3 = CreatePromise(3);
	const promise4 = CreatePromise(4);
	const promise5 = CreatePromise(5);

	await promise3
		.finally(() => {
			console.log('return promise4 /');
			return promise4;
		})
		.catch(GetReject);

	await promise3
		.finally(() => {
			console.log('return promise5 /');
			return promise5;
		})
		.then(GetResolve);

	await promise3
		.finally(() => {
			console.log('throw promise4 /');
			throw promise4;
		})
		.catch((m) => {
			console.log(m);
			return m;
		})
		.catch(GetReject);

	await promise3
		.finally(() => {
			console.log('throw promise5 /');
			throw promise5;
		})
		.catch((m) => {
			console.log(m);
			return m;
		})
		.then(GetResolve);
}

ReturnOfFunction01();
ReturnOfFunction02();

ReturnOfThenCatch01();
ReturnOfThenCatch02();
ReturnOfThenCatch03();
ReturnOfThenCatch04();
ReturnOfThenCatch05();

ReturnOfFinally01();
ReturnOfFinally02();
ReturnOfFinally03();

/* unhandled-promise-rejection is an error */
