class Class1 {
	constructor(x) {
		this.x = x;
	}

	print() {
		return this.x;
	}

	Add(y) {
		this.x += y;
		return this;
	}

	Sub(y) {
		this.x -= y;
		return this;
	}

	Mul(y) {
		this.x *= y;
		return this;
	}

	Div(y) {
		this.x /= y;
		return this;
	}
}

function Class2(x) {
	this.x = x;

	this.print = function () {
		return this.x;
	};

	this.Add = function (y) {
		this.x += y;
		return this;
	};

	this.Sub = function (y) {
		this.x -= y;
		return this;
	};

	this.Mul = function (y) {
		this.x *= y;
		return this;
	};

	this.Div = function (y) {
		this.x /= y;
		return this;
	};
}

function F01() {
	const instance1 = new Class1(10);
	const result1 = instance1.Add(2).Sub(2).Mul(4).Div(8).print();
	console.log(result1);
}

function F02() {
	const instance2 = new Class2(10);
	const result2 = instance2.Add(2).Sub(2).Mul(4).Div(8).print();
	console.log(result2);
}

F01();
F02();
