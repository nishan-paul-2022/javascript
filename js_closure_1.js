// static member
function F() {
	let count = 0;
	return function () {
		count++;
		console.log(count);
	};
}
const G = F();
G();
G();
G();

// static member
const H = (function () {
	let count = 15;
	const I = function () {
		count++;
		console.log(count);
	};
	return I;
})();

H();
H();
H();
