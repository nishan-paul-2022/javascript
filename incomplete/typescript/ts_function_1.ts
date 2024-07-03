/* eslint-disable @typescript-eslint/no-explicit-any */

function UndefinedType(n: undefined) {
	console.log(n);
}

function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
	return x + y;
}

function mul(x: number, y: number): number;
function mul(x: number, y: number, z: number): number;
function mul(x: number, y: number, z?: number): number {
	if (z) {
		return x * y * z;
	}
	return x * y;
}

class Jawan {
	count = 0;

	Count(): void;
	Count(n: number): void;
	Count(n?: number): void {
		let endVal;
		if (n) {
			endVal = n;
		} else {
			endVal = ++this.count;
		}
		for (let i = 0; i < endVal; i++) {
			console.log(i);
		}
	}
}

function F01() {
	const ans1 = add(10, 20);
	const ans2: number = add(Math.PI, Math.E);
	const ans3: string = add('10', '20');
	console.log(ans1);
	console.log(ans2);
	console.log(ans3);
}

function F02() {
	console.log(mul(10, 20));
	console.log(mul(10, 20, 30));
}

function F03() {
	const jawan = new Jawan();
	jawan.Count();
	jawan.Count(10);
	jawan.Count();
}

UndefinedType(undefined);
F01();
F02();
F03();

/*
function declaration :
- function signature 
- function implementation

parameter :
- required parameter 
- optional parameter 
- default parameter 
- rest parameter 
*/
