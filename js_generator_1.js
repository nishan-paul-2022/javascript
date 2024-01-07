function* NumberGenerator() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
}

function Iteration01() {
	console.log('\n - item');
	const iterator = NumberGenerator();
	const item = iterator.next();
	console.log(item);
	console.log(item.value);
	console.log(item.done);
}

function Iteration02() {
	console.log('\n - iterator.next()');
	const iterator = NumberGenerator();
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
}

function Iteration03() {
	console.log('\n iterator[Symbol.iterator]().next()');
	const iterator = NumberGenerator();
	console.log(iterator[Symbol.iterator]().next());
	console.log(iterator[Symbol.iterator]().next());
	console.log(iterator[Symbol.iterator]().next());
	console.log(iterator[Symbol.iterator]().next());
	console.log(iterator[Symbol.iterator]().next());
}

function Iteration04() {
	console.log('\n - for of loop');
	const iterator = NumberGenerator();
	let item;
	for (item of iterator) {
		console.log(item);
	}
	console.log(item);
	console.log(iterator.next());
}

function Iteration05() {
	console.log('\n - for loop');
	const iterator = NumberGenerator();
	let item;
	for (item = iterator.next(); item.done === false; item = iterator.next()) {
		console.log(item);
	}
	console.log(item);
	console.log(iterator.next());
}

function Iteration06() {
	console.log('\n - while loop');
	const iterator = NumberGenerator();
	let item = iterator.next();
	while (!item.done) {
		console.log(item.value);
		item = iterator.next();
	}
	console.log(item);
	console.log(iterator.next());
}

function Iteration07() {
	console.log('\n - do while loop');
	const iterator = NumberGenerator();
	let item;
	do {
		item = iterator.next();
		console.log(item.value);
	} while (!item.done);
	console.log(item);
	console.log(iterator.next());
}

function Iteration08() {
	console.log('\n - spread operator');
	const iterator = NumberGenerator();
	console.log(...iterator);
	console.log(iterator.next());
}

function Iteration09() {
	console.log('\n - { spread operator }');
	const iterator = NumberGenerator();
	console.log({ ...iterator });
	console.log(iterator.next());
}

Iteration01();
Iteration02();
Iteration03();
Iteration04();
Iteration05();
Iteration06();
Iteration07();
Iteration08();
Iteration09();

/* 
yield operator				: yield
yield-delegation operator 	: yield* */
