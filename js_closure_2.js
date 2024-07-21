function F01() {
	function firstName(fname) {
		const lastName = function (lname) {
			const fullName = `${fname} ${lname}`;
			console.log(fullName);
		};
		return lastName;
	}

	const lastName = firstName('Logan');
	lastName('Paul');
	lastName('Das');
}

function F02() {
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
			Add: Add,
			Sub: Sub,
			Mul: Mul,
			Div: Div
		};

		return arithmetic;
	}

	const arithmetic = IntegrationConstant(10);

	arithmetic.Add(15, 25);
	arithmetic.Sub(15, 25);
	arithmetic.Mul(15, 25);
	arithmetic.Div(15, 25);
}

function F03() {
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
}

F01();
F02();
F03();

/* predefined behaviour */
