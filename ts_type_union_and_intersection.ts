function TypeUnion1() {
	type alphanumeric = string | number;

	const value1: alphanumeric = '120';
	console.log(value1);

	const value2: alphanumeric = 120;
	console.log(value2);
}

function TypeUnion2() {
	type array = string[] | number[];

	const arr1: array = ['Alice', 'Bob'];
	console.log(arr1);

	const arr2: array = [1, 2, 3];
	console.log(arr2);

	/*
	const arr3: array = ['Alice', 'Bob', 1, 2, 3];
	console.log(arr3); */
}

function TypeUnion3() {
	type array = (string | number)[];

	const arr1: array = ['Alice', 'Bob'];
	console.log(arr1);

	const arr2: array = [1, 2, 3];
	console.log(arr2);

	const arr3: array = ['Alice', 'Bob', 1, 2, 3];
	console.log(arr3);
}

function TypeUnion4() {
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

function TypeUnion5() {
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

function TypeUnion6() {
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

function TypeIntersection() {
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

TypeUnion1();
TypeUnion2();
TypeUnion3();
TypeUnion4();
TypeUnion5();
TypeUnion6();
TypeIntersection();

/*
union for regular-object		: either one of them | both of them (merged)
union for others				: either one of them

intersection for regular-object	: both of them (merged)
intersection for others			: invalid */
