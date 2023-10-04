class ExA {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	get Age() {
		return this.age;
	}

	set Age(age) {
		this.age = age;
		// return this.age;
	}

	get FullName() {
		return this.firstName + ' ' + this.lastName;
	}

	FINGERCORE() {
		console.log('HELLO FROM FINGERCORE');
	}
}

function Hello(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = {
		name: 'paul',
		age: 27,
		height: 5.5,
		weight: 52
	};
}

function NamedFunction() {
	function func(callback) {
		callback(14);
	}

	const func01 = (x) => {
		return console.log(x);
	};
	const func02 = function (x) {
		console.log(x);
	};
	const func03 = function func(x) {
		console.log(x);
	};

	func01(10);
	func02(11);
	func03(12);
	func(func03);
}

const hello = new Hello(1, 2, 3);
console.log(hello.x);
console.log(hello.y);
console.log(hello.z);
console.log(hello.w.name);
console.log(typeof hello);
console.log(typeof hello.w);

const world = new Function('x', 'y', 'z', 'return x+y+z;');
console.log(world(1, 2, 3));
console.log(typeof world);

const exa = new ExA('nishan', 'paul', 27);
exa.why = {
	message: 'my life, my rules'
};
exa.Age = 24;
console.log(exa.Age);
console.log(exa.FullName);
console.log(exa.why.message);
exa.FINGERCORE();

const oWOC = {
	name: 'paul',
	age: 27,
	height: 5.5,
	weight: 27
};
console.log(oWOC.name);
console.log(oWOC.age);

NamedFunction();
