/* eslint-disable @typescript-eslint/no-namespace */

export namespace N01 {
	export function add(a: number, b: number): void {
		console.log(a + b);
	}
}

export namespace N02 {
	export function sub(a: number, b: number): void {
		console.log(a - b);
	}
}

export namespace N02 {
	export function div(a: number, b: number): void {
		console.log(a / b);
	}
}

export default function mul(a: number, b: number): void {
	console.log(a * b);
}

// namespace is used to organize code by encapsulating
// namespace supports declaration merging with namespace and enum
// can't use default with / in namespace
