/* eslint-disable @typescript-eslint/no-unused-vars */

function TypeUnion1() {
	type MyType = string | number;
	const value: MyType = 'Hello';
}

function TypeUnion2() {
	type Person = { name: string };
	type Animal = { species: string };
	type Entity = Person | Animal;
	const entity1: Entity = { name: 'John' };
	const entity2: Entity = { name: 'John', species: 'Wick' };
}

function TypeUnion3() {
	type StringOrNumberArray = string[] | number[];
	const arr1: StringOrNumberArray = ['Alice', 'Bob'];
	const arr2: StringOrNumberArray = [1, 2, 3];
}

function TypeUnion4() {
	enum Color {
		Red,
		Green,
		Blue
	}

	enum Size {
		Small,
		Medium,
		Large
	}

	type Variant = Color | Size;
	const variant: Variant = Color.Red;
}

function TypeIntersection() {
	type Person = { name: string };
	type Info = { age: number };
	type Constant = { PI: Math['PI']; X: 12 };

	type PersonWithInfo = Person & Info & Constant;
	const person: PersonWithInfo = {
		name: 'Alice',
		age: 30,
		PI: Math.random(),
		X: 12
	};
	console.log(Math['PI']);
}

TypeUnion1();
TypeUnion2();
TypeUnion3();
TypeUnion4();
TypeIntersection();
