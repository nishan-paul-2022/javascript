/* eslint-disable no-dupe-keys */

function Fn() {
	const x = 1,
		y = 2,
		z = 3;
	const object = { x, y, z }; // shorthand property name
	console.log(object.x);
	console.log(object.y);
	console.log(object.z);
	return object;
}

function Gn() {
	const object = Fn();
	const { x, y, z } = object; // object destructuring
	console.log(x);
	console.log(y);
	console.log(z);
}

function Hn() {
	let m = 10,
		n = 20;
	[n, m] = [m, n]; // array destrcuturing
	console.log(m);
	console.log(n);

	const arr = [0, 1, 2, 3, 4, 5];
	[arr[0], arr[5]] = [arr[5], arr[0]];
	console.log(arr);
}

function In() {
	const arrObj = [
		{ id: 1, name: 'paul' },
		{ id: 2, name: 'bateman' },
		{ id: 3, name: 'batman' }
	];

	const [, , { name }] = arrObj; // array destrcuturing using array literal
	console.log(name);

	const object = { id: 4, name: 'christian' };
	const { id, name: name1, address = '3/4' } = object; // object destructuring using object literal
	console.log(id);
	console.log(name1);
	console.log(address);

	const arrValues = [1, 2, 3, 4, 5];
	const [i, j, k] = arrValues; // array destrcuturing usign array literal
	console.log(`${i} ${j} ${k}`);
}

function Jn() {
	const nums = [1, 2, 3, 4, 5];
	const [_i, _j, _k, ...m] = nums;
	console.log(m);

	const { length, forEach } = nums;
	console.log(length);
	forEach.call(nums, (value) => {
		return console.log(value ** 2);
	});
}

function Kn() {
	const nums = [1, 2, 3, 4, 5];
	const [_i, _j, ...m] = nums;
	console.log(m);

	const [_p, _q, ...{ length }] = nums; // object destructuring within array destructuring
	console.log(length);
}

function Ln() {
	const object = { id: 1, name: 'bateman' };
	const { id: Id = 0, name: fullName, address = '3/4' } = object; // destructuring with alias and default value
	console.log(Id);
	console.log(fullName);
	console.log(address);
}

// computed property name : using literal as peoperty name
function Mn() {
	const object = {
		name: 'paul',
		name: 'bate',
		'is-it': true,
		oww: Math.PI,
		false: Math.E
	};

	console.log(object.oww);
	console.log(object['oww']);

	const key = 'is-it';
	console.log(object[key]);
	console.log(object[false]);

	const { [key]: value1 } = object;
	const { 'is-it': value2 } = object;
	console.log(value1);
	console.log(value2);

	const { name, ['name']: name2 } = object;
	console.log(name);
	console.log(name2);
	console.log(object.name);

	const { [false]: sorry } = object;
	console.log(sorry);

	const { oww: v1 } = object;
	const { oww: v3 } = object;
	const { ['oww']: v2 } = object;
	console.log(v1);
	console.log(v2);
	console.log(v3);
}

function Nn() {
	const object = { i: undefined, j: null };
	const { i, j } = object;
	console.log(i);
	console.log(j);
	// can't destructure undefined and null
}

function On() {
	const x = console.log('hello');
	console.log(x);

	const { i = console.log('hello'), j = console.log('world') } = { j: 'OK' };
	console.log(i);
	console.log(j);
}

function Pn() {
	const object = {
		i: 1,
		j: 2,
		__proto__: {
			k: 3,
			m: 4,
			__proto__: {
				n: 5,
				p: 6
			}
		}
	};

	const { i, j, k, m, n, p } = object;
	console.log(`${i} ${j} ${k} ${m} ${n} ${p}`);
}

function Qn() {
	const object = {
		i: 1,
		j: 2,
		k: {
			m: 3,
			n: 4,
			p: {
				q: 5,
				r: 6
			}
		}
	};

	function _Fn({
		k: {
			p: { r: value }
		}
	}) {
		console.log(value);
	}

	_Fn(object);

	const { k: kk } = object;
	console.log(kk.p.r);

	const {
		k: {
			p: { r: value }
		}
	} = object;
	console.log(value);

	console.log(object['i']);

	const numArr = [10, 20, 30];
	const numObj = { 0: 10, 1: 20, 2: 30 };
	console.log(`${numArr[0]} ${numArr[1]} ${numArr[2]}`);
	console.log(`${numObj[0]} ${numObj[1]} ${numObj[2]}`);

	const object2 = {
		'how-so': function () {
			console.log('helloWorld');
		}
	};
	object2['how-so']();
}

Fn();
Gn();
Hn();
In();
Jn();
Kn();
Ln();
Mn();
Nn();
On();
Pn();
Qn();

/* 
string is not mutable, but reassignable
indexing / natural
member access / square bracket notation using string | dot notation using identifier
container / value
identifier / literal or object
OBJECT - MEMBER ( PROPERTY | METHOD )
MEMBER - KEY : VALUE
KEY : identifier | literal | variable

shorthand property name is a syntactic sugar
computed property name is a syntactic feature
*/
