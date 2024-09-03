/* static member */
function F() {
	let count = 0;

	function G() {
		count++;
		console.log(count);
	}

	return G;
}

/* static member */
const H = (function () {
	let count = 15;

	const I = function () {
		count++;
		console.log(count);
	};

	return I;
})();

function Usecase01() {
	const G = F();
	G();
	G();
	G();
}

function Usecase02() {
	H();
	H();
	H();
}

Usecase01();
Usecase02();
