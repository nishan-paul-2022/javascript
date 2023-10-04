function TypeInference() {
	const x = 10; // type inference
	// x = 'j';
	console.log(x);
}

const addArray = (x: number[], y: number[]): number[] => {
	return x.concat(y);
}; // contextual typing
console.log(addArray([1, 2, 3], [4, 5, 6]));

const addNumber: (x: number, y: number) => number = (x, y) => {
	return x + y;
};
console.log(addNumber(10, 20));

type addStringType = (x: string, y: string) => string; // function-type
const addString: addStringType = (x, y) => {
	return x + y;
};
console.log(addString('10', '20'));

TypeInference();

// type-inference : setting the type of a variable on basis of its' value or context
// if on basis of context, this type of type-inference is called contextual-typing
