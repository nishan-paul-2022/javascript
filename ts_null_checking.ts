// "strictNullChecks": false | true

function greet(name: string) {
	try {
		console.log('OS:', name.toUpperCase());
	} catch (error) {
		console.log(error);
	}
}

function NullChecking() {
	let value: string;
	value = 'ubuntu';
	value = 'mac';
	// value = 120; // error | error
	// value = null; // no error | error
	// value = undefined; // no error | error

	greet(value); // runtime error | compile-time error
}

NullChecking();
