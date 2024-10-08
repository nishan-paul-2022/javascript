function Usecase01() {
	const x = 1,
		y = 2,
		z = 3;
	const object = { x, y, z }; // shorthand property name
	console.log(object.x);
	console.log(object.y);
	console.log(object.z);
	return object;
}

function Usecase02() {
	const object = {
		x: 1,
		y: 2,
		z: 3
	};
	const { x, y, z } = object; // object destructuring
	console.log(x);
	console.log(y);
	console.log(z);
}

function Usecase03() {
	let m = 10,
		n = 20;
	[n, m] = [m, n]; // array destrcuturing
	console.log(m);
	console.log(n);

	const array = [0, 1, 2, 3, 4, 5];
	[array[0], array[5]] = [array[5], array[0]];
	console.log(array);
}

function Usecase04() {
	const array1 = [1, 2, 3, 4, 5];
	const [i, j, k] = array1; // array destrcuturing usign array literal
	console.log(`${i} ${j} ${k}`);

	const array2 = [
		{ ID: 1, name: 'Batman' },
		{ ID: 2, name: 'Superman' },
		{ ID: 3, name: 'Ironman' }
	];
	const [, , { name }] = array2; // array destrcuturing using array literal
	console.log(name);

	const object = { ID: 4, name: 'christian' };
	const { ID, name: name1, address = '3/4' } = object; // object destructuring using object literal
	console.log(ID);
	console.log(name1);
	console.log(address);
}

function Usecase05() {
	const array = [1, 2, 3, 4, 5];
	const [_x1, _x2, _x3, ...values] = array;
	console.log(values);

	const { length, forEach } = array;
	console.log(length);
	forEach.call(array, (value) => {
		return console.log(value ** 2);
	});
}

function Usecase06() {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const [_x1, _x2, ...values] = array;
	console.log(values);

	const [_x3, _x4, ...{ length }] = array; // object destructuring within array destructuring
	console.log(length);
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();
Usecase05();
Usecase06();

/*	
- string is immutable, but reassignable
- shorthand property name is a syntactic sugar
- computed property name is a syntactic feature */
