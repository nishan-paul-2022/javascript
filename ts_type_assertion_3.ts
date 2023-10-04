/* eslint-disable @typescript-eslint/no-unused-vars */

function AngleBracketForAssertion(format: boolean): number | string {
	const ans = format ? `${Math.PI}` : Math.PI;
	return ans;
}

function UseCase01() {
	const ans1 = AngleBracketForAssertion(true) as string;
	const ans2 = <number>AngleBracketForAssertion(false);
}

function UseCase02() {
	type F = (data: string) => void;
	const callback: F = <F>((data) => {
		console.log(data);
	});
}

UseCase01();
UseCase02();
