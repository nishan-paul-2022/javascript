type T = {
	id?: number;
	name?: string;
	email?: string;
};

function Usecase01() {
	const value1: T = {
		id: 1,
		name: 'Alice',
		email: 'alice@example.com'
	};
	console.log(value1);

	const value2: T = { id: 1, name: 'Alice' };
	console.log(value2);

	const value3: T = { id: 1 };
	console.log(value3);

	const value4: T = {};
	console.log(value4);
}

function Usecase02() {
	const value: Required<T> = {
		id: 1,
		name: 'Alice',
		email: 'alice@example.com'
	};

	console.log(value);
}

Usecase01();
Usecase02();

/* Required<T>: makes all properties in T required */
