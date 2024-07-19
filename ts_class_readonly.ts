class MyClass {
	public name: string;
	public readonly age: number;
	public readonly CONSTANTS: number[] = [Math.PI, Math.E, Math.SQRT2];

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	public print() {
		console.log(
			`name - ${this.name}, age - ${this.age}, CONSTANTS- ${this.CONSTANTS}`
		);
	}
}

function Usecase() {
	const instance = new MyClass('Bruce', 30);

	instance.print();

	instance.name = 'Wayne';
	// instance.age = 35;
	// instance.CONSTANTS[0] = [0, 1, 2];
	instance.CONSTANTS[0] = 3;

	instance.print();
}

Usecase();
