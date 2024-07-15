/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable arrow-body-style */

// using `object` for any non-null object
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

	console.log(JSON.stringify(value));
}

// using `{}` for anything but null, undefined
function F02() {
	// NonNullable<unknown>
	let value: {};

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
	/* Record<string, number> */
	type IndexNumberMap = { [index: string]: number };

	const value: IndexNumberMap = { name: 1, 1162036: 2 };

	value.name = 3;
	value[1162036] = 4;
	value.location = 5;
	value['ID'] = 6;
	value[Math.random()] = 7;
	// value[true] = 8; /* invalid */
	// value[0] = '9'; /* invalid */

	console.log(JSON.stringify(value));
}

function F04() {
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

function F05() {
	type CarType = { brand: string; model: string; year: number };

	const car: CarType = {
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
	type CarType = { brand?: string; model: string; year: number };

	const car: CarType = {
		model: 'Corolla',
		year: 2009
	};

	car.brand = 'Toyota';
	car.model = 'Camry';
	// car.year = '2009'; /* invalid */
	// car.month = 1; /* invalid */

	console.log(JSON.stringify(car));
}

function F07() {
	type CarType = {
		brand: string;
		readonly model: string;
		year: number;
	};

	const car: CarType = {
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

/* readonly type-modifier is only permitted on : 
	- array of literal types 
	- tuple of literal types 
	- attribute */
