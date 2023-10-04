// Promise.all(iterable)
// returns a single promise that resolves when all the promises in the iterable
// have resolved or rejects if any of the promises reject.
async function PromiseAll() {
	const promise1 = new Promise((_resolve, reject) => {
		return setTimeout(() => {
			return reject('First');
		}, 10000);
	});
	const promise2 = new Promise((_resolve, reject) => {
		return setTimeout(() => {
			return reject('Second');
		}, 1000);
	});

	// await F01();

	Promise.all([promise1, promise2])
		.then((values) => {
			console.log(values); // ['First', 'Second'] after 2 seconds
		})
		.catch((error) => {
			console.error(error);
		})
		.catch((error) => {
			console.error(error);
		});
}

// Promise.allSettled(iterable)
// returns a promise that resolves with an array of results once
// all promises in the iterable have settled (either resolved or rejected).
function PromiseAllSettled() {
	const promise1 = Promise.resolve('Resolved');
	const promise2 = Promise.reject('Rejected');

	Promise.allSettled([promise1, promise2]).then((results) => {
		console.log(results);
		/*
            [
              { status: 'fulfilled', value: 'Resolved' },
              { status: 'rejected', reason: 'Rejected' }
            ]
            */
	});
}

// Promise.any(iterable)
// returns a promise that resolves or rejects as soon as any of the promises in the iterable resolve,
// with the value of the first resolved promise.
function PromiseAny() {
	const promise1 = new Promise((resolve) => {
		return setTimeout(() => {
			return resolve('First');
		}, 2000);
	});
	const promise2 = new Promise((_resolve, reject) => {
		return setTimeout(() => {
			return reject('Second');
		}, 1000);
	});
	const promise3 = new Promise((_resolve, reject) => {
		return setTimeout(() => {
			return reject('Third');
		}, 3000);
	});

	Promise.any([promise1, promise2, promise3])
		.then((value) => {
			console.log(value); // 'Second' after 1 second (the first resolved promise)
		})
		.catch((error) => {
			console.error(error);
		});
}

// Promise.race(iterable)
// returns a promise that resolves or rejects as soon as any of the promises in the iterable resolve or reject,
// with the value or reason of the first settled promise.
function PromiseRace() {
	const promise1 = new Promise((resolve) => {
		return setTimeout(() => {
			return resolve('First');
		}, 2000);
	});
	const promise2 = new Promise((_resolve, reject) => {
		return setTimeout(() => {
			return reject('Second');
		}, 1000);
	});

	Promise.race([promise1, promise2])
		.then((value) => {
			console.log(value); // 'Second' after 1 second (the first settled promise)
		})
		.catch((error) => {
			console.error(error);
		});
}

// Promise.resolve(value): returns a resolved promise with the given value.
// Promise.reject(reason): returns a rejected promise with the given reason.
function PromiseResolveReject() {
	const resolvedPromise = Promise.resolve('Hello');
	resolvedPromise.then((value) => {
		console.log(value); // 'Hello'
	});

	const rejectedPromise = Promise.reject('Error');
	rejectedPromise.catch((reason) => {
		console.error(reason); // 'Error'
	});
}

PromiseAll();
PromiseAllSettled();
PromiseAny();
PromiseRace();
PromiseResolveReject();

/*
settle : 
all resolve / Promise.all()
any resolve / Promise.any()
all settle / Promise.allSettled() 
any settle / Promise.race()
*/
