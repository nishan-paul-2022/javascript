function Trim() {
	const text1 = '     helloWorld     ';
	const text2 = text1.trimStart();
	const text3 = text1.trimEnd();
	console.log(text1 + '/');
	console.log(text2 + '/');
	console.log(text3 + '/');
}

function TypedArray() {
	const uint8Array = new Uint8Array(5);

	uint8Array[0] = 42;
	uint8Array[1] = 100;
	uint8Array[2] = 255;
	uint8Array[3] = 355;
	uint8Array[4] = 'hello';

	console.log(uint8Array);
	console.log(uint8Array[2]);
	console.log(uint8Array[3]);
	console.log(uint8Array[4]);

	console.log('for-loop:');
	for (let i = 0; i < uint8Array.length; i++) {
		console.log(uint8Array[i]);
	}

	const regularArray = Array.from(uint8Array);
	console.log(regularArray);
}

function CopyWithin() {
	const fruits1 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Papaya'];
	const fruits2 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Papaya'];
	const fruits3 = fruits1.copyWithin(2, 0);
	fruits2.copyWithin(2, 0, 2);
	console.log(fruits3);
	console.log(fruits2);
}

function Reference() {
	const number1 = [1, 2, 3, 4, 5];
	const number2 = number1;
	number1[0] = 11;
	console.log(number1);
	console.log(number2);
}

function ArrayFrom01() {
	const values = [2, 3, 4];

	function callback(value, index) {
		const score = value ** this.exponent + index ** this.exponent;
		return score;
	}

	const context = {
		exponent: 2
	};

	const array = Array.from(values, callback, context);

	console.log(array);
}

function ArrayFrom02() {
	const account = {
		exponent: 2,
		values: [2, 3, 4],
		callback: function (value, index) {
			const score = value ** this.exponent + index ** this.exponent;
			return score;
		}
	};

	const array = Array.from(account.values, account.callback, account);

	console.log(array);
}

Trim();
TypedArray();
CopyWithin();
Reference();
ArrayFrom01();
ArrayFrom02();

/* 	
TypedArray	: Int8Array, Uint8Array, Float32Array, ...
Uint8Array 	:
	- size of array is defined 
	- value at each index is integer and 0-255 */
