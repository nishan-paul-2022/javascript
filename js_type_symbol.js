/* eslint-disable eqeqeq */

function SymbolExample01() {
	const symbol1 = Symbol('name');
	const symbol2 = Symbol('name');
	console.log('symbol1 :', symbol1);
	console.log('symbol1.description :', symbol1.description);
	console.log('symbol1.toString() :', symbol1.toString());
	console.log('symbol1.valueOf() :', symbol1.valueOf());
	console.log('symbol1 == symbol2 :', symbol1 == symbol2);
}

function SymbolExample02() {
	const symbol1 = Symbol();
	const symbol2 = Symbol('location');
	const symbol3 = symbol2;
	console.log('symbol1 :', symbol1);
	console.log('symbol1.description :', symbol1.description);
	console.log('symbol2 == symbol3 :', symbol2 == symbol3);
	console.log('symbol2 === symbol3 :', symbol2 === symbol3);
}

function SymbolExample03() {
	const symbol1 = Symbol.for('city');
	const symbol2 = Symbol('city');
	const symbol3 = Symbol.for('city');

	console.log('symbol1 :', symbol1);
	console.log('symbol1.description :', symbol1.description);
	console.log('Symbol.keyFor(symbol1) :', Symbol.keyFor(symbol1));
	console.log(
		'Symbol.keyFor(symbol2) :',
		Symbol.keyFor(symbol2)
	); /* undefined cause local symbol */
	console.log('symbol1 === symbol3 :', symbol1 === symbol3);
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
}

function SymbolExample05() {
	const object1 = [1, 2, 3];
	const object2 = { name: 'John', age: 30, city: 'New York' };

	console.log(object1.toString());
	console.log(object2.toString());

	object1[Symbol.toStringTag] = '1';
	object2[Symbol.toStringTag] = '2';

	console.log(object1.toString());
	console.log(object2.toString());

	const object3 = new (class Class {
		name = 'Batman';
		get [Symbol.toStringTag]() {
			return this.name;
		}
	})();

	const object4 = Object.create(Object.prototype, {
		name: { value: 'Ironman' },
		[Symbol.toStringTag]: {
			get: () => {
				return 'this.name';
			}
		}
	});

	console.log(object3.toString());
	console.log(object4.toString());
}

SymbolExample01();
SymbolExample02();
SymbolExample03();
SymbolExample04();
SymbolExample05();

/*
SYMBOL METHODS :

	- Symbol()
	- symbolObject.description
	- symbolObject.toString()
	- symbolObject.valueOf()
	- Symbol.for()
	- Symbol.keyFor()

BUILT-IN GLOBAL SYMBOLS / SYSTEM SYMBOLS :

	These symbols are well-known symbols used internally by Javascript for specific functionalities related to strings and iterables. 
	While you cannot directly use them to create your own methods, 
	they are often used by built-in methods.

	- Symbol.iterator / for of
	- Symbol.asyncIterator / for await of
	- Symbol.toPrimitive / type conversion 
	- Symbol.toStringTag / object.toString(), util.inspect(object)

	- Symbol.match / string.match()
	- Symbol.matchAll / string.matchAll()
	- Symbol.search / string.search()
	- Symbol.replace / string.replace()
	- Symbol.split / string.split()
	- Symbol.isConcatSpreadable / array.concat()
	- Symbol.hasInstance / object1 instanceOf object2 */
