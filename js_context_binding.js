/* eslint-disable arrow-body-style */

class ClassA {
	constructor(firstName, lastName, sub, div, constant) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.sub = sub;
		this.div = div;
		this.constant = constant;
	}

	FullName() {
		const fullName = `${this.firstName} ${this.lastName}`;
		console.log(fullName);
	}

	Calculate(x, y, z) {
		const sum = x + y + z;
		const sub = sum - this.sub;
		const div = sub / this.div;
		const ans = div + this.constant;
		console.log(ans);
	}

	CalculateExcess(x, y, z, u, v, w, a, b, c) {
		const sum = x + y + z + u + v + w + a + b + c;
		const sub = sum - this.sub;
		const div = sub / this.div;
		const ans = div + this.constant;
		console.log(ans);
	}

	Method() {
		console.log(this, typeof this);
	}
}

class ClassB {
	constructor(firstName, lastName, sub, div, constant) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.sub = sub;
		this.div = div;
		this.constant = constant;
	}
}

const exa = new ClassA('Ben', 'Affleck', 5, 2, 100);
const exb = new ClassB('Robert', 'Pattinson', 10, 4, 150);

const array1 = [5, 10, 15, 20, 25, 30, 35, 40, 45];
const array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const function1 = () => exa.FullName();
const function2 = (exa) => exa.FullName();
const function3 = (functor) => functor();
const function4 = (functor) => functor();
const function5 = (functor, array) => functor(...array);

function CallExample01() {
	exa.FullName();
	exa.FullName.call(exb);

	const x1 = 5,
		y1 = 10,
		z1 = 15;
	exa.Calculate(x1, y1, z1);

	const x2 = 5,
		y2 = 10,
		z2 = 15;
	exa.Calculate.call(exb, x2, y2, z2);
}

function CallExample02() {
	exa.Method();
	exa.Method.call(exb);
	exa.Method.call({
		firstName: 'Logan'
	});
	exa.Method.call('Logan');
}

function ApplyExample() {
	exa.CalculateExcess(5, 10, 15, 20, 25, 30, 35, 40, 45);
	exa.CalculateExcess(...array1);

	exa.CalculateExcess.apply(exa, array2);
	exa.CalculateExcess.apply(exb, array2);
}

function BindExample01() {
	exa.FullName();
	function1();
	function2(exa);

	const exaFullName = exa.FullName.bind(exa);
	const exbFullName = exa.FullName.bind(exb);

	// function3(exa.FullName); /* invalid */
	function3(exaFullName);
	function3(exbFullName);
}

function BindExample02() {
	const exaCalculateExcess1 = exa.CalculateExcess.bind(
		exa,
		5,
		10,
		15,
		20,
		25,
		30,
		35,
		40,
		45
	);
	const exaCalculateExcess2 = exa.CalculateExcess.bind(exa, ...array1);
	const exbCalculateExcess3 = exa.CalculateExcess.bind(exb, ...array2);

	function4(exaCalculateExcess1);
	function4(exaCalculateExcess2);
	function4(exbCalculateExcess3);
}

function BindExample03() {
	const exaCalculateExcess4 = exa.CalculateExcess.bind(exa);
	const exaCalculateExcess5 = exa.CalculateExcess.bind(exa);
	const exbCalculateExcess6 = exa.CalculateExcess.bind(exb);

	function5(exaCalculateExcess4, array1);
	function5(exaCalculateExcess5, array1);
	function5(exbCalculateExcess6, array2);
}

/* creating bound method */
function BindExample04() {
	class Counter {
		constructor() {
			this.count = 0;
			this.incrementBind = this.increment.bind(this);
		}

		increment() {
			this.count++;
			console.log(this.count);
		}
	}

	const counter = new Counter();
	const incrementBind1 = counter.incrementBind;
	const incrementBind2 = counter.increment.bind(counter);

	counter.increment();
	counter.incrementBind();
	incrementBind1();
	incrementBind2();
}

/* creating partial function */
function BindExample05() {
	function add(a, b) {
		return a + b;
	}

	const add1 = add.bind(null, 1);
	const add2 = add.bind(null, 1, 2);
	const add3 = add.bind(null, 1, 2, 3);
	const add11 = add1.bind(null, 2);
	const add22 = add2.bind(null, 3);

	console.log(add1(2, 3));
	console.log(add2(3));
	console.log(add3());
	console.log(add11(3));
	console.log(add22());
}

CallExample01();
CallExample02();

ApplyExample();

BindExample01();
BindExample02();
BindExample03();
BindExample04();
BindExample05();
