function ArrayCreation() {
	const array1 = [1, 5, 10, 7, 2, 0];
	const array2 = new Array(5);

	array2[2] = Math.PI;
	array2[7] = Math.E;

	console.log(array1);
	console.log(array2);
	console.log(Array.isArray(array1));
	console.log(Array.isArray(array2));
	console.log(array1 instanceof Array);
	console.log(array2 instanceof Array);
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
	console.log(v);
	console.log(v.flat());
	console.log(v.flat().flat());

	console.log(v.slice(1));
	console.log(v.slice(1, 4));
}

function ArraySort1() {
	const array = [1, 5, 10, 7, 2, 0];

	// number will be treated as string
	console.log(array.sort());

	// value        | order
	// positive     | 2nd arg
	// not-positive | 1st arg
	console.log(
		array.sort((a, b) => {
			return a - b;
		})
	);
	console.log(
		array.sort((a, b) => {
			return b - a;
		})
	);
}

function ArraySort2() {
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
	const array2 = [17, 1, -29, 5, 10, 29, 7, -15, 2, 0, -6];
	console.log(Math.max(...array2));
	console.log(Math.min(...array2));
	// best approach would be user-defined fucntion instead of built-in function
}

function ObjectSort() {
	const arr = [
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
		arr.sort((x, y) => {
			return x.price - y.price;
		})
	);
}

// [] works on key | at() works on index
function ArrayAt() {
	const name = 'W3Schools';
	console.log(name[0]);
	console.log(name.at(0));
	console.log(name[-1]);
	console.log(name.at(-1));
}

function FlatMap() {
	const v = [1, [2, 3], 4];
	console.log(
		v
			.flatMap((x) => {
				return x * 10;
			})
			.flatMap((x) => {
				return x * 2;
			})
	);
}

ArrayCreation();
ArrayMethods();
ArraySort1();
ArraySort2();
KnuthShuffle();
MaxMinArray();
ObjectSort();
ArrayAt();
FlatMap();

/* 
pop() 											: delete last element
push() 											: add new element to end
shift() 										: delete firt element
unshift() 										: add new element to start
flat() 											: multi-dimensional array to one-dimensional array
slice(start-position, end-position-exclusive) 	: returns array of extracted values

stable sort is maintaining relative positions if values are same */
