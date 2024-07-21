/* arguments */
function ArgumentsExample01() {
	let sum = 0;
	for (const i of arguments) {
		sum += i;
	}
	console.log(sum);
}

/* arguments */
function ArgumentsExample02() {
	const result = [].join.call(arguments, '');
	console.log(result);
}

/* rest parameter */
function RestExample(...args) {
	console.log('args:', args);
}

/* spread operator */
function SpreadExample(a, b, c) {
	console.log('a, b, c:', a, b, c);
}

function SpreadWithArray() {
	const x1 = [1, 2, 3];
	const x2 = [...x1]; // copy by value
	const x3 = [...x1, 10]; // copy by value

	x2[0] = 11;
	console.log('x1:', x1);
	console.log('x2:', x2);
	console.log('x3:', x3);
	console.log('...x1:', ...x1); // console.log(1, 2, 3);
}

function SpreadWithObject() {
	const x1 = { a: 1, b: 2, c: 3 };
	const x2 = { ...x1 }; // copy by value
	const x3 = { ...x1, a: 10 }; // copy by value

	x2.a = 10;

	console.log('x1:', x1);
	console.log('x2:', x2);
	console.log('x3:', x3);
	// console.log('...x1:', ...x1); /* equivalent statement: console.log(a: 1, b: 2, c: 3) | non-callable iterator */
}

function SpreadWithClassAndFunction() {
	class A {
		x = 10;
		y = () => {
			console.log('y');
		};
	}

	function B() {
		const x = 10;
		console.log(x);
	}

	const a = new A();
	console.log('{ ...A }:', { ...A });
	console.log('{ ...B }:', { ...B });
	console.log('{ ...a }:', { ...a });
}

function SpreadWithGenerator() {
	const regular1 = {
		start: 0,
		end: 5,
		count: 0,
		[Symbol.iterator]: function () {
			return {
				next: () => {
					regular1.count++;
					if (regular1.count > regular1.end) {
						regular1.count = regular1.start;
						return { value: undefined, done: true };
					} else {
						return {
							value: regular1.count,
							done: false
						};
					}
				}
			};
		}
	};

	const regular2 = {
		start: 0,
		end: 5,
		count: 0,
		[Symbol.asyncIterator]: function () {
			return {
				next: () => {
					regular2.count++;
					if (regular2.count > regular2.end) {
						regular2.count = regular2.start;
						return { value: undefined, done: true };
					} else {
						return {
							value: regular2.count,
							done: false
						};
					}
				}
			};
		}
	};

	console.log('{ ...regular1 }:', { ...regular1 });
	console.log('{ ...regular2 }:', { ...regular2 });
	console.log('...regular1:', ...regular1);
	// console.log('...regular2:', ...regular2); /* non-callable iterator */
}

const array = [1, 2, 3];

ArgumentsExample01(1, 2, 3, 4, 5);
ArgumentsExample02(1, 2, 3, 4, 5);

RestExample(1, 2, 3);

SpreadExample(...array);
SpreadWithArray();
SpreadWithObject();
SpreadWithClassAndFunction();
SpreadWithGenerator();

/* spread operator can use Symbol.iterator, not Symbol.asyncIterator */
