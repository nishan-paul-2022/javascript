class IterableClass01 {
	constructor(...values) {
		this.values = values;
	}

	[Symbol.iterator]() {
		let index = 0;
		const length = this.values.length;
		const values = this.values;
		return {
			next() {
				if (index < length) {
					const value = values[index++];
					return { value, done: false };
				} else {
					return { value: undefined, done: true };
				}
			}
		};
	}
}

class IterableClass02 {
	constructor(...values) {
		this.values = values;
	}

	[Symbol.iterator]() {
		let index = 0;
		const length = this.values.length;
		const values = this.values;
		function* Generator() {
			while (index < length) {
				const value = values[index++];
				yield value;
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

	*[Symbol.iterator]() {
		let index = 0;
		const length = this.values.length;
		const values = this.values;
		while (index < length) {
			const value = values[index++];
			yield value;
		}
	}
}

function UseCase(IterableClass) {
	const iterator = new IterableClass(1, 2, 3);
	console.log(...iterator);
	console.log({ ...iterator });

	for (const i of iterator) {
		console.log(i);
	}
}

UseCase(IterableClass01);
UseCase(IterableClass02);
UseCase(IterableClass03);
