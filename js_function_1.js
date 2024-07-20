function F01(x, y) {
	console.log('regular function');
	const z = x + y;
	console.log(z);
	return z;
}

function F02(x, y) {
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

const F03 = new Function(
	'x',
	'y',
	`
	console.log('function object');
	const z = x + y;
	console.log(z);
	return z;`
);

const F04 = (x, y) => {
	console.log('arrow function expression');
	const z = x + y;
	console.log(z);
	return z;
};

const F05 = function (x, y) {
	console.log('anonymous function expression');
	const z = x + y;
	console.log(z);
	return z;
};

const F06 = function F(x, y) {
	console.log('named function expression');
	const z = x + y;
	console.log(z);
	return z;
};

function F07(x, y) {
	const z = (function () {
		console.log('self invoking anonymous function expression');
		const z = x + y;
		console.log(z);
		return z;
	})();

	return z;
}

console.log(F01);
console.log(F01.toString());
console.log(F01(10, 20));

console.log(F02(10, 20));
new F02().print();

console.log(F03(10, 20));

console.log(F04(10, 20));

console.log(F05(10, 20));

console.log(F06(10, 20));

console.log(F07(10, 20));

// F(); /* invalid */

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
