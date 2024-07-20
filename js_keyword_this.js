function Usecase01() {
	const random = () => {
		this.name = 'helloWorld';
	};

	const value = random.toString();
	console.log(value);
	// const instance = new random(); /* invalid */
}

function Usecase02() {
	const random = function () {
		this.name = 'helloWorld';
	};

	const instance = new random();
	console.log(instance.name);
}

function Usecase03() {
	class random {
		static name = 'helloWorld';
		location = 'dhaka';

		print() {
			console.log(this.name); // undefined
			console.log(this.location);
		}

		static log() {
			console.log(this.name);
			console.log(this.location); // undefined
		}
	}

	const instance = new random();
	instance.print();
	random.log();
	// instance.log(); /* invalid */
}

function Usecase04() {
	const random = function () {
		this.name = 'helloWorld';
		console.log('ThankYou');
	};

	const instance = new random();
	console.log(instance.name);
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();

/*
LIST OF KEYWORDS (VALID) :
	- var, let, const
	- try, throw, catch, finally	
	- continue, break
	- function, return, yield, arguments, await 
	- class, extends, static, this, new, super
	- for, do, while, in
	- if, else, switch, case
	- true, false
	- null, undefined 
	- export, import, default 
	- typeof, instanceof 
	- eval
	- delete

	- goto, with, debugger

	- interface
	- abstract, implements
	- boolean, void
	- public, private, protected
	- enum */

/*
LIST OF KEYWORDS (INVALID) :
	- native	
	- package, synchronized, transient, volatile
	- byte, short, int, long, float, double, char */

/*
	- function can construct object
	- method can contribute object
	- arrow-function can't create object or contribute object
	- 'this' refers to created-object or contributed-object 
	- function and method can have 'this'
	- arrow-function can't have 'this' */
