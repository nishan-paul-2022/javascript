function Error01() {
	function NotNegative(value) {
		try {
			const error = 'NEGATIVE';
			if (value < 0) {
				console.error(value);
				throw error;
			} else {
				const newValue = value * value;
				console.log(newValue);
			}
		} catch (error) {
			console.log(error);
		}
	}

	const value = -2;
	NotNegative(value);
}

function Error02() {
	function NotNegative(value) {
		const error = 'NEGATIVE';
		if (value < 0) {
			console.error(value);
			throw error;
		} else {
			const newValue = value * value;
			return newValue;
		}
	}

	try {
		const value = -3;
		const newValue = NotNegative(value);
		console.log(newValue);
	} catch (error) {
		console.log(error);
	}
}

function Error03() {
	function DemoFunction(array) {
		array.forEach((element) => {
			console.log(element * element);
		});
	}

	try {
		const value = Math.random();
		DemoFunction(value);
	} catch (error) {
		console.log(error);
	}
}

Error01();
Error02();
Error03();

/* 
- using undeclared object 	: ReferenceError
- using undeclared method 	: TypeError
- violating descriptor 		: TypeError
- stack overflow 			: RangeError
- missing notation 			: SyntaxError
- error in eval expression 	: EvalError */
