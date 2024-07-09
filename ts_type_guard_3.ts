class Class1 {
	method1(): void {
		console.log('method-1 / class-1');
	}
}

class Class2 extends Class1 {
	method1(): void {
		console.log('method-1 / class-2');
	}

	method2(): void {
		console.log('method-2 / class-2');
	}
}

type ClassType = Class1 | Class2;

function isClass2(inst: ClassType): inst is Class2 {
	return inst instanceof Class2;
}

function InstanceChecking(inst: ClassType) {
	if (isClass2(inst)) {
		console.log('typescript knows object is instance of class-2');
		inst.method2();
	} else {
		console.log('typescript knows object is instance of class-1');
		inst.method1();
	}
}

const inst1 = new Class1();
const inst2 = new Class2();
const inst12 = inst1 as Class2;
const inst21 = inst2 as Class1;

InstanceChecking(inst12);
InstanceChecking(inst21);

/* type assertion doesn't work upon class instance */
