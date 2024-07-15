enum Colors {
	RED = 'red',
	GREEN = 'green',
	BLUE = 'blue'
}

enum Numbers {
	A,
	B = 10,
	C,
	D = Math.PI,
	E = Math.E
}

function F01() {
	console.log(Colors);
	console.log(Numbers);
}

function F02() {
	console.log(Colors.RED);
	console.log(Colors['RED']);

	console.log(Numbers.A);
	console.log(Numbers['A']);
	console.log(Numbers[0]);
}

function F03() {
	type T = typeof Colors;
	type K = keyof T;
	const red: Colors = 'red' as T[K];
	// const red: Colors = Colors.RED;
	console.log(typeof red);
	console.log(typeof Colors.RED);
	console.log(typeof Colors);

	const a: Numbers = 0;
	// const a: Numbers = Numbers.A;
	console.log(typeof a);
	console.log(typeof Numbers.A);
	console.log(typeof Numbers);
}

function F04() {
	const colors = { ...Colors };
	const value1 = JSON.stringify(colors);
	console.log(value1);

	const numbers = { ...Numbers };
	const value2 = JSON.stringify(numbers);
	console.log(value2);
}

function F05() {
	for (const i in Colors) {
		type T = typeof Colors; // { RED: E.RED; GREEN: E.GREEN; BLUE: E.BLUE }
		type K = keyof T; /* 'RED' | 'GREEN' | 'BLUE' */
		console.log(i, Colors[i as K]);
	}

	for (const i in Numbers) {
		console.log(i, Numbers[i]);
	}
}

F01();
F02();
F03();
F04();
F05();

/*
- enum is a object with read only property
- enum comes in two flavors : string and numeric
- type annotation of a variable using enum means only the attribute value of that enum is valid for the variable */
