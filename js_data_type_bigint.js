function F01() {
	const value1 = 12345n;
	const value2 = BigInt(12345);
	const value3 = BigInt('12345');

	console.log(value1, value2, value3);
	console.log(typeof value1, typeof value2, typeof value3);

	console.log(value1 === value2);
	console.log(value1 === value2);
}

function F02() {
	console.log(0b10n);
	console.log(0o10n);
	console.log(10n);
	console.log(0x10n);
}

function F03() {
	let value1 = 12345n;
	console.log(++value1);
	console.log(value1++);
}

function F04() {
	const value1 = 12345n;
	const value2 = 5n;

	console.log(value1 + value2);
	console.log(value1 - value2);
	console.log(value1 * value2);
	console.log(value1 / value2);
	console.log(value1 % value2);
	console.log(value1 ** value2);
}

function F05() {
	const value1 = 12345n;
	const value2 = 2n;

	console.log(value1 << value2);
	console.log(value1 >> value2);
	// console.log(value1 >>> value2); /* invalid */
}

F01();
F02();
F03();
F04();
F05();
