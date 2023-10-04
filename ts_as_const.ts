/* eslint-disable @typescript-eslint/no-unused-vars */

function UseCase01() {
	const a = 'batman';
	type T = typeof a; // string
}

function UseCase02() {
	const a = 'batman';
	type T = typeof a; // 'batman'
}

function UseCase03() {
	const routes = {
		a: 'batman',
		b: 'ironman',
		c: 'wolverine'
	};

	type T = (typeof routes)[keyof typeof routes]; // string
}

function UseCase04() {
	const routes = {
		a: 'batman',
		b: 'ironman',
		c: 'wolverine'
	} as const;

	// type T = "batman" | "ironman" | "wolverine"; // valid
	// type T = (typeof routes)["a" | "b" | "c"]; // valid
	type T = (typeof routes)[keyof typeof routes];

	function RandomFunction(routeName: T): void {
		console.log(routeName);
	}

	const superhero = {
		a: 'batman',
		b: 'ironman',
		c: 'wolverine'
	};
	const batman1 = 'batman';
	const batman2 = 'batman';

	// RandomFunction(batman1); // invalid
	// RandomFunction(superhero.a); // invalid
	RandomFunction('batman');
	RandomFunction(batman2);
	RandomFunction(routes.a);
}

UseCase01();
UseCase02();
UseCase03();
UseCase04();

// constant value can work as a type itself
