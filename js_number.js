/* eslint-disable @typescript-eslint/no-loss-of-precision */
/* eslint-disable eqeqeq */

function Func01() {
	const num1 = 123;
	const num2 = new Number(123);
	const num3 = new Number(123);
	const num4 = num3;

	console.log(typeof num1);
	console.log(typeof num2);
	console.log(num1 == num2);
	console.log(num1 === num2);
	console.log(num2 == num3);
	console.log(num3 == num4);
	console.log(num3 === num4);
}

function Func02() {
	console.log('MAX_VALUE :', Number.MAX_VALUE); // 2^1024
	console.log('MIN_VALUE :', Number.MIN_VALUE); // -2^-1023
	console.log('MAX_SAFE_INTEGER :', Number.MAX_SAFE_INTEGER); // +(2^53-1)
	console.log('MIN_SAFE_INTEGER :', Number.MIN_SAFE_INTEGER); // -(2^53-1)
	console.log('POSITIVE_INFINITY :', Number.POSITIVE_INFINITY);
	console.log('NEGATIVE_INFINITY :', Number.NEGATIVE_INFINITY);
	console.log('EPSILON :', Number.EPSILON);

	console.log('max number of integer digit (15)', 123456789123456);
	console.log('max number of fractional digit (16)', 0.1234567891234567);
}

function Func03() {
	const num5 = 0x32;

	// argument of toString() is the base of output string-number and it is optional
	console.log(num5.toString(32));
	console.log(num5.toString(16));
	console.log(num5.toString(12));
	console.log(num5.toString(10));
	console.log(num5.toString(8));
	console.log(num5.toString(2));
}

function Func04() {
	const v0 = Math.random() / Infinity;
	const v1 = Math.random() / 0;
	const v2 = Math.random() / -Infinity;
	const v3 = Math.random() / -0;
	const v4 = Infinity / Math.random();
	const v5 = 0 / Math.random();
	const v6 = 0 / 0;
	const v7 = Infinity / Infinity;
	const v8 = Infinity / 0;
	const v9 = 0 / Infinity;

	console.log('Math.random()/Infinity :', v0);
	console.log('Math.random()/0 :', v1);
	console.log('Math.random()/-Infinity :', v2);
	console.log('Math.random()/-0 :', v3);
	console.log('Infinity/Math.random() :', v4);
	console.log('0/Math.random() :', v5);
	console.log('0/0 :', v6);
	console.log('Infinity/Infinity :', v7);
	console.log('Infinity/0 :', v8);
	console.log('0/Infinity :', v9);
}

function Func05() {
	const pattern = 'hello';
	const flag = 'gi';
	const regex1 = new RegExp(pattern, flag);
	const regex2 = /hello/gi;
	console.log(typeof regex1);
	console.log(typeof regex2);
	console.log(typeof regex1.valueOf());

	const str1 = 'hello';
	const str2 = new String(str1);
	console.log(typeof str1);
	console.log(typeof str2);
	console.log(typeof str2.valueOf());

	const int1 = 12345;
	const int2 = new Number(12345);
	console.log(typeof int1);
	console.log(typeof int2);
	console.log(typeof int2.valueOf());

	const bigint1 = 12345n;
	const bigint2 = BigInt(12345);
	console.log(typeof bigint1);
	console.log(typeof bigint2);
	console.log(typeof bigint2.valueOf());

	const symbol1 = Symbol(12);
	console.log(typeof symbol1);
	console.log(typeof symbol1.valueOf());
}

function Func06() {
	console.log(Number());
	console.log(Number(''));
	console.log(Number([]));
	console.log(Number(true));

	console.log(Number(420));
	console.log(Number('123'));
	console.log(Number('3.1416'));

	const num6 = new Number('666');
	console.log(num6);
	console.log(num6.valueOf());

	console.log(parseInt('10'));
	console.log(parseInt('0x10'));
	console.log(parseInt('3.1416'));
	console.log(parseInt('1X24'));
	console.log(parseInt('X3'));

	console.log(parseFloat('3.1416'));
	console.log(parseFloat('3.1416 12'));
	console.log(parseFloat('X3'));

	// second argument of parseInt() is the base of input number and it is optional
	// ouput will be decimal number
	console.log(parseInt('10', 2));
	console.log(parseInt('10', 8));
	console.log(parseInt('10', 10));
	console.log(parseInt('10', 16));
	console.log(parseInt('10', 36));
}

function Func07() {
	const num7 = 925.1256;

	// number of digit
	console.log('\ntoPrecision :');
	console.log(num7.toPrecision()); // as it is
	console.log(num7.toPrecision(2));
	console.log(num7.toPrecision(4));
	console.log(num7.toPrecision(6));

	// number of fractional digit
	console.log('\ntoFixed :');
	console.log(num7.toFixed()); // 0
	console.log(num7.toFixed(0));
	console.log(num7.toFixed(2));
	console.log(num7.toFixed(4));
	console.log(num7.toFixed(6));

	// number of fractional digit in scientific number
	console.log('\ntoExponential :');
	console.log(num7.toExponential()); // as it is, but in scientific
	console.log(num7.toExponential(0));
	console.log(num7.toExponential(2));
	console.log(num7.toExponential(4));
	console.log(num7.toExponential(6));
}

function Func08() {
	const num8 = 123456789123456789;
	console.log(isFinite(1 / 0));
	console.log(isNaN(0 / 0));
	console.log(Number.isInteger(num8));
	console.log(Number.isSafeInteger(num8));
}

function Func09() {
	let num9 = 12345n;
	const num10 = 5n;
	const num11 = BigInt(2);
	const num12 = BigInt(12345);

	console.log(num9 + num10);
	console.log(num9 - num10);
	console.log(num9 * num10);
	console.log(num9 / num10);
	console.log(num9 << num11);
	console.log(num9 >> num11);
	console.log(num10 ** 2n);
	console.log(num9 % BigInt('4'));

	console.log(0b101n);
	console.log(0o757n);
	console.log(125n);
	console.log(0x32n);

	console.log(num9 === num12);
	console.log(++num9);
}

function Func10() {
	const u0 = [];
	const u1 = new Array(5);
	const u2 = [1, 2, 3];
	console.log(u0);
	console.log(u1);
	console.log(u2);

	const v0 = [];
	const v1 = Array(5);
	const v2 = [1, 2, 3];
	console.log(v0);
	console.log(v1);
	console.log(v2);
}

function Func11() {
	// Creating an array from an iterable with a map function and this
	const myIterable = {
		values: [1, 2, 3],
		multiplier: 2,
		getValue: function (value) {
			return value ** this.multiplier;
		}
	};

	const newArray = Array.from(
		myIterable.values,
		myIterable.getValue,
		myIterable
	);

	console.log(newArray);
}

Func01();
Func02();
Func03();
Func04();
Func05();
Func06();
Func07();
Func08();
Func09();
Func10();
Func11();

/*
comparing (loose / strict) two objects always returns false

undefined operation (number of results: 2) | interminate operation (number of results: more than 2) 

primitive data type : string, number, boolean
primitive can be constructed using literal (end result: value) or constructor (end result: object) 
to convert from object to value : valueOf()
to convert from value to object : constructor

anything can be converted to string using : objectName.toString()
base can be 2 to 36

bigint always works with signed number
*/
