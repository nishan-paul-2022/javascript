// 'unknown' is a safer alternative to 'any', cause it requires type assertion or type checking before performing operations
function ExampleWithUnknown01() {
	let value: unknown;

	value = null;
	value = undefined;
	value = true;
	value = 42;
	value = 'hello';

	console.log(value);
}

// Direct operations on 'unknown' are not allowed without type checking or assertion
function ExampleWithUnknown02() {
	const value: unknown = 'hello';
	console.log(value);
	// value.method(); // Error: Object is of type 'unknown'
}

// Using type assertion with 'unknown'
function ExampleWithUnknown03() {
	const value: unknown = 'hello';
	const result: number = value as number; // No error, but use with caution
	console.log(result);
}

// We need to perform type checking or use type assertion to work with 'unknown'
function processUnknown(value: unknown) {
	console.log('Processing value:', value);
	if (typeof value === 'string') {
		console.log('String value:', value.toUpperCase());
	} else if (typeof value === 'number') {
		console.log('Number value:', value.toFixed(2));
	} else {
		console.log('Unknown type');
	}
}

ExampleWithUnknown01();
ExampleWithUnknown02();
ExampleWithUnknown03();

processUnknown('hello'); // Safe, with type check
processUnknown(120); // Safe, with type check
processUnknown(true); // Safe, with type check
