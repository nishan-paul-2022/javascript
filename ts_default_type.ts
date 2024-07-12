// Partial<T>
interface Person {
	name: string;
	age: number;
	address?: string;
}

const partialPerson: Partial<Person> = { name: 'John' };
console.log('Partial:', partialPerson);

// Required<T>
const requiredPerson: Required<Person> = {
	name: 'John',
	age: 30,
	address: '123 Street'
};
console.log('Required:', requiredPerson);

// Readonly<T>
const readonlyPerson: Readonly<Person> = {
	name: 'John',
	age: 30,
	address: '123 Street'
};
// readonlyPerson.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.
console.log('Readonly:', readonlyPerson);

// Record<K, T>
const nameAgeMap: Record<string, number> = { Alice: 25, Bob: 30 };
console.log('Record:', nameAgeMap);

// Pick<T, K>
const personName: Pick<Person, 'name'> = { name: 'John' };
console.log('Pick:', personName);

// Omit<T, K>
const personWithoutAddress: Omit<Person, 'address'> = { name: 'John', age: 30 };
console.log('Omit:', personWithoutAddress);

// Exclude<T, U>
type Letters = 'a' | 'b' | 'c';
type Vowels = 'a';
type Consonants = Exclude<Letters, Vowels>; // "b" | "c"

const consonant: Consonants = 'b';
console.log('Exclude:', consonant); // Exclude: b

// Extract<T, U>
type PossibleValues = 'a' | 'b' | 'c';
type ActualValues = 'a' | 'f';
type CommonValues = Extract<PossibleValues, ActualValues>; // "a"

const commonValue: CommonValues = 'a';
console.log('Extract:', commonValue); // Extract: a

// NonNullable<T>
type NullableString = string | number | undefined;
type NonNullableString = NonNullable<NullableString>; // string | number

const nonNullable: NonNullableString = 'Hello';
console.log('NonNullable:', nonNullable); // NonNullable: Hello

// Parameters<T>
type FunctionType = (s: string) => void;
type FunctionParams = Parameters<FunctionType>; // [string]

const functionParams: FunctionParams = ['Hello'];
console.log('Parameters:', functionParams); // Parameters: ["Hello"]

// ConstructorParameters<T>
type ErrorConstructorParams = ConstructorParameters<ErrorConstructor>; // [message?: string]

const errorParams: ErrorConstructorParams = ['An error occurred'];
console.log('ConstructorParameters:', errorParams); // ConstructorParameters: ["An error occurred"]

// ReturnType<T>
type ReturnTypeOfFunction = ReturnType<() => string>; // string

function getMessage(): string {
	return 'Hello, world!';
}

const returnValue: ReturnTypeOfFunction = getMessage();
console.log('ReturnType:', returnValue); // ReturnType: Hello, world!

// InstanceType<T>
class ExampleClass {
	x = 0;
	y = 0;
}
type ExampleClassInstance = InstanceType<typeof ExampleClass>; // ExampleClass
const exampleInstance: ExampleClassInstance = new ExampleClass();
console.log('InstanceType:', exampleInstance);

// ThisType<T>
interface ObjectDescriptor<D, M> {
	data?: D;
	methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
	const data: object = desc.data || {};
	const methods: object = desc.methods || {};
	return { ...data, ...methods } as D & M;
}

const obj = makeObject({
	data: { x: 0, y: 0 },
	methods: {
		moveBy(dx: number, dy: number) {
			this.x += dx; // Strongly typed this
			this.y += dy; // Strongly typed this
		}
	}
});

console.log('ThisType Before:', obj);
obj.moveBy(5, 5);
console.log('ThisType After:', obj);

/*
Partial<T>: Makes all properties in T optional.
Required<T>: Makes all properties in T required.
Readonly<T>: Makes all properties in T readonly.
Record<K, T>: Constructs an object type with property keys of type K and property values of type T.
Pick<T, K>: Constructs a type by picking the set of properties K from T.
Omit<T, K>: Constructs a type by omitting the set of properties K from T.
Exclude<T, U>: Constructs a type by excluding from T all properties that are assignable to U.
Extract<T, U>: Constructs a type by extracting from T all properties that are assignable to U.
NonNullable<T>: Constructs a type by excluding null and undefined from T.
Parameters<T>: Constructs a tuple type from the types used in the parameters of a function type T.
ConstructorParameters<T>: Constructs a tuple or array type from the types used in the constructor parameters of a class type T.
ReturnType<T>: Constructs a type consisting of the return type of function type T.
InstanceType<T>: Constructs a type consisting of the instance type of a constructor function type T.
ThisType<T>: This utility does not return a transformed type. Instead, it serves as a marker for a contextual this type.
*/
