/* eslint-disable eqeqeq */

function SymbolCompare() {
	const uid1 = Symbol();
	const uid2 = uid1;
	console.log(uid1 == uid2);
	console.log(uid1 === uid2);
}

function StringCompare() {
	const str1 = 'hello';
	const str2 = 'hello';
	const str3 = str1;
	console.log(str1 == str2);
	console.log(str1 === str2);
	console.log(str1 == str3);
	console.log(str1 === str3);
}

function ObjectCompare() {
	const obj1 = {};
	const obj2 = new Object();
	const obj3 = obj2;
	console.log(obj1 == obj2);
	console.log(obj2 == obj3);
	console.log(obj2 === obj3);
}

function ArrayCompare() {
	// behaves like object
	const x1 = [1, 2, 3];
	const x2 = [1, 2, 3];
	const x3 = Array.from(x1);
	const x4 = x1;
	console.log(x3);
	console.log(x1 == x2);
	console.log(x1 == x3);
	console.log(x1 == x4);
}

function Constant() {
	const obj4 = {
		name: 'hello',
		id: '1162036'
	};
	obj4.name = 'paul';
	obj4.college = 'NDC';
	console.log(obj4);
	// obj4 = obj3; // not possible
}

SymbolCompare();
StringCompare();
ObjectCompare();
ArrayCompare();
Constant();

/* 
2 kinds of variable : let and const
variable => pointer => memory address => value
we can change pointer for let variable (reassign)
we can't change pointer for const variable (no reassign)
primitive (frozen | using value) and reference (not frozen | using pointer) */
