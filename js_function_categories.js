function case1() {
	function F(x, y) {
		console.log('regular function');
		const z = x + y;
		console.log(z);
		return z;
	}

	const value = F(10, 20);
	console.log(value);
	console.log(F);
	console.log(F.toString());
}

function case2() {
	function F(x, y) {
		console.log('constructor function');

		if (x && y) {
			const z = x + y;
			console.log(z);
			return z;
		}

		this.name = 'paul';
		this.age = 27;
		this.print = function () {
			console.log(this.name);
			console.log(this.age);
		};
	}

	const value = F(10, 20);
	const instance = new F();
	console.log(value);
	instance.print();
}

function case3() {
	const F = new Function(
		'x',
		'y',
		`
	console.log('function object');
	const z = x + y;
	console.log(z);
	return z;`
	);

	const value = F(10, 20);
	console.log(value);
}

function case4() {
	const F = (x, y) => {
		console.log('arrow function expression');
		const z = x + y;
		console.log(z);
		return z;
	};

	const value = F(10, 20);
	console.log(value);
}

function case5() {
	const F = function (x, y) {
		console.log('anonymous function expression');
		const z = x + y;
		console.log(z);
		return z;
	};

	const value = F(10, 20);
	console.log(value);
}

function case6() {
	const F = function useless(x, y) {
		console.log('named function expression');
		const z = x + y;
		console.log(z);
		return z;
	};

	const value = F(10, 20);
	console.log(value);
	// useless(); /* invalid */
}

function case7() {
	function F(x, y) {
		const z = (function () {
			console.log('self invoking anonymous function expression');
			const z = x + y;
			console.log(z);
			return z;
		})();

		return z;
	}

	const value = F(10, 20);
	console.log(value);
}

case1();
case2();
case3();
case4();
case5();
case6();
case7();

/* 
	function : function signature and function implementation

	- function expression / not reusable 
		:: anonymous function expression 
		:: arrow function expression 
		:: named function expression 

	- function declaration / reusable 
		:: regular function 
		:: constructor function 
		:: constructor 
		:: static / non-static method 
		:: static / non-static accessor (getter / setter) 
		:: function object 
		:: function variable 

	@ recursive function : function calling function itself

	@ nested function / closure : function within function 
		# main concept behind closure : child function can access all members of parent function
		:: static member
		:: data encapsulation
		:: predefined beahviour of function
		:: memorization
		:: currying 

	@ nested function-calling : funtion calling function 
		:: callback hell : callback within callback */
