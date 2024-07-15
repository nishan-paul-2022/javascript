interface User {
	id: number;
	name: string;
	email: { gmail: string };
}

function Usecase01() {
	const value: User = {
		id: 1,
		name: 'Alice',
		email: { gmail: 'alice@gmail.com' }
	};

	value.id = 2;
	value.name = 'Dixson';
	value.email.gmail = 'dixson@gmail.com';

	console.log(value);
}

function Usecase02() {
	const value: Readonly<User> = {
		id: 1,
		name: 'Alice',
		email: { gmail: 'alice@gmail.com' }
	};

	/*
	value.id = 2;
	value.name = 'Dixson'; */
	value.email.gmail = 'dixson@gmail.com';

	console.log(value);
}

function Usecase03() {
	const value = {
		id: 1,
		location: 'Dhaka'
	} as const;

	/*
	value.id = 2;
	value.location = 'Chittagong'; */

	console.log(value);
}

function Usecase04() {
	const value = [10, 20] as const;

	/*
	value[0] = 100;
	value[1] = 200; */

	console.log(value);
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();

/* 
Readonly<T>: makes all properties in T readonly 

'const' assertions can only be applied to :
	- object literal	
	- array
	- string
	- number
	- boolean */
