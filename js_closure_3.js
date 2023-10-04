function Fibo(n) {
	if (n <= 2) {
		return n - 1;
	} else {
		return Fibo(n - 1) + Fibo(n - 2);
	}
}

function MemorizeFibo01(Fn) {
	const fiboStore = {};
	const FiboClosure = function (n) {
		const isOwn = Object.prototype.hasOwnProperty.call(fiboStore, n);
		if (!isOwn) {
			fiboStore[n] = Fn(n);
		}
		return fiboStore[n];
	};
	return FiboClosure;
}

function MemorizeFibo02() {
	const fiboStore = {};
	const FiboClosure = function (n) {
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
					fiboStore[n - 1] = FiboClosure(n - 1);
				}
				if (!isOwn2) {
					fiboStore[n - 2] = FiboClosure(n - 2);
				}
				fiboStore[n] = fiboStore[n - 1] + fiboStore[n - 2];
			}
		}
		return fiboStore[n];
	};
	return FiboClosure;
}

function UseCase01() {
	console.log(Fibo(5));
	console.log(Fibo(10));
	console.log(Fibo(15));
	console.log(Fibo(20));
}

function UseCase02() {
	const FiboClosure = MemorizeFibo01(Fibo);
	console.log(FiboClosure(5));
	console.log(FiboClosure(10));
	console.log(FiboClosure(15));
	console.log(FiboClosure(20));
}

function UseCase03() {
	const FiboClosure = MemorizeFibo02();
	console.log(FiboClosure(5));
	console.log(FiboClosure(10));
	console.log(FiboClosure(15));
	console.log(FiboClosure(20));
	console.log(FiboClosure(20));
}

UseCase01();
UseCase02();
UseCase03();
