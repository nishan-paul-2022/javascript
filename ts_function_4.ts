/* eslint-disable @typescript-eslint/no-explicit-any */

function ExampleOfOverload1(message: string): void;
function ExampleOfOverload1(message: string, value: number): string;
function ExampleOfOverload1(message: string, value?: number): void | string {
	if (value === undefined) {
		console.log(message);
	} else {
		console.log(message, value);
		return 'OVERLOAD';
	}
}

function ExampleOfOverload2(message: string): void;
function ExampleOfOverload2(message: string, value: number): string;
function ExampleOfOverload2(message: number | string, value?: number): any {
	console.log(message, value);
	if (value !== undefined) {
		console.log(message, value);
		return 'OVERLOAD';
	} else {
		console.log(message);
		return undefined;
	}
}

function ExampleOfOverload3(message: string): void;
function ExampleOfOverload3(message: number): void;
function ExampleOfOverload3(message: string | number): void {
	console.log(message);
}

function ExampleOfOverload4(message: string): void;
function ExampleOfOverload4(message: number): void;
function ExampleOfOverload4(message: any): void {
	console.log(message);
}

function F01() {
	console.log(ExampleOfOverload1('message'));
	console.log(ExampleOfOverload1('message', Math.E));
}

function F02() {
	console.log(ExampleOfOverload2('message'));
	console.log(ExampleOfOverload2('message', Math.E));
	console.log(ExampleOfOverload2('message', Math.E));
}

function F03() {
	console.log(ExampleOfOverload3('message'));
	console.log(ExampleOfOverload3(Math.E));
}

function F04() {
	console.log(ExampleOfOverload4('message'));
	console.log(ExampleOfOverload4(Math.E));
}

F01();
F02();
F03();
F04();
