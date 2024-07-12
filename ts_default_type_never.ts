/* eslint-disable no-constant-condition */

// Example: Function That Never Returns (Throws Error)
function F01() {
	function throwError(message: string): never {
		throw message;
	}

	function throwErrorExample() {
		try {
			throwError('ubuntu');
		} catch (message) {
			console.log(message);
		}
	}

	throwErrorExample();
}

// Example: Function That Never Returns (Contains Infinite Loop)
function F02() {
	function _infiniteLoopExample(): never {
		while (true) {
			console.log('This loop never ends!');
		}
	}

	// _infiniteLoopExample();
}

// Example: Variable That Never Contains Value (Exhaustive Type Checking)
function F03() {
	type Shape = 'circle' | 'square' | 'triangle';

	function getAreaExample(shape: Shape): number {
		switch (shape) {
			case 'circle':
				return Math.PI * 1 * 1;
			case 'square':
				return 1 * 1;
			case 'triangle':
				return 0.5 * 1 * 1;
			default: {
				// This else case should never occur
				const exhaustiveCheck: never = shape;
				throw `unhandled case: ${exhaustiveCheck}`;
			}
		}
	}

	console.log(getAreaExample('circle'));
	console.log(getAreaExample('square'));
	console.log(getAreaExample('triangle'));
}

// Example: Variable That Never Contains Value (Exhaustive Type Checking)
function F04() {
	type alphanumeric = string | number;

	function processValueExample(value: alphanumeric): string {
		if (typeof value === 'string') {
			return `String value: ${value}`;
		} else if (typeof value === 'number') {
			return `Number value: ${value}`;
		} else {
			// This else case should never occur
			const exhaustiveCheck: never = value;
			throw `unhandled case: ${exhaustiveCheck}`;
		}
	}

	console.log(processValueExample('ubuntu'));
	console.log(processValueExample(120));
}

// Example: Variable That Never Contains Value (Exhaustive Type Checking)
function F05() {
	interface Dog {
		species: 'dog';
		bark(): void;
	}

	interface Cat {
		species: 'cat';
		meow(): void;
	}

	type Animal = Dog | Cat;

	function handleAnimalExample(animal: Animal) {
		if (animal.species === 'dog') {
			animal.bark();
		} else if (animal.species === 'cat') {
			animal.meow();
		} else {
			// This else case should never occur
			const exhaustiveCheck: never = animal;
			throw `unhandled case: ${exhaustiveCheck}`;
		}
	}

	const dog: Dog = {
		species: 'dog',
		bark: () => {
			return console.log('Woof!');
		}
	};

	const cat: Cat = {
		species: 'cat',
		meow: () => {
			return console.log('Meow!');
		}
	};

	handleAnimalExample(dog);
	handleAnimalExample(cat);
}

// Example: Variable That Never Contains Value (Exhaustive Type Checking)
function F06() {
	function exhaustivenessChecking(value: never) {
		console.log(`unhandled case: ${value}`);
	}

	const value = 'ubuntu';

	if (typeof value === 'string') {
		console.log('value is string');
	} else {
		exhaustivenessChecking(value);
	}
}

F01();
F02();
F03();
F04();
F05();
F06();

/* https://dev.to/babak/exhaustive-type-checking-with-typescript-4l3f */
