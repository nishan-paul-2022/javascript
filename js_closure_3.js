function fibonacci(n) {
	if (n <= 2) {
		return n - 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

function memorize01(callback) {
	const fiboStore = {};
	const fibo = function (n) {
		const isOwn = Object.prototype.hasOwnProperty.call(fiboStore, n);
		if (!isOwn) {
			fiboStore[n] = callback(n);
		}
		return fiboStore[n];
	};
	return fibo;
}

function memorize02() {
	const fiboStore = {};
	const fibo = function (n) {
		const isOwn = Object.prototype.hasOwnProperty.call(fiboStore, n);
		if (!isOwn) {
			if (n <= 2) {
				fiboStore[n] = n - 1;
			} else {
				const isOwn1 = Object.prototype.hasOwnProperty.call(
					fiboStore,
					n - 1
				);
				const isOwn2 = Object.prototype.hasOwnProperty.call(
					fiboStore,
					n - 2
				);
				if (!isOwn1) {
					fiboStore[n - 1] = fibo(n - 1);
				}
				if (!isOwn2) {
					fiboStore[n - 2] = fibo(n - 2);
				}
				fiboStore[n] = fiboStore[n - 1] + fiboStore[n - 2];
			}
		}
		return fiboStore[n];
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
