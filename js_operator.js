/* eslint-disable eqeqeq */

// optional-chaining operator | ?. | checking null / undefined
function Example01() {
	class value1 {}
	console.log(value1.something?.real);

	const value2 = {
		ID: 1,
		name: 'John',
		address: {
			details: {
				street: '123 Main St',
				city: 'Dhaka',
				zip: '12345'
			}
		}
	};
	console.log(value2.address.details.city);
	console.log(value2.address.details?.city);
	console.log(value2.address.detailss?.city);
	// console.log(value2.address.detailss.street);

	const value3 = {
		a: 1
	};
	console.log(value3.a.b?.c.d.e);
	console.log(value3.a.b?.c?.d.e);
	console.log(value3.a.b?.c?.d?.e);
}

// null-coalescing operator | ?? | checking null / undefined
function Example02() {
	const client = null;
	const developer = undefined;
	const manager = Math.E;

	const ans1 = client ?? 'U/N';
	console.log(ans1);

	const ans2 = developer ?? 'U/N';
	console.log(ans2);

	const ans3 = manager ?? 'U/N';
	console.log(ans3);
}

function Example03() {
	// Bitwise AND (&)
	const andResult = 3 & 5;
	console.log(`Bitwise AND / 011 & 101: ${andResult}`); // Output: 1

	// Bitwise OR (|)
	const orResult = 3 | 5;
	console.log(`Bitwise OR / 011 | 101: ${orResult}`); // Output: 7

	// Bitwise XOR (^)
	const xorResult = 3 ^ 5;
	console.log(`Bitwise XOR / 011 ^ 101: ${xorResult}`); // Output: 6

	// Bitwise NOT (~)
	const notResult1 = ~3;
	console.log(`Bitwise NOT / ~011: ${notResult1}`); // Output: -4

	const notResult2 = ~-3;
	console.log(`Bitwise NOT / ~111: ${notResult2}`); // Output: 2

	// Zero Fill Left Shift (<<)
	const leftShiftResult = 3 << 1;
	console.log(`Left Shift / 011: ${leftShiftResult}`); // Output: 6

	// Sign Preserving Right Shift (>>)
	const rightShiftResult = 3 >> 1;
	console.log(`Signed Right Shift / 011: ${rightShiftResult}`); // Output: 1

	// Zero Fill Right Shift (>>>)
	const zeroFillRightShiftResult1 = -3 >>> 1;
	console.log(`Zero Fill Right Shift / 111: ${zeroFillRightShiftResult1}`); // Output: 2147483645 (positive)

	const zeroFillRightShiftResult2 = 3 >>> 1;
	console.log(`Zero Fill Right Shift / 011: ${zeroFillRightShiftResult2}`); // Output: 1 (positive)
}

// bitwise-not operator | ~ | formula: -1*(n+1)
function Example04() {
	const a = 3.14;
	const b = Math.floor(a);
	const c = ~~a;

	console.log(~3);
	console.log(~-4);
	console.log(b);
	console.log(c);
	console.log(b == c);
	console.log(b === c);
	console.log(Math.floor(3.56));
	console.log(Math.trunc(3.56));
	console.log(Math.trunc(0.56));
}

// zero fill right shift | >>>
function Example05() {
	const dec1 = 5;
	const ans1a = dec1.toString(2); // binrary value
	const ans1b = (dec1 >>> 0).toString(2); // binrary value
	console.log(ans1a, ans1b);

	const dec2 = -5;
	const ans2a = dec2.toString(2); // 1's complementary binrary value
	const ans2b = (dec2 >>> 0).toString(2); // 1's complementary binrary value
	console.log(ans2a, ans2b);
}

Example01();
Example02();
Example03();
Example04();
Example05();

/* 
TYPES OF OPERATOR :
	- postfix 
	- prefix 
	- not 
	- unary 
	- arithmatic 
	- shift 
	- relational 
	- comparison
	- bitwise 
	- logical 
	- conditional 
	- assignment
 
JS uses 32 bits bitwise-operands */
