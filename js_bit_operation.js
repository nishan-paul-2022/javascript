function dec2bin(dec) {
	const ans1 = (dec >>> 0).toString(2);
	const ans2 = dec.toString(2);
	console.log(ans1);
	console.log(ans2);
}

function bin2dec(bin) {
	const ans = parseInt(bin, 2);
	console.log(ans);
}

function bitOperation() {
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

dec2bin(-5);
bin2dec(101);
bitOperation();

/* 
-3: 111
 3: 011
 5: 101 
 
JS uses 32 bits bitwise-operands */
