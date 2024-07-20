const myString: string = 'hello, world!'; // String

const myNumber: number = 120; // Number

const myBoolean: boolean = true; // Boolean

const myBigInt: bigint = 123456789123456789123456789n; // BigInt

const mySymbol: symbol = Symbol('mySymbol'); // Symbol

const myNull: null = null; // Null

const myUndefined: undefined = undefined; // Undefined

const myArray: number[] = [1, 2, 3, 4]; // Array

const mySet: Set<number> = new Set([1, 2, 3]); // Set

const myMap: Map<string, number> = new Map([['ID', 1162036]]); // Map

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
	map: Map<string, number>
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
	myMap
);
