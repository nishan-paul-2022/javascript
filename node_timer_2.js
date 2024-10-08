import {
	setTimeout as timeout,
	setImmediate as immediate,
	setInterval as interval
} from 'timers/promises';

function* intervalGenerator(interval, value) {
	while (1) {
		yield new Promise((resolve) => {
			setTimeout(() => {
				resolve(value);
			}, interval);
		});
	}
}

function intervalIterator01(interval, value) {
	return {
		next: () => {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(value);
				}, interval);
			});
		},
		[Symbol.asyncIterator]: () => {
			return {
				next: () => {
					return new Promise((resolve) => {
						setTimeout(() => {
							resolve({ value, done: false });
						}, interval);
					});
				}
			};
		}
	};
}

function intervalIterator02(interval, value) {
	return {
		next: function () {
			return this[Symbol.iterator]().next().value;
		},

		[Symbol.iterator]: () => {
			return {
				next: () => {
					return {
						value: new Promise((resolve) => {
							setTimeout(() => {
								resolve(value);
							}, interval);
						}),
						done: false
					};
				}
			};
		}
	};
}

async function AsyncSetImmediate() {
	const value = await immediate('asynchronous immediate');
	console.log(value);
}

async function AsyncSetTimeout() {
	const value = await timeout(3000, 'asynchronous timeout');
	console.log(value);
}

async function AsyncSetInterval01() {
	const iterator = interval(1000, Date.now());

	console.log(iterator);
	console.log(iterator.next());
	console.log(await iterator.next());

	for await (const value of iterator) {
		const currentTime = Date.now();
		if (currentTime - value > 6000) {
			break;
		}
		console.log(value);
	}
}

async function AsyncSetInterval02() {
	const iterator = intervalGenerator(1000, Date.now());

	console.log(iterator);
	console.log(iterator.next());

	for await (const value of iterator) {
		const currentTime = Date.now();
		if (currentTime - value > 6000) {
			break;
		}
		console.log(value);
	}
}

async function AsyncSetInterval03() {
	const iterator = intervalIterator01(1000, Date.now());

	console.log(iterator);
	console.log(iterator.next());
	console.log(await iterator.next());

	for await (const value of iterator) {
		const currentTime = Date.now();
		if (currentTime - value > 6000) {
			break;
		}
		console.log(value);
	}
}

async function AsyncSetInterval04() {
	const iterator = intervalIterator02(1000, Date.now());

	console.log(iterator);
	console.log(iterator.next());
	console.log(await iterator.next());

	for await (const value of iterator) {
		const currentTime = Date.now();
		if (currentTime - value > 6000) {
			break;
		}
		console.log(value);
	}
}

await AsyncSetImmediate();

await AsyncSetTimeout();

await AsyncSetInterval01();
await AsyncSetInterval02();
await AsyncSetInterval03();
await AsyncSetInterval04();
