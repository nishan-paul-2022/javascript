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

class EvenGeneratorLimited {
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

function* GenerateSequence(start, end) {
	for (let i = start; i <= end; i++) {
		yield i;
	}
}

function* GeneratePassword() {
	yield* GenerateSequence(48, 57);
	yield* GenerateSequence(65, 90);
	yield* GenerateSequence(97, 122);
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
	const iterator = new EvenGeneratorLimited();
	console.log(iterator.next());
	console.log(iterator.next());

	for (let i = 0; i < 5; i++) {
		console.log('iterator.next().value :', iterator.next().value);
	}

	for (const i of iterator) {
		console.log(i);
	}
}

function UseCase05() {
	let str = '';
	const iterator = GeneratePassword();
	for (const value of iterator) {
		str += String.fromCharCode(value);
	}
	console.log(str);
}

UseCase01();
UseCase02();
UseCase03();
UseCase04();
UseCase05();
