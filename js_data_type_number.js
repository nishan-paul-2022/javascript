/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-loss-of-precision */

function F1(x, y) {
	console.log(x == y);
	console.log(x === y);
}

function F3(value) {
	console.log('value / Infinity :', value / Infinity);
	console.log('value / -Infinity :', value / -Infinity);
	console.log('value / 0 :', value / 0);
	console.log('value / -0 :', value / -0);
	console.log('value / Math.random() :', value / Math.random());
}

function F2(num) {
	console.log(num.toString(32));
	console.log(num.toString(16));
	console.log(num.toString(12));
	console.log(num.toString(10));
	console.log(num.toString(8));
	console.log(num.toString(2));
}

function NumberVsNumber() {
	const num1 = 120;
	const num2 = 120;
	const num3 = new Number(120);
	const num4 = new Number(120);
	const num5 = new Number(120).valueOf();

	console.log(num1, num3, num5);
	console.log(typeof num1, typeof num3, typeof num5);

	F1(num1, num2);
	F1(num2, num3);
	F1(num3, num4);
	F1(num4, num5);
	F1(num5, num1);
}

function MemberOfNumber() {
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

function MethodOfNumber() {
	const num1 = 1 / 0;
	console.log(Number.isFinite(num1));

	const num2 = 0 / 0;
	console.log(Number.isNaN(num2));

	const num3 = 123456789123456789;
	console.log(Number.isInteger(num3));
	console.log(Number.isSafeInteger(num3));
}

/* argument of toString() is the base of output string-number and it is optional */
function NumberToString() {
	F2(0b10); // binary
	F2(0o10); // octal
	F2(10); // decimal
	F2(0x10); // hexa
}

function ZeroAndInfinity() {
	F3(Infinity);
	F3(-Infinity);
	F3(0);
	F3(-0);
}

/*
second argument of parseInt() is the base of input number and it is optional
ouput will be decimal number */
function NumberFromString() {
	console.log(parseInt('10'));
	console.log(parseInt('0x10'));
	console.log(parseInt('3.1416'));
	console.log(parseInt('1X24'));
	console.log(parseInt('X3'));

	console.log(parseFloat('3.1416'));
	console.log(parseFloat('3.1416 12'));
	console.log(parseFloat('X3'));

	console.log(parseInt('10', 2));
	console.log(parseInt('10', 8));
	console.log(parseInt('10', 10));
	console.log(parseInt('10', 16));
	console.log(parseInt('10', 36));
}

function NumberSeparator() {
	const num1 = 1_000_000_000;
	const num2 = 1000000000;
	console.log(num1 === num2);
}

function NumberSetting() {
	const num = 925.1256;

	// number of digit
	console.log('\n\n---toPrecision---');
	console.log(num.toPrecision()); /* as it is */
	console.log(num.toPrecision(2));
	console.log(num.toPrecision(4));
	console.log(num.toPrecision(6));

	// number of fractional digit
	console.log('\n\n---toFixed---');
	console.log(num.toFixed()); // 0
	console.log(num.toFixed(0));
	console.log(num.toFixed(2));
	console.log(num.toFixed(4));
	console.log(num.toFixed(6));

	// number of fractional digit in scientific number
	console.log('\n\n---toExponential---');
	console.log(num.toExponential()); // as it is, but in scientific
	console.log(num.toExponential(0));
	console.log(num.toExponential(2));
	console.log(num.toExponential(4));
	console.log(num.toExponential(6));
}

NumberVsNumber();
MemberOfNumber();
MethodOfNumber();
NumberToString();
ZeroAndInfinity();
NumberFromString();
NumberSetting();
NumberSeparator();

/*
comparing (loose / strict) two objects always returns false

undefined operation (number of results: 2) | indeterminate operation (number of results: more than 2) 

primitive data type : string, number, boolean
primitive can be constructed using literal (end result: value) or constructor (end result: object) 
to convert from object to value : valueOf()
to convert from value to object : constructor

anything can be converted to string using : objectName.toString()
base can be 2 to 36

bigint always works with signed number */
