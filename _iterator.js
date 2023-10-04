function Iterator01() {
	const numbers = [1, 2, 3, 4, 5];

	numbers[Symbol.iterator] = function* () {
		for (let i = 0; i < this.length; i++) {
			yield this[i] * this[i];
		}
	};

	for (const num of numbers) {
		console.log(num);
	}

	for (let i = 0; i < numbers.length; i++) {
		console.log(numbers[i]);
	}
}

function Iterator02() {
	const customIterable = {
		*[Symbol.iterator]() {
			let count = 0;
			while (count < 5) {
				yield count++;
			}
		}
	};

	for (const value of customIterable) {
		console.log(value);
	}
}

function Iterator03() {
	class A {
		name = 'John Doe';
		age = 30;

		[Symbol.iterator]() {
			const keys = Object.keys(this);
			let i = 0;

			function memberValue() {
				if (i < keys.length) {
					return {
						value: this[keys[i++]],
						done: false
					};
				} else {
					return {
						value: undefined,
						done: true
					};
				}
			}

			const next = memberValue.bind(this);
			return { next };
		}
	}

	const object = new A();

	for (const value of object) {
		console.log(value);
	}

	const myObject = {
		name: 'John',
		age: 30,
		country: 'USA',

		getKeys() {
			const keys = Object.keys(this);
			return keys;
		}
	};

	const keys = myObject.getKeys();
	console.log(keys); // Outputs: ['name', 'age', 'country', 'getKeys']
}

function AsyncIterator01() {
	const customAsyncIterable = {
		async *[Symbol.asyncIterator]() {
			let count = 0;
			while (count < 5) {
				yield count++;
			}
		}
	};

	// (async function () {
	//     for await (const value of customAsyncIterable) {
	//         // console.log(value);
	//         function F(resolve, reject, value) {
	//             setTimeout(() => console.log(value), 5000);
	//             resolve("OK");
	//         }
	//         async function F1() {
	//             return await new Promise((resolve, reject) => F(resolve, reject, value));
	//         }
	//         await F1();
	//     }
	// })();

	(async function () {
		for await (const value of customAsyncIterable) {
			await new Promise((resolve) => {
				return setTimeout(resolve, 5000);
			}); // Delay for 5 seconds
			console.log(value);
		}
	})();

	console.log('Vikram Rathore');
}

Iterator01();
Iterator02();
Iterator03();
AsyncIterator01();
