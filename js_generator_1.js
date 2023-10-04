function* NumberGenerator() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
}

function* LetterGenerator() {
	yield 'a';
	yield 'b';
	yield 'c';
}

function* NumberAndLetterGenerator() {
	yield* NumberGenerator();
	yield* LetterGenerator();
}

function* EvenNumberGenerator() {
	let num = 0;
	while (true) {
		num += 2;
		yield num;
	}
}

function* CombinedGenerator() {
	yield* LetterGenerator();
	yield* EvenNumberGenerator();
}

function EvenNumberNext() {
	let num = 0;
	return {
		next() {
			num += 2;
			return num;
		}
	};
}

function* generateSequence(start, end) {
	for (let i = start; i <= end; i++) {
		yield i;
	}
}

function* generatePasswordCodes() {
	yield* generateSequence(48, 57);
	yield* generateSequence(65, 90);
	yield* generateSequence(97, 122);
}

function Func01() {
	const iterator1 = NumberGenerator();
	console.log(iterator1.next());
	console.log(iterator1.next());
	console.log(iterator1.next());
	console.log(iterator1.next());

	const iterator2 = NumberGenerator();
	for (const item of iterator2) {
		console.log(item);
	}

	const iterator3 = NumberGenerator();
	let item = iterator3.next();
	while (!item.done) {
		console.log(item.value);
		item = iterator3.next();
	}
}

function Func02() {
	const iterator = LetterGenerator();
	console.log(iterator.next().value);
	console.log(iterator.next().done);

	for (const i of LetterGenerator()) {
		console.log(i);
	}
}

function Func03() {
	for (const i of NumberAndLetterGenerator()) {
		console.log(i);
	}

	const iterator = NumberAndLetterGenerator();
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
}

function Func04() {
	const iterator = EvenNumberGenerator();
	for (let i = 0; i < 10; i++) {
		console.log(iterator.next().value);
	}
}

function Func05() {
	const iterator = CombinedGenerator();
	for (let i = 0; i < 10; i++) {
		console.log(iterator.next().value);
	}
}

function Func06() {
	const iterator = EvenNumberNext();
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
}

function Func07() {
	console.log(...NumberGenerator());
	console.log(...LetterGenerator());
}

function Func08() {
	let str = '';
	for (const code of generatePasswordCodes()) {
		str += String.fromCharCode(code);
	}
	console.log(str); // 0..9A..Za..z
}

Func01();
Func02();
Func03();
Func04();
Func05();
Func06();
Func07();
Func08();

// iterator delegation for yield all values, not return values
