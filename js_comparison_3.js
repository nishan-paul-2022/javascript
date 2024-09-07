/* eslint-disable eqeqeq */

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

function NumberAndNummberComparison() {
	const num1 = 1;
	const num2 = 1;
	const num3 = num1;
	const num4 = new Number(1);
	console.log(num1 === num2);
	console.log(num1 === num3);
	console.log(num1 == num4);
	console.log(num1 === num4);
}

function BooleanAndBooleanComparison() {
	const bool1 = true;
	const bool2 = true;
	const bool3 = bool1;
	const bool4 = new Boolean(true);
	console.log(bool1 === bool2);
	console.log(bool1 === bool3);
	console.log(bool1 == bool4);
	console.log(bool1 === bool4);
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

StringAndStringComparison();
NumberAndNummberComparison();
BooleanAndBooleanComparison();
ArrayAndArrayComparison();
ObjectAndObjectComparison();
