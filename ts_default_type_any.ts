/* eslint-disable @typescript-eslint/no-explicit-any */

// 'any' allows any type of value and bypasses type checking
function ExampleWithAny01() {
	let value: any;

	value = null;
	value = undefined;
	value = true;
	value = 42;
	value = 'hello';

	console.log(value);
}

// We can perform any operation on a variable of type 'any' without any type checking
function ExampleWithAny02() {
	const value: any = 'hello';
	try {
		value.method(); // No error, but might cause runtime error if 'method' is not a function
	} catch (error) {
		console.log((error as Error).message);
	}
}

function ExampleWithAny03() {
	const value: any = 'hello';
	const result: number = value; // No error, but might cause runtime error if 'value' is not a number
	console.log(result);
}

// We need to perform type checking or use type assertions to work with 'unknown'
function processAny(value: any) {
	console.log('Processing value:', value);
	try {
		console.log('String value:', value.toUpperCase()); // No type check, might cause runtime error
	} catch (error) {
		try {
			console.log('Number value:', value.toFixed(2)); // No type check, might cause runtime error
		} catch (error) {
			console.log('Unknown type');
		}
	}
}

ExampleWithAny01();
ExampleWithAny02();
ExampleWithAny03();

processAny('hello'); // No error, but unsafe
processAny(120); // No error, but unsafe
processAny(true); // No error, but unsafe

/* 
typescript configuration ("strictNullChecks": true) | no implicit any
linting 											| no explicit any  

data type: 
	primitive, non-primitive 
	default, user-defined
	reusable, non-reusable
	utility (default + reusable)

primitive : stirng, number, boolean, bigint, symbol, null, undefined
non-primitive : all others */
