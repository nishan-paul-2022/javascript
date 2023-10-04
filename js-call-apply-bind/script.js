import { ExA, ExB } from './module.js';

const exa = new ExA('ben', 'affleck', 5, 2, 100);
const exb = new ExB('robert', 'pattinson', 10, 4, 150);

const arrayValues1 = [5, 10, 15, 20, 25, 30, 35, 40, 45];
const arrayValues2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function Gn() {
	exa.FullName();
}

function Hn(exa) {
	exa.FullName();
}

function In(f) {
	f();
}

function Jn(f) {
	f();
}

function Kn(f, arrayValues) {
	f(...arrayValues);
}

function ArgumentExample(/* x, y, z */) {
	let sum = 0;
	for (const i of arguments) {
		sum += i;
	}
	console.log(sum);
}

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
	exa.Fn();
	exa.Fn.call(exb);
	exa.Fn.call({
		firstName: 'how'
	});
	exa.Fn.call('how');
}

function ApplyExample() {
	exa.CalculateExcess(5, 10, 15, 20, 25, 30, 35, 40, 45);
	exa.CalculateExcess(...arrayValues1);

	exa.CalculateExcess.apply(exa, arrayValues2);
	exa.CalculateExcess.apply(exb, arrayValues2);
}

function BindExample01() {
	exa.FullName();
	Gn();
	Hn(exa);

	const exaFullName = exa.FullName.bind(exa);
	const exbFullName = exa.FullName.bind(exb);
	// In(exa.FullName);
	In(exaFullName);
	In(exbFullName);
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
	const exaCalculateExcess2 = exa.CalculateExcess.bind(exa, ...arrayValues1);
	const exbCalculateExcess3 = exa.CalculateExcess.bind(exb, ...arrayValues2);
	Jn(exaCalculateExcess1);
	Jn(exaCalculateExcess2);
	Jn(exbCalculateExcess3);
}

function BindExample03() {
	const exaCalculateExcess4 = exa.CalculateExcess.bind(exa);
	const exaCalculateExcess5 = exa.CalculateExcess.bind(exa);
	const exbCalculateExcess6 = exa.CalculateExcess.bind(exb);
	Kn(exaCalculateExcess4, arrayValues1);
	Kn(exaCalculateExcess5, arrayValues1);
	Kn(exbCalculateExcess6, arrayValues2);
}

// creating bound method
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

// creating partial function
function BindExample05() {
	function add(a, b /*, c */) {
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

ArgumentExample(1, 2, 3, 4, 5);
CallExample01();
CallExample02();
ApplyExample();
BindExample01();
BindExample02();
BindExample03();
BindExample04();
BindExample05();
