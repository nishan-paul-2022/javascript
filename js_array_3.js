// create a new Uint8Array with a length of 4 elements
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

console.log('\n for-loop:');
for (let i = 0; i < uint8Array.length; i++) {
	console.log(uint8Array[i]);
}

const regularArray = Array.from(uint8Array);
console.log(regularArray);

/*
TypedArray: Int8Array, Float32Array, . . . 

uint8Array :
    - size of array is defined 
    - value at each index is integer and 0-255
*/
