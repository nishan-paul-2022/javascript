function* LetterGenerator() {
	yield 'a';
	yield 'b';
}

function* EvenGenerator() {
	let num = -2;
	while (true) {
		num += 2;
		yield num;
	}
}

function* LetterAndEvenGenerator() {
	yield* LetterGenerator();
	yield* EvenGenerator();
}

class EvenNext {
	num = -2;

	next() {
		this.num += 2;
		if (this.num <= 20) {
			return { value: this.num, done: false };
		} else {
			return { value: undefined, done: true };
		}
	}

	[Symbol.iterator]() {
		const next = this.next.bind(this);
		return {
			next: next
		};
	}
}

function UseCase01() {
	const iterator = LetterGenerator();
	for (const i of iterator) {
		console.log(i);
	}
}

function UseCase02() {
	const iterator = EvenGenerator();
	console.log(iterator.next());
	console.log(iterator.next());

	for (let i = 0; i < 5; i++) {
		console.log('iterator.next().value :', iterator.next().value);
	}
}

function UseCase03() {
	const iterator = LetterAndEvenGenerator();
	console.log(iterator.next());
	console.log(iterator.next());

	for (let i = 0; i < 5; i++) {
		console.log('iterator.next().value :', iterator.next().value);
	}
}

function UseCase04() {
	const iterator = new EvenNext();
	console.log(iterator.next());
	console.log(iterator.next());

	for (let i = 0; i < 5; i++) {
		console.log('iterator.next().value :', iterator.next().value);
	}

	for (const i of iterator) {
		console.log(i);
	}
}

UseCase01();
UseCase02();
UseCase03();
UseCase04();
