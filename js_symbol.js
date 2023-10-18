/* eslint-disable eqeqeq */

function SymbolExample01() {
	const symbol1 = Symbol('name');
	const symbol2 = Symbol('name');
	console.log('symbol1 :', symbol1);
	console.log('symbol1.description :', symbol1.description);
	console.log('symbol1.toString() :', symbol1.toString());
	console.log('symbol1.valueOf() :', symbol1.valueOf());
	console.log('symbol1 == symbol2 :', symbol1 == symbol2);
	console.log('---------SymbolExample01---------\n');
}

function SymbolExample02() {
	const symbol1 = Symbol();
	const symbol2 = Symbol('location');
	const symbol3 = symbol2;
	console.log('symbol1 :', symbol1);
	console.log('symbol1.description :', symbol1.description);
	console.log('symbol2 == symbol3 :', symbol2 == symbol3);
	console.log('symbol2 === symbol3 :', symbol2 === symbol3);
	console.log('---------SymbolExample02---------\n');
}

function SymbolExample03() {
	const symbol1 = Symbol.for('city');
	const symbol2 = Symbol('city');
	const symbol3 = Symbol.for('city');

	console.log('symbol1 :', symbol1);
	console.log('symbol1.description :', symbol1.description);
	console.log('Symbol.keyFor(symbol1) :', Symbol.keyFor(symbol1));
	console.log('Symbol.keyFor(symbol2) :', Symbol.keyFor(symbol2)); // invalid, cause local symbol
	console.log('symbol1 === symbol3 :', symbol1 === symbol3);
	console.log('---------SymbolExample03---------\n');
}

function SymbolExample04() {
	const symbol1 = Symbol.for();
	const symbol2 = Symbol.for();
	console.log('symbol1 :', symbol1);
	console.log('symbol1.description :', symbol1.description);
	console.log('symbol1 === symbol2 :', symbol1 === symbol2);

	console.log(
		'Symbol.keyFor(Symbol.iterator)',
		Symbol.keyFor(Symbol.iterator)
	);
	console.log(
		'Symbol.keyFor(Symbol.asyncIterator)',
		Symbol.keyFor(Symbol.asyncIterator)
	);

	console.log('---------SymbolExample04---------\n');
}

SymbolExample01();
SymbolExample02();
SymbolExample03();
SymbolExample04();

/*
SYMBOL METHODS :

- Symbol()
- Symbol.for()
- Symbol.keyFor()
- symbolObject.description
- symbolObject.toString()
- symbolObject.valueOf()

BUILT-IN GLOBAL SYMBOLS / SYSTEM SYMBOLS :

- Symbol.iterator / for-of
- Symbol.asyncIterator / for-await-of
- Symbol.toPrimitive / type-conversion

- Symbol.match / string.match()
- Symbol.matchAll / string.matchAll()
- Symbol.search / string.search()
- Symbol.replace / string.replace()
- Symbol.split / string.split()

- Symbol.isConcatSpreadable / array.concat()

- Symbol.toStringTag / object.toString()
- Symbol.hasInstance / object1 instanceOf object2
*/
