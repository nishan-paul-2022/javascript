function MathConstant(format: boolean): string | number {
	const ans = format ? `${Math.PI}` : Math.PI;
	return ans;
}

function ReturnUnknown(): unknown {
	return "I'll be back";
}

function F01() {
	const ans = MathConstant(true) as string;
	console.log(ans.length);
}

function F02() {
	const ans = <number>MathConstant(false);
	console.log(ans.toPrecision(5));
}

function F03() {
	const value = ReturnUnknown();
	const length: number = (value as string).length;
	console.log(`length of string is: ${length}`);
}

function F04() {
	const value = ReturnUnknown();
	const length: number = (<string>value).length;
	console.log(`length of string is: ${length}`);
}

F01();
F02();
F03();
F04();
