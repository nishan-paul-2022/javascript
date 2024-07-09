function MathConstant(format: boolean): string | number {
	const ans = format ? `${Math.PI}` : Math.PI;
	return ans;
}

function F01() {
	const ans = MathConstant(true) as string;
	console.log(ans.length);
}

function F02() {
	const ans = <number>MathConstant(false);
	console.log(ans.toPrecision(2));
}

function F03() {
	const someValue: unknown = 'Hello, TypeScript';
	const strLength: number = (someValue as string).length;
	console.log(`The length of the string is: ${strLength}`);
}

function F04() {
	const someValue: unknown = 'Hello, TypeScript';
	const strLength: number = (<string>someValue).length;
	console.log(`The length of the string is: ${strLength}`);
}

F01();
F02();
F03();
F04();
