function F01(x, y) {
	console.log('regular function');
	const z = x + y;
	console.log(z);
	return z;
}

const F02 = function (x, y) {
	console.log('anonymous function');
	const z = x + y;
	console.log(z);
	return z;
};

const F03 = (x, y) => {
	console.log('arrow function');
	const z = x + y;
	console.log(z);
	return z;
};

const F05 = new Function(
	'x',
	'y',
	`
	console.log('constrcutor function');
	const z = x + y;
	console.log(z);
	return z;`
);

function F06(x, y) {
	const z = (function () {
		console.log('self invoking anonymous function');
		const z = x + y;
		console.log(z);
		return z;
	})();

	return z;
}

console.log(F01);

console.log(F01.toString());

console.log(F01(10, 20));

console.log(F02(10, 20));

console.log(F03(10, 20));

console.log(F05(10, 20));

console.log(F06(10, 20));
