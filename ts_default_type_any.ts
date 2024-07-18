/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-explicit-any */

// 'any' allows every type of value without type checking and type assertion
function ExampleWithAny01() {
	let value: any;

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

function ExampleWithAny02() {
	const value: any = 'ubuntu';
	try {
		value.method(); // no error, but might cause runtime error if 'method' is not a function
	} catch (error) {
		console.log((error as Error).message);
	}
}

function ExampleWithAny03() {
	const value: any = 'ubuntu';
	const result: number = value; // no error, but might cause runtime error if 'value' is not a number
	console.log(result);
}

// no need to perform type checking or use type assertion to work with 'any'
function processAny(value: any) {
	console.log('Processing value:', value);

	try {
		console.log('string type:', value.toUpperCase()); // no type checking, might cause runtime error
	} catch (error) {
		try {
			console.log('number type:', value.toFixed(2)); // no type checking, might cause runtime error
		} catch (error) {
			console.log('unknown type');
		}
	}
}

ExampleWithAny01();
ExampleWithAny02();
ExampleWithAny03();

processAny('ubuntu');
processAny(120);
processAny(true);

/* 
typescript configuration [ "strictNullChecks": true ]	| no implicit any
linting 											 	| no explicit any  

data type: 
	primitive 	| non-primitive 
	default		| user-defined
	reusable	| non-reusable
	alias		| interace
	utility 	[ default + reusable ]

primitive 		: stirng, number, boolean, bigint, symbol, null, undefined
non-primitive 	: others */
