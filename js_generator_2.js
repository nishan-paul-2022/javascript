function* LetterGenerator() {
	yield 'a';
	yield 'b';
}

function* EvenGenerator() {
	let value = -2;
	while (true) {
		value += 2;
		yield value;
	}
}

function* LetterAndEvenGenerator() {
	yield* LetterGenerator();
	yield* EvenGenerator();
}

class EvenGeneratorLimited {
	value = -2;

	next() {
		this.value += 2;
		if (this.value <= 20) {
			return { value: this.value, done: false };
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

function Usecase01() {
	const iterator = LetterGenerator();
	for (const i of iterator) {
		console.log(i);
	}
}

function Usecase02() {
	const iterator = EvenGenerator();
	console.log(iterator.next());
	console.log(iterator.next());

	for (let i = 0; i < 5; i++) {
		console.log('iterator.next().value :', iterator.next().value);
	}
}

function Usecase03() {
	const iterator = LetterAndEvenGenerator();
	console.log(iterator.next());
	console.log(iterator.next());

	for (let i = 0; i < 5; i++) {
		console.log('iterator.next().value :', iterator.next().value);
	}
}

function Usecase04() {
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

function Usecase05() {
	let str = '';
	const iterator = GeneratePassword();
	for (const value of iterator) {
		str += String.fromCharCode(value);
	}
	console.log(str);
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();
Usecase05();
