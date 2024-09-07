/* eslint-disable eqeqeq */

function SymbolAndSymbolComparison() {
	const uid1 = Symbol('id');
	const uid2 = Symbol('id');
	const uid3 = uid1;
	console.log(uid1 == uid2);
	console.log(uid1 == uid3);
	console.log(uid1 === uid3);
}

function StringAndStringComparison() {
	const str1 = 'hello';
	const str2 = 'hello';
	const str3 = str1;
	const str4 = new String('hello');
	console.log(str1 === str2);
	console.log(str1 === str3);
	console.log(str1 == str4);
	console.log(str1 === str4);
}

function ArrayAndArrayComparison() {
	const arr1 = [1, 2, 3];
	const arr2 = [1, 2, 3];
	const arr3 = Array.from(arr1);
	const arr4 = arr1;
	console.log(arr1 == arr2);
	console.log(arr1 == arr3);
	console.log(arr1 == arr4);
	console.log(arr1 === arr4);
}

function ObjectAndObjectComparison() {
	const obj1 = {};
	const obj2 = {};
	const obj3 = new Object();
	const obj4 = obj1;
	console.log(obj1 == obj2);
	console.log(obj1 == obj3);
	console.log(obj1 == obj4);
	console.log(obj1 === obj4);
}

SymbolAndSymbolComparison();
StringAndStringComparison();
ArrayAndArrayComparison();
ObjectAndObjectComparison();
