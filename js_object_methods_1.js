const object = {
	i: 1,
	j: 2,
	k: 3,
	f: function () {
		console.log('function: f');
	}
};

function ForOfLoop() {
	for (const key in object) {
		console.log(`${key}: ${object[key]}`);
	}

	const keys = Object.keys(object);

	for (let idx = 0; idx < keys.length; idx++) {
		const key = keys[idx];
		console.log(`${key}: ${object[key]}`);
	}

	for (const key of keys) {
		console.log(`${key}: ${object[key]}`);
	}
}

function Destructuring() {
	const { i, j, k, f } = object;
	console.log(i);
	console.log(j);
	console.log(k);
	console.log(f);

	const { i: ii, j: jj, k: kk, f: ff } = object;
	console.log(ii);
	console.log(jj);
	console.log(kk);
	console.log(ff);

	const p = 10;
	const q = 3.1416;
	const r = 'hello';
	const s = () => {
		return console.log('function: s');
	};
	const object1 = { p: p, q: q, r: r, s: s };
	const object2 = { p, q, r, s }; // shorthand member name

	console.log(object1.p);
	console.log(object1.q);
	console.log(object1.r);
	console.log(object1.s);

	console.log(object2.p);
	console.log(object2.q);
	console.log(object2.r);
	console.log(object2.s);
}

function CheckKey() {
	const x = { a: 1, b: 2, c: 3 };
	console.log('a' in x);
}

function ObjectProperties() {
	class Class {
		ID = 1604085;
		constructor() {
			console.log('class: Class');
		}
	}
	Class.height = 5.5;
	const object = new Class();

	console.log(Object.keys(object)); // returns enummerable and own attributes
	console.log(Object.getOwnPropertyNames(object)); // returns own attributes

	console.log(Object.keys(Class));
	console.log(Object.getOwnPropertyNames(Class));
}

function ObjectLength() {
	const object = [1, 2, 3];
	object['4'] = 4;
	object['hello'] = 'hello';
	console.log(object);
	console.log(object.length);
}

function ObjectAndThis() {
	const regular = {
		value: 1,
		x: () => {
			console.log(this.value);
		},
		y: function () {
			console.log(this.value);
		},
		z: function () {
			console.log(regular.value);
		}
	};

	// regular.x(); /* invalid */
	regular.y();
	regular.z();
}

ForOfLoop();
Destructuring();
CheckKey();
ObjectProperties();
ObjectLength();
ObjectAndThis();

/* 
- regular assign : instance[attribute] = value 
- colon assign : instance = { attribute: value }
- context is represented by 'this' keyword
- context can be used inside, 
	: function [ indicating container object ]
	: method [ indicating container object ]
	: static method [ indicating container class ]
- context can't be used inside arrow-function and arrow-method */
