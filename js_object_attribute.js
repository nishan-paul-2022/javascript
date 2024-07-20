class MyClass {
	name;
	age;
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	print() {
		console.log(this.name);
		console.log(this.age);
	}
}

function Usecase01(ins) {
	console.log('Usecase - 01');

	const keys = Object.keys(ins);
	const values = Object.values(ins);
	const entries = Object.entries(ins);

	console.log(keys);
	console.log(values);
	console.log(entries);
}

function Usecase02(ins) {
	console.log('Usecase - 02');

	const keys = ins.keys();
	const values = ins.values();
	const entries = ins.entries();

	console.log(keys);
	console.log(values);
	console.log(entries);
}

const instance1 = new MyClass('paul', 27);

const instance2 = {
	firstName: 'Jhon',
	lastName: 'Wick',
	age: 41
};

const instance3 = {
	a: 1,
	b: () => {
		console.log('helloWorld');
	},
	get c() {
		return this.a;
	},
	set c(a) {
		this.a = a;
	},
	[Symbol('hashedCode')]: () => {
		console.log('hashed code');
	}
};

const instance4 = [Math.PI, 'Vikram Rathore', 300];

const instance5 = new Set(['Daredevil', 'Winter Soldier', 'US Agent']);

const instance6 = new Map([
	['apples', 500],
	['bananas', 300],
	['oranges', 200]
]);

Usecase01(instance1);
Usecase01(instance2);
Usecase01(instance3);
Usecase01(instance4);
// Usecase01(instance5); /* invalid */
// Usecase02(instance6); /* invalid */

// Usecase02(instance1);
// Usecase02(instance2); /* invalid */
// Usecase02(instance3); /* invalid */
// Usecase02(instance4); /* invalid */
Usecase02(instance5);
Usecase02(instance6);
