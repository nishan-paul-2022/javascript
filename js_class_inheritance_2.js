class Parent {
	x = 10;
	y = 20;
	z = 30;

	total() {
		const sum = this.x + this.y + this.z;
		console.log(`PARENT : ${sum}`);
	}

	adele() {
		console.log('hello-from-the-other-side');
	}
}

class Child extends Parent {
	x = 11;
	y = 21;
	z = 31;

	total() {
		const sum = this.x + this.y + this.z;
		console.log(`CHILD : ${sum}`);
	}

	comparison() {
		super.total();
		this.total();
		Parent.prototype.total.call(this);
	}
}

const parent = new Parent();
const child = new Child();

function F01() {
	parent.total();
	parent.total.call(parent);
	parent.total.call(child);
}

function F02() {
	Parent.prototype.total();
	Parent.prototype.total.call(parent);
	Parent.prototype.total.call(child);
}

function F03() {
	child.total();
	child.total.call(parent);
	child.total.call(child);
}

function F04() {
	Child.prototype.total();
	Child.prototype.total.call(parent);
	Child.prototype.total.call(child);
}

function F05() {
	child.comparison();
	Child.prototype.comparison.call(child);
}

function F06() {
	parent.adele();
	Parent.prototype.adele();

	child.adele();
	Child.prototype.adele();
}

function F07() {
	console.log(parent.x);
	console.log(Parent.prototype.x);

	parent.x = 40;
	Parent.prototype.x = 50;
	const foster = new Parent();

	parent.total();
	foster.total();
}

function F08() {
	console.log(parent.total);
	console.log(Parent.prototype.total);

	parent.total = function () {
		console.log(this.x);
	};

	Parent.prototype.total = function () {
		console.log(this.x ** 2);
	};

	const foster = new Parent();

	parent.total();
	foster.total();
}

function F09() {
	console.log(parent.constructor.__proto__.name);
	console.log(child.constructor.__proto__.name);
}

F01();
F02();
F03();
F04();
F05();
F06();
F07();
F08();
F09();
