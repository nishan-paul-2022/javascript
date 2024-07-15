function createPromise(value) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(value);
		}, 1000);
	});
}

class IterableClass01 {
	constructor(...values) {
		this.values = values;
	}

	[Symbol.asyncIterator]() {
		let index = 0;
		const length = this.values.length;
		const values = this.values;
		return {
			next() {
				if (index < length) {
					const value = values[index++];
					return createPromise({ value, done: false });
				} else {
					return createPromise({ value: undefined, done: true });
				}
			}
		};
	}
}

class IterableClass02 {
	constructor(...values) {
		this.values = values;
	}

	[Symbol.asyncIterator]() {
		let index = 0;
		const length = this.values.length;
		const values = this.values;
		function* Generator() {
			while (index < length) {
				const value = values[index++];
				yield createPromise(value);
			}
		}
		const generator = Generator();
		return generator;
	}
}

class IterableClass03 {
	constructor(...values) {
		this.values = values;
	}

	*[Symbol.asyncIterator]() {
		let index = 0;
		const length = this.values.length;
		const values = this.values;
		while (index < length) {
			const value = values[index++];
			yield createPromise(value);
		}
	}
}

async function Usecase01(IterableClass) {
	const iterable = new IterableClass(1, 2, 3);
	for await (const i of iterable) {
		console.log(i);
	}
}

async function Usecase02(IterableClass) {
	const iterable = new IterableClass(1, 2, 3);
	for await (const i of iterable) {
		console.log(await i);
	}
}

await Usecase01(IterableClass01);
await Usecase02(IterableClass02);
await Usecase02(IterableClass03);
