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

const inst1 = new Class1();
const inst2 = new Class2();
const inst12 = inst1 as Class2;
const inst21 = <Class1>inst2;

inst1.method1();

inst2.method1();
inst2.method2();

inst12.method1();
// inst12.method2(); /* invalid */

inst21.method1();
// inst21.method2(); /* invalid */

/* type assertion doesn't work upon class instance */
