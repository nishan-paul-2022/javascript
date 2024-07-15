function Usecase01() {
	const randFunction = () => {
		this.name = 'helloWorld';
	};

	console.log(randFunction.toString());
	// const randObject = new randFunction(); /* invalid */
}

function Usecase02() {
	const randFunction = function () {
		this.name = 'helloWorld';
	};

	const randObject = new randFunction();
	console.log(randObject.name);
}

function Usecase03() {
	class RandomClass {
		static name = 'helloWorld';
		location = 'dhaka';

		print01() {
			console.log(this.name); // undefined
			console.log(this.location);
		}

		static print02() {
			console.log(this.name);
			console.log(this.location); // undefined
		}
	}

	const randObject = new RandomClass();
	randObject.print01();
	RandomClass.print02();
	// randObject.print02(); /* invalid */
}

function Usecase04() {
	const randFunction = function () {
		this.name = 'helloWorld';
		console.log('ThankYou');
	};

	const randObject = new randFunction();
	console.log(randObject.name);
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();

/*
- function can construct object
- method can contribute object
- arrow-function can't create object or contribute object
- 'this' refers to created-object or contributed-object 
- function and method can have 'this'
- arrow-function can't have 'this' */
