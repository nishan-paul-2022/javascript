class MyClass1 {
	public name: string;
	public age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	public add(value1: number, value2: number) {
		const value3 = value1 + value2;
		console.log(value3);
	}
}

class MyClass2 {
	constructor(
		public name: string,
		public age: number
	) {}

	public add(value1: number, value2: number) {
		const value3 = value1 + value2;
		console.log(value3);
	}
}

class MyClass3 {
	public name = 'Bruce';
	public age = 30;

	constructor(name?: string, age?: number) {
		if (name) {
			this.name = name;
		}
		if (age) {
			this.age = age;
		}
	}

	public add(value1: number, value2: number) {
		const value3 = value1 + value2;
		console.log(value3);
	}
}

class MyClass4 {
	constructor(
		public name = 'Bruce',
		public age = 30
	) {}

	public add(value1: number, value2: number) {
		const value3 = value1 + value2;
		console.log(value3);
	}
}

type T = MyClass1 | MyClass2 | MyClass3 | MyClass4;

function print(instance: T): void {
	console.log(`Name - ${instance.name}, Age - ${instance.age}`);
}

function Usecase01() {
	const instance: MyClass1 = new MyClass1('Bruce', 30);
	instance.add(10, 20);
	print(instance);
}

function Usecase02() {
	const instance: MyClass2 = new MyClass2('Wayne', 30);
	instance.add(10, 20);
	print(instance);
}

function Usecase03() {
	const instance: MyClass3 = new MyClass3();
	instance.add(10, 20);
	print(instance);
}

function Usecase04() {
	const instance: MyClass3 = new MyClass3('Logan', 67);
	instance.add(10, 20);
	print(instance);
}

function Usecase05() {
	const instance: MyClass4 = new MyClass4();
	instance.add(10, 20);
	print(instance);
}

function Usecase06() {
	const instance: MyClass4 = new MyClass4('Logan', 67);
	instance.add(10, 20);
	print(instance);
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();
Usecase05();
Usecase06();
