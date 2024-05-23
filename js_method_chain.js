class ClassA {
	constructor(x) {
		this.x = x;
	}

	getResult() {
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

function ClassB(x) {
	this.x = x;

	this.getResult = function () {
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

const objectA = new ClassA(10);
const result1 = objectA.Add(2).Sub(2).Mul(4).Div(8).getResult();
console.log(result1);

const objectB = new ClassB(10);
const result2 = objectB.Add(2).Sub(2).Mul(4).Div(8).getResult();
console.log(result2);
