// spread operator
function SpreadExample(a, b, c) {
	console.log(a, b, c);
}

// rest parameter
function RestExample(...args) {
	console.log(args);
}

function SpreadWithObject() {
	const x1 = { a: 1, b: 2, c: 3 };
	const y1 = [1, 2, 3];
	const x2 = { ...x1 }; // copy by value
	const y2 = [...y1]; // copy by value

	console.log(x2);
	console.log(y2);

	console.log(...y1);
	console.log(1, 2, 3);

	// console.log(...x1);
	// console.log(a: 1, b: 2, c: 3);

	x2.a = 10;
	console.log(x1);

	y2[0] = 11;
	console.log(y1);
}

function SpreadWithObjectCopy() {
	const x1 = { a: 1, b: 2, c: 3 };
	const x2 = { ...x1, a: 10 };
	console.log(x2);
}

function SpreadWithClassAndFunction() {
	class A {
		x = 10;
		y = () => {
			return console.log('y');
		};
	}

	function B() {
		const _x = 10;
	}

	const a = new A();
	console.log({ ...A });
	console.log({ ...A.y });
	console.log({ ...a });
	console.log({ ...B });
}

const arr = [1, 2, 3];
SpreadExample(...arr); // Output: 1 2 3
RestExample(1, 2, 3); // Output: [1, 2, 3]
SpreadWithObject();
SpreadWithObjectCopy();
SpreadWithClassAndFunction();
