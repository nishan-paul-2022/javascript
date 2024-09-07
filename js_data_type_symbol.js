/* eslint-disable eqeqeq */

class Hero {
	name = 'Batman';
	get [Symbol.toStringTag]() {
		return this.name;
	}
}

function LogSymbol(id) {
	console.log('id :', id);
	console.log('id.description :', id.description);
	console.log('id.toString() :', id.toString());
	console.log('id.valueOf() :', id.valueOf());
	console.log('Symbol.keyFor(id) :', Symbol.keyFor(id)); /* invalid */
}
function Example01() {
	const id1 = Symbol();
	const id2 = Symbol('name');
	const id3 = Symbol.for();
	const id4 = Symbol.for('name');

	LogSymbol(id1);
	LogSymbol(id2);
	LogSymbol(id3);
	LogSymbol(id4);
}

function Example02() {
	const id1 = Symbol('name');
	const id2 = Symbol('name');
	const id3 = id1;

	console.log('id1 == id2 :', id1 == id2);
	console.log('id1 === id3 :', id1 === id3);
}

function Example03() {
	const id1 = Symbol.for('name');
	const id2 = Symbol.for('name');
	const id3 = id2;

	console.log('id1 === id2 :', id1 === id2);
	console.log('id1 === id3 :', id1 === id3);
}

function Example04() {
	const id1 = Symbol();
	const id2 = Symbol.for();

	console.log('id1 == id2 :', id1 == id2);

	console.log(Symbol.keyFor(Symbol.iterator));
	console.log(Symbol.keyFor(Symbol.asyncIterator));
}

function Example05() {
	const obj1 = [1, 2, 3];
	const obj2 = { name: 'John', age: 30, city: 'Dhaka' };

	console.log(obj1.toString());
	console.log(obj2.toString());

	obj1[Symbol.toStringTag] = '1';
	obj2[Symbol.toStringTag] = '2';

	console.log(obj1.toString());
	console.log(obj2.toString());
}

function Example06() {
	const obj1 = new Hero();

	const obj2 = Object.create(Object.prototype, {
		name: { value: 'Ironman' },
		[Symbol.toStringTag]: {
			get() {
				return this.name;
			}
		}
	});

	console.log(obj1.toString());
	console.log(obj2.toString());
}

Example01();
Example02();
Example03();
Example04();
Example05();
Example06();

/*
SYMBOL METHODS :

	- Symbol()
	- id.description
	- id.toString()
	- id.valueOf()
	- Symbol.for()
	- Symbol.keyFor()

BUILT-IN GLOBAL SYMBOLS / SYSTEM SYMBOLS :

	These ids are well-known ids used internally by Javascript for specific functionalities related to strings and iterables. 
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
