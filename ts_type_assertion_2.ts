class Class01 {
	method01(): void {
		console.log('method-01 / class-01');
	}
}

class Class02 extends Class01 {
	method01(): void {
		console.log('method-01 / class-02');
	}

	method02(): void {
		console.log('method-02 / class-02');
	}
}

type ClassType = Class01 | Class02;

function IsClass02(inst: ClassType): inst is Class02 {
	return inst instanceof Class02;
}

function UseCase(inst: ClassType) {
	if (IsClass02(inst)) {
		console.log('typescript knows object is instance of class-02');
		inst.method02();
	} else {
		console.log('typescript knows object is instance of class-01');
		inst.method01();
	}
}

const inst01 = new Class01();
const inst02 = new Class02();

inst01.method01();
inst02.method01();
inst02.method02();
(inst01 as Class02).method01();
(inst02 as Class01).method01();

UseCase(inst01);
UseCase(inst02);
