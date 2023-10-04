class ExA {
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

const chainFn = new ExA(10);
const result = chainFn.Add(2).Sub(2).Mul(4).Div(8).getResult();
console.log(result);

function Gn(x) {
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

const chainGn = new Gn(10);
const result2 = chainGn.Add(2).Sub(2).Mul(4).Div(8).getResult();
console.log(result2);
