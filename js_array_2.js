function RandomActivities() {
	class A {}

	class B extends A {}

	const number = [1, 5, 10, 7, 2, 0];
	console.log(number.sort()); // number will be treated as string
	// value        | order
	// positive     | 2nd arg
	// not-positive | 1st arg
	console.log(
		number.sort((a, b) => {
			return a - b;
		})
	);
	console.log(
		number.sort((a, b) => {
			return b - a;
		})
	);

	const object = new B();
	console.log(object instanceof B ? 'B' : 'not B');
	console.log(object instanceof A ? 'A' : 'not A');

	const number1 = [1, 5, 10, 7, 2, 0];
	console.log(number1);
	const number2 = new Array(5);
	number2[2] = Math.PI;
	number2[7] = Math.E;
	console.log(number2);

	console.log(
		Array.isArray(number2) ? 'number2 is array' : 'number2 is not array'
	);
}

function ArrayMethods() {
	const x = [1, 2, 3];
	const y = [4, 5, 6];
	const z = [7, 8, 9];
	const u = x.concat(y, z);
	console.log(u);

	console.log(x.pop());
	console.log(x);

	x.push(10);
	console.log(x);

	console.log(x.shift());
	console.log(x);

	x.unshift(20);
	console.log(x);

	const v = [1, 2, 3, [4, 5], [6, 7, 8], [9, 10, [11, 12]]];
	console.log(v.flat());
	console.log(v.flat().flat());
	console.log(v);

	console.log(v.slice(1));
	console.log(v.slice(1, 4));
}

function ArraySort() {
	const names = ['z', 'a', 'm', 'd', 'i'];
	console.log(names.reverse());
	console.log(names.sort());
	console.log(names.sort().reverse());
	console.log(
		names.sort((a, b) => {
			return a - b;
		})
	);
	console.log(
		names.sort(() => {
			return 0.5 - Math.random();
		})
	);
	console.log(Math.random());
}

// Knuth shuffle or Fisher-Yates shuffle
function KnuthShuffle() {
	const names = ['z', 'a', 'm', 'd', 'i'];
	const n = names.length;
	for (let i = n - 1; i >= 0; i--) {
		const idx1 = i;
		const idx2 = Math.floor(Math.random() * (i + 1));
		console.log(idx1, idx2);
		[names[idx1], names[idx2]] = [names[idx2], names[idx1]];
	}
	console.log(names);
}

function MaxMinArray() {
	const number2 = [17, 1, -29, 5, 10, 29, 7, -15, 2, 0, -6];
	console.log(Math.max(...number2));
	console.log(Math.min(...number2));
	// best approach would be user-defined fucntion instead of built-in function
}

function ObjectSort() {
	const myArr = [
		{ name: 'X00', price: 100 },
		{ name: 'X01', price: 100 },
		{ name: 'X02', price: 100 },
		{ name: 'X04', price: 110 },
		{ name: 'X03', price: 100 },
		{ name: 'X05', price: 110 },
		{ name: 'X08', price: 120 },
		{ name: 'X06', price: 110 },
		{ name: 'X07', price: 110 },
		{ name: 'X09', price: 120 },
		{ name: 'X12', price: 130 },
		{ name: 'X10', price: 120 },
		{ name: 'X11', price: 120 },
		{ name: 'X13', price: 130 },
		{ name: 'X14', price: 130 },
		{ name: 'X16', price: 140 },
		{ name: 'X15', price: 130 },
		{ name: 'X17', price: 140 },
		{ name: 'X18', price: 140 },
		{ name: 'X19', price: 140 }
	];

	console.log(
		myArr.sort((x, y) => {
			return x.price - y.price;
		})
	);
}

RandomActivities();
ArrayMethods();
ArraySort();
KnuthShuffle();
MaxMinArray();
ObjectSort();

// length
// toString()
// join()
// concat()
// pop() // delete last element
// push() // add new element to end
// shift() // delete firt element
// unshift() // add new element to start
// flat() // multi-dimensional array to one-dimensional array
// splice(where to insert elements, from that postion number of elements to be deletd, new elements to be added)
// slice(start position, end position excluding)

// array uses numbered index
// object uses named index
// stable sort : maintaining relative positions if values are same
