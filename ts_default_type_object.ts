/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable arrow-body-style */

function F01() {
	let value: object; // anything but primitive

	value = [1, 2, 3];
	value = {};
	value = { a: 1 };
	value = (x: number): number => x;
	value = new Set([1, 2]);
	value = new Map([[1, 2]]);

	/* 	
	value = 'hello';
	value = 12;
	value = true;
	value = 12n;
	value = Symbol('key');
	value = null;
	value = undefined;*/

	console.log(value);
}

function F02() {
	let value: {}; /* anything but null, undefined | NonNullable<unknown> */

	value = 'ubuntu';
	value = 120;
	value = true;
	value = [1, 2, 3];
	value = {};
	value = { a: 1 };
	value = (x: number): number => x;
	value = new Set([1, 2]);
	value = new Map([[1, 2]]);

	/* 	
	value = null;
	value = undefined; */

	console.log(value);
}

function F03() {
	type T = { [index: string]: number }; /* Record<string, number> */

	const value: T = { name: 1, 1162036: 2 };

	value[1162036] = 4;
	value[Math.random()] = 7;

	value.name = 3;
	value.location = 5;
	value['ID'] = 6;

	/*
	value[true] = 8;
	value[0] = '9'; */

	console.log(JSON.stringify(value));
}

function F04() {
	type T = { [index: number]: number }; /* Record<number, number> */

	const value: T = { /* name: 1, */ 1162036: 2 };

	value[1162036] = 4;
	value[Math.random()] = 7;

	/*
	value.name = 3;
	value.location = 5;
	value['ID'] = 6; */

	/*
	value[true] = 8;
	value[0] = '9'; */
}

function F05() {
	const car = {
		brand: 'Toyota',
		model: 'Corolla',
		year: 2009
	};

	car.model = 'Camry';
	// car.year = '2009'; /* invalid */
	// car.month = 1; /* invalid */

	console.log(JSON.stringify(car));
}

function F06() {
	type T = { brand: string; model: string; year: number };

	const car: T = {
		brand: 'Toyota',
		model: 'Corolla',
		year: 2009
	};

	car.model = 'Camry';
	// car.year = '2009'; /* invalid */
	// car.month = 1; /* invalid */

	console.log(JSON.stringify(car));
}

function F07() {
	type T = { brand?: string; model: string; year: number };

	const car: T = {
		model: 'Corolla',
		year: 2009
	};

	car.brand = 'Toyota';
	car.model = 'Camry';
	// car.year = '2009'; /* invalid */
	// car.month = 1; /* invalid */

	console.log(JSON.stringify(car));
}

function F08() {
	type T = {
		brand: string;
		readonly model: string;
		year: number;
	};

	const car: T = {
		brand: 'Toyota',
		model: 'Corolla',
		year: 2009
	};

	// car.model = 'Camry'; /* invalid */
	// car.year = '2009'; /* invalid */
	// car.month = 1; /* invalid */

	console.log(JSON.stringify(car));
}

F01();
F02();
F03();
F04();
F05();
F06();
F07();
F08();
