function Add(x, y) {
	console.log(x + y);
}

function EnhanceAddFunction(z) {
	const AddWithDefault = function (x) {
		Add(x, z);
	};
	return AddWithDefault;
}

function firstName(fname) {
	const lastName = function (lname) {
		const fullName = `${fname} ${lname}`;
		console.log(fullName);
	};
	return lastName;
}

function IntegrationConstant(c) {
	function Add(x, y) {
		const ans = x + y;
		console.log(ans + c);
	}

	function Sub(x, y) {
		const ans = x - y;
		console.log(ans + c);
	}

	function Mul(x, y) {
		const ans = x * y;
		console.log(ans + c);
	}

	function Div(x, y) {
		const ans = x / y;
		console.log(ans + c);
	}

	const arithmetic = {
		Add,
		Sub,
		Mul,
		Div
	};

	return arithmetic;
}

function Usecase01() {
	const AddWithPI = EnhanceAddFunction(Math.PI);
	const AddWithE = EnhanceAddFunction(Math.E);
	const AddWithRandom = EnhanceAddFunction(Math.random());

	AddWithPI(10);
	AddWithE(10);
	AddWithRandom(10);
}

function Usecase02() {
	const lastName = firstName('Logan');
	lastName('Paul');
	lastName('Chowdhury');
}

function Usecase03() {
	const arithmetic = IntegrationConstant(10);
	arithmetic.Add(15, 25);
	arithmetic.Sub(15, 25);
	arithmetic.Mul(15, 25);
	arithmetic.Div(15, 25);
}

Usecase01();
Usecase02();
Usecase03();

/* predefined behaviour */
