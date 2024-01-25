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

const promise1 = CreatePromise(1);
promise1.then(GetResolve).catch(GetReject);

const promise2 = CreatePromise(2);
promise2.then(GetResolve).catch(GetReject);
