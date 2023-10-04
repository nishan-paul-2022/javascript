const flag = 0;

function GetResolve(message) {
	console.log(`resolve message : ${message}`);
}

function GetReject(message) {
	console.log(`reject message : ${message}`);
}

function Task(SetResolve, SetReject) {
	if (flag % 2 !== 0) {
		const message = 'resolved';
		SetResolve(message); // status: resolve, result: message
	} else {
		const message = 'rejected';
		SetReject(message); // status: reject, result: message
	}
}

function Promise_Example_01() {
	console.log('Promise_Example_01');
	const promise = new Promise(Task);
	promise.then(GetResolve, GetReject);
}

function Promise_Example_02() {
	console.log('Promise_Example_02');

	function TryCatch() {
		try {
			const promise = new Promise(Task);
			console.log(`TRY: ${promise}`);
			console.log(promise instanceof Promise);
			return promise;
		} catch (error) {
			console.log(`CATCH: ${error}`);
			throw error;
		}
	}

	const promise = TryCatch();
	promise.then(GetResolve, GetReject);
	console.log(promise instanceof Promise);
}

function Promise_Example_03() {
	console.log('Promise_Example_03');
	async function TryCatch() {
		try {
			const promise = new Promise(Task);
			console.log(`TRY: ${promise}`);
			console.log(promise instanceof Promise);
			return promise;
		} catch (error) {
			console.log(`CATCH: ${error}`);
			throw error;
		}
	}

	const promise = TryCatch();
	promise.then(GetResolve, GetReject);
	console.log(promise instanceof Promise);
}

function Promise_Example_04() {
	console.log('Promise_Example_04');
	async function TryCatch() {
		const resolveMsg = await new Promise(Task);
		console.log(`TRY: ${resolveMsg}`);
		console.log(resolveMsg instanceof Promise);
		return resolveMsg;
	}

	const promise = TryCatch();
	promise.then(GetResolve, GetReject);
	console.log(promise instanceof Promise);
}

function Promise_Example_05() {
	console.log('Promise_Example_04');
	async function TryCatch() {
		try {
			const resolveMsg = await new Promise(Task);
			console.log(`TRY: ${resolveMsg}`);
			console.log(resolveMsg instanceof Promise);
			return resolveMsg;
		} catch (rejectMsg) {
			console.log(`CATCH: ${rejectMsg}`);
			return rejectMsg;
		}
	}

	const promise = TryCatch();
	promise.then(GetResolve, GetReject);
	console.log(promise instanceof Promise);
}

Promise_Example_01();
Promise_Example_02();
Promise_Example_03();
Promise_Example_04();
Promise_Example_05();
