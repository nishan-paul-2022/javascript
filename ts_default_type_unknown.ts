/* eslint-disable arrow-body-style */

// 'unknown' allows every type of value with type checking and type assertion
function Example01() {
	let value: unknown;

	value = 'ubuntu';
	value = 120;
	value = true;
	value = [1, 2, 3];
	value = {};
	value = { a: 1 };
	value = (x: number): number => x;
	value = new Set([1, 2]);
	value = new Map([[1, 2]]);
	value = null;
	value = undefined;

	console.log(value);
}

// direct operations on 'unknown' are not allowed without type checking or assertion
function Example02() {
	const value: unknown = 'ubuntu';
	console.log(value);
	// value.method(); // error: Object is of type 'unknown'
}

// using type assertion with 'unknown'
function Example03() {
	const value: unknown = 'ubuntu';
	const result: number = value as number; // no error, but use with caution
	console.log(result);
}

// need to perform type checking or use type assertion to work with 'unknown'
function print(value: unknown) {
	console.log('processing value:', value);

	if (typeof value === 'string') {
		console.log('string type:', value.toUpperCase());
	} else if (typeof value === 'number') {
		console.log('number type:', value.toFixed(2));
	} else {
		console.log('unknown type');
	}
}

Example01();
Example02();
Example03();

print('ubuntu');
print(120);
print(true);
