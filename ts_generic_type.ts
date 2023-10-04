/* eslint-disable @typescript-eslint/no-unused-vars */

class Class01 {
	age = 27;
	method01(): void {
		console.log('method-01');
	}
}

class Class02 {
	height = 5.5;
	method03(): void {
		console.log('method-02');
	}
}

class Class03 extends Class01 {
	weight = 53;
	method01(): void {
		console.log('method-01 form class-03');
	}

	method03(): void {
		console.log('method-03');
	}
}

class Class04 extends Class02 {
	surname = 'Wick';
	method02(): void {
		console.log('method-02 form class-04');
	}

	method04(): void {
		console.log('method-04');
	}
}

function Merge1(ins01: object, ins02: object) {
	const newIns = {
		...ins01,
		...ins02
	};

	console.log(newIns);
}

function Merge2<U extends object, V extends object>(ins01: U, ins02: V) {
	const newIns = {
		...ins01,
		...ins02
	};

	console.log(newIns);
}

function Merge3(ins01: Class01, ins02: Class02) {
	const newIns = {
		...ins01,
		...ins02
	};

	console.log(newIns);
}

function Merge4<U extends Class01, V extends Class02>(ins01: U, ins02: V) {
	const newIns = {
		...ins01,
		...ins02
	};

	console.log(newIns);
}

const insA = { name: 'John' };
const insB = { age: 27 };
const insC = [1, 2];
const insD = [3, 4];
const ins01 = new Class01();
const ins02 = new Class02();
const ins03 = new Class03();
const ins04 = new Class04();

type T1 = (ins01: object, ins02: object) => void;
type T2 = <U extends object, V extends object>(ins01: U, ins02: V) => void;
type T3 = (ins01: Class01, ins02: Class02) => void;
type T4 = <U extends Class01, V extends Class02>(ins01: U, ins02: V) => void;

function FunctionInvoke01(functionName: T1) {
	functionName(insA, insB);
	functionName(insC, insD);
	functionName(ins01, ins02);
	functionName(ins03, ins04);
}

function FunctionInvoke02(functionName: T3) {
	functionName(ins01, ins02);
	functionName(ins03, ins04);
}

FunctionInvoke01(Merge1);
FunctionInvoke01(Merge2);

FunctionInvoke02(Merge3);
FunctionInvoke02(Merge4);

function Prop<T, K extends keyof T>(ins: T, key: K) {
	console.log(ins[key]);
}

const ins = { name: 'John', age: 27, height: 5.5, weight: 53 };
type T = typeof ins;
type K = keyof typeof ins;
Prop<T, K>(ins, 'name');
Prop(ins, 'age');
