function Func01() {
	class A {}
	const re = /pattern/g;
	const date1 = Date(12);
	const date2 = new Date(12);
	const num1 = Number(Math.E);

	const symbol = Symbol('uKey');

	console.log(typeof '');
	console.log(typeof 1);
	console.log(typeof true);
	console.log(typeof undefined);
	console.log(typeof (() => {}));
	console.log(typeof 12n);
	console.log(typeof symbol);
	console.log(typeof {});

	console.log(typeof A);
	console.log(typeof NaN);
	console.log(typeof Infinity);
	console.log(typeof null);
	console.log(typeof []);
	console.log(typeof re);
	console.log(typeof date1);
	console.log(typeof date2);
	console.log(typeof num1);
}

function Func02() {
	function Func03(str1, str2, objectName) {
		str1 += 'World';
		str2 += 'World';
		objectName.age = 27;
		console.log(str1);
		console.log(str2);
		console.log(objectName);
	}

	const str1 = 'hello';
	const str2 = new String('hello');
	const objectName = { age: 24 };
	Func03(str1, str2, objectName);
	console.log(str1);
	console.log(str2);
	console.log(objectName);
}

Func01();
Func02();

// data type: string, number, boolean, undefined, funcntion, bigint, symbol, and object (root of every data type)
// except object : copy by value, pass by value, and not mutable
// object : copy by reference, pass by reference, and mutable
