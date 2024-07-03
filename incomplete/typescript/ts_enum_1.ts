enum Colors {
	RED = 'red',
	GREEN = 'green',
	BLUE = 'blue'
}

enum Numbers {
	A,
	B,
	C = 10,
	D,
	E = 'PI'
}

function AnyRandomFunction(inputColor: Colors) {
	console.log(inputColor);
}

function UsingSwitch(inputColor: Colors) {
	switch (inputColor) {
		case Colors.BLUE:
		case Colors.GREEN:
		case Colors.RED:
			console.log(inputColor);
			break;
		default:
			console.log('ERROR');
	}
}

function F01() {
	const inputColor: Colors = Colors.BLUE;

	AnyRandomFunction(inputColor);
	UsingSwitch(inputColor);

	console.log(typeof Colors);
	console.log(typeof Colors.BLUE);
	console.log(typeof inputColor);
}

function F02() {
	console.log(Colors);
	console.log(Numbers);

	console.log(Colors['RED']);
	console.log(Numbers[0], Numbers['A']);

	for (const i in Numbers) {
		console.log(i, ':', Numbers[i]);
	}
}

function F03() {
	const ins01 = { ...Colors };
	const ins02 = { ...Numbers };
	console.log(ins01);
	console.log(ins02);
}

F01();
F02();
F03();

// enum is a object with read only property
// type annotation of a variable using enum means that only the property of that enum is valid for the variable
