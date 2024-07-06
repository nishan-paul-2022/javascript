// Class
class MyClass {
	name: string;
	ID: number;
	constructor(name: string, ID: number) {
		this.name = name;
		this.ID = ID;
	}
}

// Classic Function
function myFunction1(x: number, y: number): number {
	const z: number = x + y;
	return z;
}

// Arrow Function
const myFunction2: (x: string, y: string) => string = (x, y) => {
	const z = `${x} ${y}`;
	return z;
};

const myString: string = 'Hello, TypeScript!'; // String
const myNumber: number = 42; // Number
const myBoolean: boolean = true; // Boolean
const myBigInt: bigint = 123456789012345678901234567890n; // BigInt
const mySymbol: symbol = Symbol('mySymbol'); // Symbol
const myNull: null = null; // Null
const myUndefined: undefined = undefined; // Undefined
const myArray: number[] = [1, 2, 3, 4, 5]; // Array
const mySet: Set<number> = new Set([1, 2, 3]); // Set
const myMap: Map<string, number> = new Map([
	['one', 1],
	['two', 2]
]); // Map
const myObject: { id: number; name: string } = { id: 1, name: 'Item1' }; // Regular Object
const myClassInstance: MyClass = new MyClass('paul', 1162036); // Class Instance

function demonstrateTypes(
	str: string,
	num: number,
	bool: boolean,
	bigInt: bigint,
	sym: symbol,
	nul: null,
	undef: undefined,
	arr: number[],
	set: Set<number>,
	map: Map<string, number>,
	func1: (x: number, y: number) => number,
	func2: (x: string, y: string) => string,
	obj: { id: number; name: string },
	classInstance: MyClass
): void {
	console.log(`String: ${str}`);
	console.log(`Number: ${num}`);
	console.log(`Boolean: ${bool}`);
	console.log(`BigInt: ${bigInt}`);
	console.log(`Symbol: ${sym.toString()}`);
	console.log(`Null: ${nul}`);
	console.log(`Undefined: ${undef}`);
	console.log(`Array: ${arr}`);
	console.log(`Set: ${[...set]}`);
	console.log(`Map: ${[...map]}`);
	console.log(`Function Result 01: ${func1(10, 20)}`);
	console.log(`Function Result 02: ${func2('winter', 'soldier')}`);
	console.log(`Object: ${JSON.stringify(obj)}`);
	console.log(`Class Instance: ${JSON.stringify(classInstance)}`);
}

demonstrateTypes(
	myString,
	myNumber,
	myBoolean,
	myBigInt,
	mySymbol,
	myNull,
	myUndefined,
	myArray,
	mySet,
	myMap,
	myFunction1,
	myFunction2,
	myObject,
	myClassInstance
);
