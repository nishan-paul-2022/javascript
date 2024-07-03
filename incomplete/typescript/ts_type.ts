/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

interface ProductInterface {
	id: number;
	name: string;
	price: number;
	location?: string;
}

type ProductAlias = {
	id: number;
	name: string;
	price: number;
	location?: string;
};

class ClassUsingInterface implements ProductInterface {
	x: number = 100;
	constructor(
		public id: number,
		public name: string,
		public price: number
	) {}
}

function FunctionUsingInterface(id: number): ProductInterface {
	return {
		id: id,
		name: `Gadget-${id}`,
		price: id * id
	};
}

class ClassUsingAlias implements ProductAlias {
	x: number = 100;
	constructor(
		public id: number,
		public name: string,
		public price: number
	) {}
}

function FunctionUsingAlias(id: number): ProductAlias {
	return {
		id: id,
		name: `Gadget-${id}`,
		price: id * id
	};
}

enum WeekEnd {
	FRIDAY = 'Friday',
	SATURDAY = 'Saturday',
	SUNDAY = 'sunday'
}

interface ItemType {
	name: string;
	price: number;
}

function Utility(WeekEndItem: ItemType): void {
	console.log(WeekEndItem.name);
	console.log(WeekEndItem.price);
}

function InterfaceExample() {
	const product1: ProductInterface = new ClassUsingInterface(
		7,
		`Gadget-7`,
		49
	);
	const product2: ProductInterface = FunctionUsingInterface(11);
	const product3: ProductInterface = {
		id: 10,
		name: `Gadget-100`,
		price: 100,
		location: 'paltan'
	};
}

function AliasExample() {
	const product1: ProductAlias = new ClassUsingAlias(7, `Gadget-7`, 49);
	const product2: ProductAlias = FunctionUsingAlias(11);
	const product3: ProductAlias = {
		id: 10,
		name: `Gadget-100`,
		price: 100,
		location: 'paltan'
	};
}

function F01() {
	const WeekEndItems: {
		[WeekEnd.FRIDAY]: ItemType;
		[WeekEnd.SATURDAY]: ItemType;
		[WeekEnd.SUNDAY]: ItemType;
	} = {
		[WeekEnd.FRIDAY]: { name: 'Pepperoni', price: 2.5 },
		[WeekEnd.SATURDAY]: { name: 'Mushrooms', price: 1.8 },
		[WeekEnd.SUNDAY]: { name: 'Onions', price: 1.2 }
	};

	Utility(WeekEndItems[WeekEnd.FRIDAY]);
}

function F02() {
	interface ItemTypes {
		[WeekEnd.FRIDAY]: ItemType;
		[WeekEnd.SATURDAY]: ItemType;
		[WeekEnd.SUNDAY]: ItemType;
	}

	const WeekEndItems: ItemTypes = {
		[WeekEnd.FRIDAY]: { name: 'Pepperoni', price: 2.5 },
		[WeekEnd.SATURDAY]: { name: 'Mushrooms', price: 1.8 },
		[WeekEnd.SUNDAY]: { name: 'Onions', price: 1.2 }
	};

	Utility(WeekEndItems[WeekEnd.FRIDAY]);
}

function F03() {
	type ItemTypes = { [k in WeekEnd]: ItemType };

	const WeekEndItems: ItemTypes = {
		[WeekEnd.FRIDAY]: { name: 'Pepperoni', price: 2.5 },
		[WeekEnd.SATURDAY]: { name: 'Mushrooms', price: 1.8 },
		[WeekEnd.SUNDAY]: { name: 'Onions', price: 1.2 }
	};

	Utility(WeekEndItems[WeekEnd.FRIDAY]);
}

function F04() {
	interface ItemTypes {
		[keyName: string]: ItemType;
	}

	const WeekEndItems: ItemTypes = {
		[WeekEnd.FRIDAY]: { name: 'Pepperoni', price: 2.5 },
		[WeekEnd.SATURDAY]: { name: 'Mushrooms', price: 1.8 },
		[WeekEnd.SUNDAY]: { name: 'Onions', price: 1.2 }
	};

	Utility(WeekEndItems[WeekEnd.FRIDAY]);
}

function F05() {
	type ItemTypes = {
		[keyName: string]: ItemType;
	};

	const WeekEndItems: ItemTypes = {
		[WeekEnd.FRIDAY]: { name: 'Pepperoni', price: 2.5 },
		[WeekEnd.SATURDAY]: { name: 'Mushrooms', price: 1.8 },
		[WeekEnd.SUNDAY]: { name: 'Onions', price: 1.2 }
	};

	Utility(WeekEndItems[WeekEnd.FRIDAY]);
}

