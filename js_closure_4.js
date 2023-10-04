const worker = {
	someMethod() {
		return [1];
	},

	slow(...x) {
		console.log('Called with ' + x);
		return x.concat(this.someMethod());
	}
};

function CachingDecorator(func) {
	const cache = new Map();
	return function (...x) {
		const key = x.join('');
		if (cache.has(key)) {
			return cache.get(key);
		}
		const result = func.apply(this, x); // "this" is passed correctly now
		cache.set(key, result);
		return result;
	};
}

function BorrowMethod() {
	const result = [].join.call(arguments, '');
	console.log(result);
}

worker.slow = CachingDecorator(worker.slow); // now make it caching
console.log(worker.slow(2)); // works
console.log(worker.slow(2, 3)); // works
console.log(worker.slow(2, 3)); // works, doesn't call the original (cached)
BorrowMethod(1, 2, 3, 4, 5);
