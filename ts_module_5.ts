export function add(a: number, b: number): number {
	return a + b;
}

export function sub(a: number, b: number): number {
	return a - b;
}

export function div(a: number, b: number): number {
	return a / b;
}

export function mul(a: number, b: number): number {
	return a * b;
}

export default function calculate(a: number, b: number): void {
	console.log(a + b);
	console.log(a - b);
	console.log(a / b);
	console.log(a * b);
}
