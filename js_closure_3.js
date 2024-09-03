function fibonacci(n) {
	if (n <= 2) {
		return n - 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

function memorize01(callback) {
	const store = {};
	const fibo = function (n) {
		const isOwn = Object.prototype.hasOwnProperty.call(store, n);
		if (!isOwn) {
			store[n] = callback(n);
		}
		return store[n];
	};
	return fibo;
}

function memorize02() {
	const store = {};
	const fibo = function (n) {
		const isOwn = Object.prototype.hasOwnProperty.call(store, n);
		if (!isOwn) {
			if (n <= 2) {
				store[n] = n - 1;
			} else {
				const isOwn1 = Object.prototype.hasOwnProperty.call(
					store,
					n - 1
				);
				const isOwn2 = Object.prototype.hasOwnProperty.call(
					store,
					n - 2
				);
				if (!isOwn1) {
					store[n - 1] = fibo(n - 1);
				}
				if (!isOwn2) {
					store[n - 2] = fibo(n - 2);
				}
				store[n] = store[n - 1] + store[n - 2];
			}
		}
		return store[n];
	};
	return fibo;
}

function Usecase01() {
	console.log(fibonacci(5));
	console.log(fibonacci(10));
	console.log(fibonacci(15));
	console.log(fibonacci(20));
}

function Usecase02() {
	const fibo = memorize01(fibonacci);
	console.log(fibo(5));
	console.log(fibo(10));
	console.log(fibo(15));
	console.log(fibo(20));
}

function Usecase03() {
	const fibo = memorize02();
	console.log(fibo(5));
	console.log(fibo(10));
	console.log(fibo(15));
	console.log(fibo(20));
	console.log(fibo(20));
}

Usecase01();
Usecase02();
Usecase03();
