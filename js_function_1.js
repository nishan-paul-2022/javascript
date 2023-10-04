function FuncA() {
	console.log('function declaration');
}

const FuncB = function (/* x, y, z */) {
	console.log(arguments.length);
	console.log('function expression');
};

const FuncC = () => {
	return console.log('arrow function');
};

const FuncD = (x, y) => {
	x++;
	y--;
	console.log(x + y);
	console.log('arrow function');
};

const FuncE = new Function(
	'x',
	'y',
	"var z=x*y; let v=x+y; console.log(z); console.log(v); console.log('function constrcutor'); return 'ALL OK'"
);

const FuncF = (x) => {
	return console.log(x ** 2);
};

FuncA();
FuncB(1, 2, 3);
FuncC();
FuncD(11, 22);
FuncE(111, 222);
FuncF(9);

(function () {
	const a = 100;
	const b = 200;
	console.log(a + b);
	console.log('self invoking anonymous function');
})();

console.log(FuncB);
console.log(FuncB.toString());
console.log(FuncE());
