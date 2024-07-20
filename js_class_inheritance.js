class Parent {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.company = 'enosis';
	}

	Identity() {
		const sum = this.x + this.y + this.z;
		console.log(`PARENT ${sum} and ${this.company}`);
	}

	Greeting() {
		console.log('helloFromTheOtherSide');
	}

	static obj = { i: 1, f: 3.1416 };

	static str = 'OK';

	static Love = function () {
		console.log('hello World');
	};
}

class Child extends Parent {
	constructor(u, v, w) {
		super(u + 2, v - 2, w * 2);
		this.u = u;
		this.v = v;
		this.w = w;
		this.company = 'N.P';
	}

	Identity() {
		Parent.prototype.Identity.call(this);
		super.Identity();
		const sum = this.u + this.v + this.w;
		console.log(`CHILD ${sum} and ${this.company}`);
	}
}

const parent = new Parent(1, 2, 3);
const child = new Child(4, 5, 6);
parent.Identity();
child.Identity();
Parent.prototype.Identity.call(child);

Parent.prototype.Greeting();
Parent.prototype.x = 10;
console.log(Parent.prototype.x);

console.log(Parent.obj.i);
console.log(Parent.obj.f);
console.log(Parent.str);
Parent.Love();

console.log(Parent.prototype.str);

const parentName = child.constructor.__proto__.name;
console.log(parentName);
