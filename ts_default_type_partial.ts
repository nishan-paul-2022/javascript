type Person = {
	name: string;
	age: number;
	address: string;
};

function Usecase01() {
	const value: Person = { name: 'Jhon', age: 42, address: '89/B Dhaka' };
	console.log(value);
}

function Usecase02() {
	const value1: Person = { name: 'Jhon', age: 42, address: '89/B Dhaka' };
	console.log(value1);

	const value2: Partial<Person> = { name: 'Jhon', age: 42 };
	console.log(value2);

	const value3: Partial<Person> = { name: 'Jhon' };
	console.log(value3);

	const value4: Partial<Person> = {};
	console.log(value4);
}

Usecase01();
Usecase02();

/* Partial<T>: makes all properties in T optional */
