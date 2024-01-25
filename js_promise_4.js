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

function Promise_Example_01() {
	console.log('Promise_Example_01');
	const promise = CreatePromise(1);
	promise.then(GetResolve, GetReject);
}

async function Promise_Example_02() {
	console.log('Promise_Example_02');
	const promise = CreatePromise(2);
	promise.then(GetResolve, GetReject);
}

function Promise_Example_03() {
	console.log('Promise_Example_03');
	const promise = SettlePromise(3);
	promise.then(GetResolve, GetReject);
}

function Promise_Example_04() {
	console.log('Promise_Example_04');
	const promise = SettlePromise(4);
	promise.then(GetResolve, GetReject);
}

function Promise_Example_05() {
	console.log('Promise_Example_05');
	const promise = SettlePromise(5);
	promise.then(GetResolve).catch(GetReject);
}

function Promise_Example_06() {
	console.log('Promise_Example_06');
	const promise = SettlePromise(6);
	promise.then(GetResolve).catch(GetReject);
}

Promise_Example_01();
Promise_Example_02();
Promise_Example_03();
Promise_Example_04();
Promise_Example_05();
Promise_Example_06();
