type T1 = (x: number, y: number) => void;

type T2 = (x: string, y: string) => string;

type T3 = {
	ID: number;
	name: string;
	print(caption: string): void;
	arithmatic: T1;
};

// Class
class MyClass {
	constructor(
		public ID: number,
		public name: string
	) {}

	public print(caption: string) {
		console.log(caption);
	}

	public arithmatic: T1 = (x, y) => {
		console.log(x + y);
		console.log(x - y);
		console.log(x * y);
		console.log(x / y);
	};
}

// Regular Object
const myObject: T3 = {
	ID: 120,
	name: 'ubuntu',
	print: function (caption) {
		console.log(caption);
	},
	arithmatic: (x, y) => {
		console.log(x + y);
		console.log(x - y);
		console.log(x * y);
		console.log(x / y);
	}
};

const myClassInstance: MyClass = new MyClass(1162036, 'paul'); // Class Instance

// Regular Function
function myFunction1(x: number, y: number): number {
	const z = x + y;
	return z;
}

// Arrow Function
const myFunction2: T2 = (x, y) => {
	const z = `${x} ${y}`;
	return z;
};

function demonstrateTypes(
	obj: T3,
	classInstance: MyClass,
	func1: (x: number, y: number) => number,
	func2: T2
): void {
	console.log(`Regular Object: ${JSON.stringify(obj)}`);
	console.log(`Class Instance: ${JSON.stringify(classInstance)}`);
	console.log(`Function Result 01: ${func1(10, 20)}`);
	console.log(`Function Result 02: ${func2('Winter', 'Soldier')}`);
}

demonstrateTypes(myObject, myClassInstance, myFunction1, myFunction2);
