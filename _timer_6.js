/* eslint-disable @typescript-eslint/no-unused-vars */

import {
	setTimeout as setTimeoutPromise,
	setInterval as setIntervalPromise
} from 'timers/promises';

async function CustomInterval(interval, startTime) {
	return {
		[Symbol.asyncIterator]() {
			let count = 0;
			return {
				async next() {
					await new Promise((resolve) => {
						return setTimeout(resolve, interval);
					});
					count++;
					return {
						value: startTime,
						done: count > 10
					};
				}
			};
		}
	};
}

async function Interval01() {
	const interval = 100;
	for await (const startTime of setIntervalPromise(interval, Date.now())) {
		const now = Date.now();
		console.log(now);
		if (now - startTime > 1000) {
			console.log('promise-based interval completed');
			break;
		}
	}
}

async function Interval02() {
	const interval = 1000;
	const customIterable = await CustomInterval(interval, Date.now()); // Await the function call
	for await (const startTime of customIterable) {
		// Use the async iterable
		const now = Date.now();
		console.log(now);
		if (now - startTime > 1000) {
			console.log('promise-based interval completed');
			break;
		}
	}
}

async function Interval03() {
	const interval = 1000;
	const customIterable = await CustomInterval(interval, Date.now());

	for (let i = 0; i < 10; i++) {
		const ans = await customIterable[i];
		const now = Date.now();
		console.log(now);
		if (now - ans > 1000) {
			console.log('promise-based interval completed');
			break;
		}
	}
}

async function Interval04() {
	const interval = 1000;
	const customIterable = await CustomInterval(interval, Date.now());
	const customIterator = customIterable[Symbol.asyncIterator]();

	for (let i = 0; i < 5; i++) {
		const { value, done } = await customIterator.next();
		console.log(value);
		if (done) {
			console.log('promise-based interval completed');
			break;
		}
	}
}

Interval01();
Interval02();
Interval03();
Interval04();
