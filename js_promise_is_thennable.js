// custom asynchronous operations:
function UseCase01() {
	const myThennable = {
		then(resolve, reject) {
			setTimeout(() => {
				const result = Math.random() > 0.5 ? 'Success!' : 'Failure!';
				if (result === 'Success!') {
					resolve(result);
				} else {
					reject(new Error(result));
				}
			}, 1000);
		}
	};

	myThennable.then(
		(value) => {
			return console.log('Resolved:', value);
		},
		(error) => {
			return console.error('Rejected:', error);
		}
	);
}

// adapting callback based function
function UseCase02() {
	function fetchData(callback) {
		setTimeout(() => {
			callback('Data fetched successfully');
		}, 1000);
	}

	const fetchDataThennable = {
		then(resolve) {
			fetchData(resolve);
		}
	};

	// fetchData((data) => console.log(data));
	fetchDataThennable.then((data) => {
		return console.log(data);
	});
}

// chaining operations
function UseCase03() {
	const firstOperation = {
		then(resolve) {
			setTimeout(() => {
				resolve('First operation completed');
			}, 1000);
		}
	};

	const secondOperation = {
		then(resolve) {
			setTimeout(() => {
				resolve('Second operation completed');
			}, 1000);
		}
	};

	firstOperation
		.then((result) => {
			console.log(result);
			return secondOperation;
		})
		.then((result) => {
			console.log(result);
		});
}

// thenables in a promise chain
function UseCase04() {
	const thenable = {
		then: function (onFulfilled) {
			setTimeout(() => {
				return onFulfilled(42);
			}, 10);
		}
	};

	Promise.resolve()
		.then(() => {
			return thenable;
		})
		.then((v) => {
			console.log(v);
		});
}

// thenables with await
async function UseCase05() {
	const thenable = {
		then: function (onFulfilled) {
			setTimeout(() => {
				return onFulfilled(42);
			}, 10);
		}
	};

	const v = await thenable;
	console.log(v);
}

// convert an arbitrary thenable to a promise using
async function UseCase06() {
	const thenable = {
		then: function (onFulfilled) {
			setTimeout(() => {
				return onFulfilled(42);
			}, 10);
		}
	};

	const p = Promise.resolve(thenable);
	console.log(p instanceof Promise);

	const v = await p;
	console.log(v);
}

UseCase01();
UseCase02();
UseCase03();
UseCase04();
await UseCase05();
await UseCase06();
