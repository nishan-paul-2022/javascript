function Union01() {
	type alphanumeric = string | number;

	const value1: alphanumeric = '120';
	console.log(value1);

	const value2: alphanumeric = 120;
	console.log(value2);
}

function Union02() {
	type alphanumeric = string | number;

	const alphanumericSet: Set<alphanumeric> = new Set(['ubuntu', 120]);

	alphanumericSet.add('a');
	alphanumericSet.add(1);
	alphanumericSet.add('b');
	alphanumericSet.add(2);

	console.log(alphanumericSet);
}

function Union03() {
	type alphanumeric = string | number;

	const alphanumericMap: Map<alphanumeric, alphanumeric> = new Map([
		['ubuntu', 120]
	]);

	alphanumericMap.set('a', 1);
	alphanumericMap.set(2, 'b');
	alphanumericMap.set('c', 'd');
	alphanumericMap.set(3, 4);

	console.log(alphanumericMap);
}

function Union04() {
	enum Color {
		red,
		green,
		blue
	}

	enum Size {
		small,
		medium,
		large
	}

	type style = Color | Size;

	const background1: style = Color.blue;
	console.log(background1);

	const background2: style = Size.large;
	console.log(background2);

	console.log(Color);
	console.log(Size);
}

function Union05() {
	type Person = { name: string };
	type Animal = { species: string };
	type Entity = Person | Animal;

	const entity1: Entity = { name: 'John' };
	console.log(entity1);

	const entity2: Entity = { species: 'Wick' };
	console.log(entity2);

	const entity3: Entity = { name: 'John', species: 'Wick' };
	console.log(entity3);
}

function Union06() {
	type Shape =
		| { kind: 'circle'; radius: number }
		| { kind: 'square'; sideLength: number }
		| { kind: 'triangle'; base: number; height: number };

	function getArea(shape: Shape): number {
		switch (shape.kind) {
			case 'circle':
				return Math.PI * shape.radius * shape.radius;
			case 'square':
				return shape.sideLength * shape.sideLength;
			case 'triangle':
				return (shape.base * shape.height) / 2;
			default: {
				const exhaustiveCheck: never = shape;
				throw `unhandled case: ${exhaustiveCheck}`;
			}
		}
	}

	const myCircle: Shape = { kind: 'circle', radius: 10 };
	const mySquare: Shape = { kind: 'square', sideLength: 10 };
	const myTriangle: Shape = { kind: 'triangle', base: 10, height: 10 };

	console.log(getArea(myCircle));
	console.log(getArea(mySquare));
	console.log(getArea(myTriangle));
}

function Intersection() {
	type Name = { name: string };
	type Age = { age: number };
	type Constant = { PI: Math['PI']; E: Math['E'] };

	type linkedin = Name & Age & Constant;

	const profile: linkedin = {
		name: 'Alice',
		age: 30,
		PI: Math.random(),
		E: Math.SQRT2
	};

	console.log(JSON.stringify(profile));
}

Union01();
Union02();
Union03();
Union04();
Union05();
Union06();

Intersection();

/*
union for regular-object		: either one of them | both of them (merged if possible)
union for others				: either one of them

intersection for regular-object	: both of them (merged)
intersection for others			: invalid */
