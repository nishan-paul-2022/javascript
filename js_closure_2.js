// predefined behaviour
function A(firstName) {
	const B = function (lastName) {
		const fullName = firstName + ' ' + lastName;
		console.log(fullName);
	};
	return B;
}

const C = A('FINGER');
C('CORE');
C('CROSS');

// predefined behaviour
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

	const basicO = {
		Add: Add,
		Sub: Sub,
		Mul: Mul,
		Div: Div
	};

	return basicO;
}

const basicO = IntegrationConstant(10);
basicO.Add(15, 25);
basicO.Sub(15, 25);
basicO.Mul(15, 25);
basicO.Div(15, 25);

function Add(x, y) {
	console.log(x + y);
}

function EnhanceAddFunction(z) {
	const AddWithDefault = function (x) {
		Add(x, z);
	};
	return AddWithDefault;
}

const AddWithPI = EnhanceAddFunction(Math.PI);
const AddWithE = EnhanceAddFunction(Math.E);
const AddWithRandom = EnhanceAddFunction(Math.random());

AddWithPI(10);
AddWithE(10);
AddWithRandom(10);
