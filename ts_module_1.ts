/* eslint-disable @typescript-eslint/no-namespace */

export namespace NameA {
	export function add(a: number, b: number): void {
		console.log(a + b);
	}
}

export namespace NameB {
	export function sub(a: number, b: number): void {
		console.log(a - b);
	}
}

export namespace NameB {
	export function mul(a: number, b: number): void {
		console.log(a * b);
	}
}

export function div(a: number, b: number): void {
	console.log(a / b);
}

export default function calculate(a: number, b: number): void {
	console.log(a + b);
	console.log(a - b);
	console.log(a / b);
	console.log(a * b);
}
