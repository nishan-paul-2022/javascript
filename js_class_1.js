class ExampleClass {
	static count = 0;

	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
		ExampleClass.count++;
	}

	static get counter() {
		return ExampleClass.count;
	}

	static greetings() {
		console.log('GREETINGS FROM ADD()');
	}

	add() {
		ExampleClass.greetings();

		const sum = this.x + this.y + this.z;
		console.log(sum);

		this.count = 15;

		this.hello = function () {
			console.log('Hello ' + this.x);
		};

		this.returnFunction1 = function () {
			console.log('returnFunction1');

			function homeWork() {
				console.log('Add -> returnFunction1 -> homeWork');
			}

			return homeWork;
		};

		this.returnFunction2 = function () {
			console.log('returnFunction2');
			return this.hello;
		};
	}

	extra() {
		console.log('EXTRA');
		this.welcome = function () {
			console.log('welcome');

			function salute() {
				this.add();
			}

			return salute;
		};
	}
}

const example = new ExampleClass(10, 20, 30);

function staticExample() {
	console.log('staticExample');
	ExampleClass.greetings();
	console.log(ExampleClass.count);
	console.log(ExampleClass.counter);
}

function methodWithMember() {
	console.log('methodWithMember');
	// console.log(example.count);
	// example.hello();
	example.add();
	example.hello();
	console.log(example.count);
}

function methodReturnsFunction1() {
	console.log('methodReturnsFunction1');
	const homeWork = example.returnFunction1();
	homeWork();

	const hello = example.returnFunction2();
	// hello();
	hello.call(example);
}

function methodReturnsFunction2() {
	console.log('methodReturnsFunction2');
	example.extra();
	const welcome = example.welcome();
	// welcome();
	welcome.call(example);
}

staticExample();
methodWithMember();
methodReturnsFunction1();
methodReturnsFunction2();
