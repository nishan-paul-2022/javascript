class IterableUsingNext {
	constructor(values) {
		this.values = values;
		this.index = 0;
	}

	[Symbol.iterator]() {
		const values = this.values;
		let index = this.index;
		const rathore = {
			next: () => {
				if (index >= values.length) {
					return { done: true };
				}

				const value = values[index++];
				return { value, done: false };
			}
		};
		return rathore;
	}
}

class IterableUsingGenerator {
	constructor(values) {
		this.values = values;
		this.index = 0;
	}

	[Symbol.iterator]() {
		const values = this.values;
		let index = this.index;
		function* Generator() {
			while (index < values.length) {
				const value = values[index++];
				yield value;
			}
		}
		const rathore = Generator();
		return rathore;
	}
}

function* UseCase(iterator) {
	yield* iterator;
}

function* NumberAndLetterGenerator() {
	yield 1;
	yield 2;
	yield 3;
	yield 'a';
	yield 'b';
	yield 'c';
}

function* RandomGenerator() {
	console.log('indicator-start');

	const con1 = yield Math.random();
	console.log('indicator-1:', con1);

	const con2 = yield Math.random();
	console.log('indicator-2:', con2);

	try {
		const con3 = yield Math.random();
		console.log('indicator-3:', con3);
	} catch (error) {
		console.log(error);
	}

	const con4 = yield Math.random();
	console.log('indicator-4:', con4);

	console.log('indicator-end');
	return true;
}

function Func01() {
	const iterator = NumberAndLetterGenerator();
	console.log(...iterator);

	const iterator1 = NumberAndLetterGenerator();
	iterator1.next();
	for (const i of UseCase(iterator1)) {
		console.log(i);
	}
}

function Func02() {
	const iterator = new IterableUsingNext([1, 2, 3]);
	console.log(...iterator);
	console.log({ ...iterator });

	for (const i of UseCase(iterator)) {
		console.log(i);
	}
}

function Func03() {
	const iterator = new IterableUsingGenerator([1, 2, 3]);
	console.log(...iterator);
	console.log({ ...iterator });

	for (const i of UseCase(iterator)) {
		console.log(i);
	}
}

function Func04() {
	const iterator = RandomGenerator();
	console.log(iterator.next(1)); // wasted
	console.log(iterator.next(1));
	console.log(iterator.throw(2));
	console.log(iterator.return(3));
	console.log(iterator.next(4));
	console.log(iterator.next(6)); // wasted
}

Func01();
Func02();
Func03();
Func04();

// iterator delegation for yield all values, not return values
