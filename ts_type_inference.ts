/* Type Inference : Basic  */
function F01() {
	const x = 10; // x is inferred to be a number
	console.log(x);
}

/* Type Inference : Function */
function F02() {
	function add(a: number, b: number) {
		return a + b; // return type is inferred to be a number
	}
	const sum = add(5, 3); // sum is inferred to be a number
	console.log(sum);
}

/* Type Inference : Object */
function F03() {
	const person = {
		name: 'Alice',
		age: 30
	}; // person is inferred to be a { name: string; age: number }

	person.name = 'Bob'; // typeScript ensures name is a string
	person.age = 31; // typeScript ensures age is a number

	console.log(JSON.stringify(person));
}

/* Type Inference : Array */
function F04() {
	const numbers1 = [1, 2, 3, 4]; // numbers is inferred to be a number[]
	numbers1.push(5); // valid
	// numbers1.push('5'); // error: argument of type 'string' is not assignable to parameter of type 'number'.
	console.log(numbers1);

	const numbers2 = [1, 2, '3', '4']; // numbers is inferred to be a (number | string)[]
	numbers2.push(5); // valid
	numbers2.push('5'); // valid
	// numbers2.push(true); // error: argument of type 'boolean' is not assignable to parameter of type 'number | string'.
	console.log(numbers2);
}

/* Type Inference : Contextual */
function F05() {
	/*
    document.addEventListener('click', (event) => {
        console.log(event.button); // valid
    });
    
    document.addEventListener('scroll', (event) => {
        console.log(event.button); // invalid
    }); */
}

/* Type Inference : JSON Parse */
function F06() {
	const value = JSON.parse('[1,2,3]'); // value is inferred to be a any
	console.log(value);
}

/* Type Inference : Generics */
function F07() {
	function identity<T>(arg: T): T {
		return arg;
	}

	const output1 = identity(5); // output1 is inferred to be a number
	const output2 = identity('test'); // output2 is inferred to be a string

	console.log(output1);
	console.log(output2);
}

/* Type Inference : Complex */
function F08() {
	const mixedArray = [1, 'two', true]; // mixedArray is inferred to be a (number | string | boolean)[]

	mixedArray.push(2); // valid
	mixedArray.push('three'); // valid
	mixedArray.push(false); // valid

	console.log(mixedArray);
}

/* Types Inference : Union */
function F09() {
	let id: number | string; // id is inferred to be a number | string
	id = 123; // valid
	id = 'ABC'; // valid
	console.log(id);
}

/* Types Inference : Intersection */
function F10() {
	type Employee = {
		name: string;
		id: number;
	};

	type Manager = {
		name: string;
		employees: Employee[];
	};

	const manager: Employee & Manager = {
		name: 'Alice',
		id: 1,
		employees: [{ name: 'Bob', id: 2 }]
	}; // manager is inferred to be a Employee & Manager

	console.log(JSON.stringify(manager));
}

/* Types Inference : Type Assertion */
function F11() {
	const someValue: unknown = 'this is a string';
	const strLength: number = (someValue as string).length; // strLength is inferred to be a number

	console.log(someValue);
	console.log(strLength);
}

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

/*
Type inference occurs when we initialize variables, set parameter with default values, and determine function return types.
TypeScript uses best common type algorithm to select best candidate types that are compatible with all variables.
TypeScript also uses contextual typing to infer variable types based on variable locations. */
