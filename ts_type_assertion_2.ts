/* eslint-disable @typescript-eslint/no-unused-vars */

class Class01 {
	method01(): void {
		console.log('method-01');
	}
}

class Class02 {
	method03(): void {
		console.log('method-02');
	}
}

class Class03 extends Class01 {
	method01(): void {
		console.log('method-01 form class-03');
	}

	method03(): void {
		console.log('method-03');
	}
}

type ClassType = Class01 | Class02;

function IsClass01(inst: ClassType): inst is Class01 {
	const flag = inst instanceof Class01;
	if (flag) {
		inst = inst as Class01;
		inst.method01();
	}
	return flag;
}

function UseCase(inst: ClassType) {
	if (IsClass01(inst)) {
		inst.method01();
	}
}

const inst01 = new Class01();
const inst02 = new Class02();
const inst03 = new Class03();

inst01.method01();
inst03.method01();
(inst01 as Class03).method01();
(inst03 as Class01).method01();

console.log(UseCase(inst01));
