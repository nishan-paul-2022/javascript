function Trim() {
	const text1 = '     helloWorld     ';
	const text2 = text1.trimStart();
	const text3 = text1.trimEnd();
	console.log(text1 + '/');
	console.log(text2 + '/');
	console.log(text3 + '/');
}

// create a new Uint8Array with a length of 4 elements
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

Trim();
TypedArray();

/*
TypedArray: Int8Array, Float32Array, . . . 

Uint8Array :
    - size of array is defined 
    - value at each index is integer and 0-255
*/
