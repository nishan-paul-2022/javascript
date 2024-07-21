class Class1 {
	constructor(x) {
		this.x = x;
	}

	print() {
		return this.x;
	}

	add(y) {
		this.x += y;
		return this;
	}

	sub(y) {
		this.x -= y;
		return this;
	}

	mul(y) {
		this.x *= y;
		return this;
	}

	div(y) {
		this.x /= y;
		return this;
	}
}

function Class2(x) {
	this.x = x;

	this.print = function () {
		return this.x;
	};

	this.add = function (y) {
		this.x += y;
		return this;
	};

	this.sub = function (y) {
		this.x -= y;
		return this;
	};

	this.mul = function (y) {
		this.x *= y;
		return this;
	};

	this.div = function (y) {
		this.x /= y;
		return this;
	};
}

function F01() {
	const instance = new Class1(10);
	const result = instance.add(2).sub(2).mul(4).div(8).print();
	console.log(result);
}

function F02() {
	const instance = new Class2(10);
	const result = instance.add(2).sub(2).mul(4).div(8).print();
	console.log(result);
}

F01();
F02();
