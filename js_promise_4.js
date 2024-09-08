function GetResolve(message) {
	console.log('resolve message:', message);
}

function GetReject(message) {
	console.log('reject message:', message);
}

function CreatePromise(flag) {
	const promise = new Promise((SetResolve, SetReject) => {
		if (flag % 2 !== 0) {
			const message = 'resolved';
			SetResolve(message);
		} else {
			const message = 'rejected';
			SetReject(message);
		}
	});
	return promise;
}

async function SettlePromise(flag) {
	try {
		const resolve = await CreatePromise(flag);
		console.log('TRY: ', resolve);
		return resolve;
	} catch (error) {
		console.log('CATCH: ', error);
		throw error;
	}
}

function Usecase01() {
	const promise = CreatePromise(1);
	promise.then(GetResolve, GetReject);
}

async function Usecase02() {
	const promise = CreatePromise(2);
	promise.then(GetResolve, GetReject);
}

function Usecase03() {
	const promise = SettlePromise(3);
	promise.then(GetResolve, GetReject);
}

function Usecase04() {
	const promise = SettlePromise(4);
	promise.then(GetResolve, GetReject);
}

function Usecase05() {
	const promise = SettlePromise(5);
	promise.then(GetResolve).catch(GetReject);
}

function Usecase06() {
	const promise = SettlePromise(6);
	promise.then(GetResolve).catch(GetReject);
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();
Usecase05();
Usecase06();
