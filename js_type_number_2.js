/* eslint-disable @typescript-eslint/no-loss-of-precision */

function F01() {
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

function F02() {
	const num8 = 123456789123456789;
	console.log(isFinite(1 / 0));
	console.log(isNaN(0 / 0));
	console.log(Number.isInteger(num8));
	console.log(Number.isSafeInteger(num8));
}

function F03() {
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

function F04() {
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

// creating an array from an iterable
function F05() {
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

// numeric separator _
function F06() {
	const num13 = 1_000_000_000;
	const num14 = 1000000000;
	console.log(num13 === num14);
}

/* octal */
function F07() {
	const num15 = 0o32;

	// argument of toString() is the base of output string-number and it is optional
	console.log(num15.toString(32));
	console.log(num15.toString(16));
	console.log(num15.toString(12));
	console.log(num15.toString(10));
	console.log(num15.toString(8));
	console.log(num15.toString(2));
}

F01();
F02();
F03();
F04();
F05();
F06();
F07();
