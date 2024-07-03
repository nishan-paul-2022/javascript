/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-condition */

function Throw(): never {
	const message = 'NOT-OK';
	throw message;
}

function InfiniteLoop(): never {
	while (true) {
		// this function never exits
	}
}

function Catch(): void {
	try {
		Throw();
	} catch (message) {
		console.log(message);
	}
}

function HandleAny(input: any) {
	console.log(input);
	console.warn(input);
	console.error(input);
	console.table(input);
}

function HandleUnknown(input: unknown) {
	if (typeof input === 'string') {
		console.log(input.toUpperCase());
	} else if (typeof input === 'number') {
		console.log(input.toFixed(2));
	} else {
		console.log(input);
	}
}

function UnknownType() {
	const v1: unknown = 'Pathan';
	HandleUnknown(v1);

	const v2: string = 'Pathan';
	HandleUnknown(v2);

	const v3: number = 42;
	HandleUnknown(v2);

	const v4: object = { prop: 'value' };
	HandleUnknown(v4);
}

function AnyType() {
	const v1: any = true;
	HandleAny(v1);

	const v2: string = 'Pathan';
	HandleAny(v2);

	const v3: number = 42;
	HandleAny(v3);

	const v4: object = { prop: 'value' };
	HandleAny(v4);
}

Catch();
UnknownType();
AnyType();