interface Shape {
	area(): void;
}

class Circle implements Shape {
	constructor(private radius: number) {}

	area() {
		console.log(Math.PI * this.radius ** 2);
	}
}

class Square implements Shape {
	constructor(private sideLength: number) {}

	area() {
		console.log(this.sideLength ** 2);
	}
}

function F06() {
	const circle = new Circle(10);
	circle.area();
	const square = new Square(10);
	square.area();
}

function F07() {
	type Timestamped<T> = T & { timestamp: number };

	const user: Timestamped<{ name: string }> = {
		name: 'Alice',
		timestamp: Date.now()
	};
}

function F08() {
	type MakeOptional<T> = { [K in keyof T]?: T[K] };

	interface User {
		name: string;
		age: number;
	}

	type OptionalUser = MakeOptional<User>;

	const optionalUser: OptionalUser = {}; // All properties are optional now
}

function F09() {
	type NumericProperties<T> = {
		[K in keyof T]: T[K] extends number ? K : never;
	}[keyof T];

	interface User {
		name: string;
		age: number;
		score: number;
	}

	type NumericKeys = NumericProperties<User>;
	const numericKeys: NumericKeys = 'age'; // Only 'age' and 'score' are allowed
}

function F091() {
	function throwError(): never {
		throw '';
	}

	type NumericProperties<T> = {
		[K in keyof T]: T[K] extends number ? K : never;
	};

	interface User {
		name: string;
		age: number;
		score: number;
	}

	type NumericKeys = NumericProperties<User>;

	const numericKeys: NumericKeys = {
		name: throwError(),
		age: 'age',
		score: 'score'
	};
}

function F10() {
	interface Person {
		name: string;
		age: number;
	}
	const user: Person = { name: 'Alice', age: 30 };
}

function F11() {
	interface Calculator {
		(x: number, y: number): number;
	}
	const add: Calculator = (a, b) => {
		return a + b;
	};
}

function F12() {
	interface Dictionary {
		[key: string]: string;
	}
	const colors: Dictionary = { red: 'FF0000', green: '00FF00' };
}

function F13() {
	type Arrayish = { [n: number]: unknown };
	type A = keyof Arrayish;
	const myArray1: Arrayish = [1, 2, 3];
	const myArray2: Arrayish = { 1: 'a', 2.5: 'b', '3': 'c' };
	const arrayKey: A = 0;
	const arrayValue = myArray1[arrayKey];
}

function F14() {
	type Mapish = { [k: string]: boolean };
	type M = keyof Mapish;
	const myMap1: Mapish = { name: true, age: false, active: true };
	const myMap2: Mapish = { 1: true, true: false, active: true };
	const mapKey: M = 'name';
	const mapValue = myMap1[mapKey];
}

function FunctionType() {
	type MathOperation = (x: number, y: number) => number;

	const add: MathOperation = (x, y) => {
		return x + y;
	};
	const subtract: MathOperation = function (x, y) {
		const ans = x - y;
		return ans;
	};
	const multiply = ((x, y) => {
		return x * y;
	}) as MathOperation;

	add(8, 3);
	subtract(8, 3);
	multiply(8, 3);
}

function ArrayType() {
	type T = [string, any][];
	const arr: T = [
		['a', 1],
		['b', 2],
		['c', 3]
	];
}

function SetType() {
	type T = Set<number | string>;
	const mySet: T = new Set([1, 2, 'hello']);
	mySet.add(Math.E);
	mySet.add('Jawan');
	console.log(mySet);
}

InterfaceExample();
AliasExample();
F01();
F02();
F03();
F04();
F05();
F06();
F07();
F08();
F09();
F10();
F11();
F12();
F13();
F14();
FunctionType();
ArrayType();

/*

- extends
- object 
- in  
- keyof 

// TYPE-ALIAS 

// union 
type StringOrNumber = string | number;

// intersection
type DetailedUser = User & { email: string };

// function-type
type CallbackFunction = (data: string) => void;

// literal-type
type Direction = 'left' | 'right' | 'up' | 'down';

// computated-type 
type Timestamped<T> = T & { timestamp: number };

// mapped-type 
type MakeOptional<T> = { [K in keyof T]?: T[K] };

// computated-and-mapped-type
type NumericProperties<T> = { [K in keyof T]: T[K] extends number ? K : never; }[keyof T];

// INTERFACE 

// object-structure 
interface Person { name: string }

// class-contract
interface Person { name(): string }

// function-type 
interface Calculator { (x: number, y: number): number; }

// indexable-type
interface Dictionary { [key: string]: string; }

*/
