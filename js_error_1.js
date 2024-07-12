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

/* 
- using undeclared object / Reference Error
- using undeclared method / Type Error
- violating descriptor / Type Error
- stack overflow / Range Error
- missing notation / Syntax Error
- error in eval expression / Eval Error 
*/
