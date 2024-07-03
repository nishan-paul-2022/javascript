class C01 {
	readonly age: number;
	readonly values: number[] = [Math.PI, Math.E, Math.SQRT2];
	constructor(age: number) {
		this.age = age;
	}
}

class C02 {
	constructor(
		public age: number,
		protected weight: number,
		private ups: string
	) {
		console.log('C02');
	}

	PrintValues() {
		console.log(this.age);
		console.log(this.weight);
		console.log(this.ups);
	}
}

class C03 {
	private static counter = 0; // type-inference

	public static Counter() {
		console.log(C03.counter++);
	}

	public static GetCounter() {
		console.log(this.counter);
	}
}

function F01() {
	const numbers = [1, 2, 3];
	// numbers = [0,1,3];
	numbers[0] = 10;
	console.log(numbers);

	const c01 = new C01(27);
	// c01.values = [0,1,2];
	c01.values[0] = 3.1416;
	console.log(c01.values);
}

function F02() {
	const c02 = new C02(27, 53, 'raw');
	c02.PrintValues();
}

function F03() {
	C03.Counter();
	C03.Counter();
	C03.Counter();
	C03.GetCounter();
	C03.GetCounter();
}

F01();
F02();
F03();
