import { ExA, ExB, members } from './module_1.js';
import MyPlane, { Car as Car, Truck as MyTruck } from './module_2.js';

MyPlane();
MyTruck();
Car();

const exa = new ExA('Nishan', 'Paul', 27);
const exb = new ExB();
const x = { ExA, ExB };
const y = { exa, exb };
const z = {
	a: 1,
	b: 2,

	c(i, j) {
		const ans = this.a * i + this.b * j;
		console.log(`C(): ${ans}`);
	},

	get d() {
		const ans = this.a + this.b;
		console.log(`D(): ${ans}`);
		return ans;
	},

	e: function (i, j) {
		const ans = this.a * i + this.b * j;
		console.log(`E(): ${ans}`);
	},

	f() {
		console.log('F()');
	},

	get g() {
		const msg = 'G()';
		console.log(msg);
		return msg;
	}
};

function ExampleZero() {
	console.log('FUNCTION - 00');
	exa.height = 5.5;
	exa.weight = 52;
	exa.Bio = function () {
		console.log(this.height);
		console.log(this.weight);
	};

	exa.PrintFullName();
	exa.PrintAge();
	exa.Bio();

	// exb.Smb();
	ExB.Smb();
	console.log(exb.PI);
}

function ExampleOne() {
	console.log('FUNCTION - 01');
	const { Add, fName, dName } = members;

	const x = 10,
		y = 20;
	Add(x, y);

	console.log(fName);

	console.log(dName);
}

function ExampleTwo() {
	console.log('FUNCTION - 02');
	x.ExA.Sma();
	x.ExB.Smb();
	y.exa.PrintAge();
	console.log(y.exb.PI);
}

function ExampleThree() {
	console.log('FUNCTION - 03');
	console.log(z.a);
	console.log(z.b);
	z.c(10, 20);
	z.d;
	z.e(10, 20);
	z.f();
	z.g;
}

function ExampleFour() {
	console.log('FUNCTION - 04');
	const { a, b, c, d, e, f, g } = z;
	console.log(a);
	console.log(b);
	c.call(z, 10, 20);
	d.call(e);
	e.call(z, 10, 20);
	f();
	g;
}

ExampleZero();
ExampleOne();
ExampleTwo();
ExampleThree();
ExampleFour();
