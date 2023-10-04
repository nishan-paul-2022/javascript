function Error01() {
	const value = 1;
	try {
		const message = 'NON-NEGATIVE';
		if (value >= 0) {
			console.error(message);
			throw message;
		}
	} catch (error) {
		console.log(error);
	}
}

function Error02() {
	const num = 0;
	const error = 'CUSTOM-ERROR';
	const message = () => {
		if (num) {
			throw error;
		} else {
			return num;
		}
	};
	console.log(message());
}

function Error03() {
	function Fn(num) {
		num[0]++;
	}

	try {
		Fn(Math.E);
	} catch (w) {
		console.log(w);
	}
}

Error01();
Error02();
Error03();

// - using undeclared and uninitialized object / Reference Error
// - using undeclared function / Reference Error
// - using undeclared method / Type Error
// - changes on constant object / Type Error
// - iteration over noniterable object / Type Error
// - stack overflow / Range Error
// - missing semicolon / Syntax Error
// - error in eval expression / Eval Error

// out of all kinds of object (default / user-defined), only string is immutable
// here immutable means, string object can be reassigned, but it can't be modified
// string, number, boolean (primitive data types) are : call by value, pass by value
// all others are : call by reference, pass by reference
