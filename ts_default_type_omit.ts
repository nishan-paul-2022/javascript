/* eslint-disable arrow-body-style */

type User = {
	ID: number;
	name: string;
	email: string;
	age: number;
	height: number;
	weight: number;
};

function getUserWithoutBio<T>(user: User): T {
	const userWithoutBio = <T>{
		ID: user.ID,
		name: user.name,
		email: user.email
	};
	return userWithoutBio;
}

function F01() {
	type T = Omit<User, 'ID'>;
	const user: T = {
		name: 'Bruce',
		email: 'bruce@gmail.com',
		age: 27,
		height: 5.5,
		weight: 70
	};
	console.log('omit (ID):', user);
}

function F02() {
	type T = Omit<User, 'ID' | 'name' | 'email'>;
	const user: T = {
		age: 27,
		height: 5.5,
		weight: 70
	};
	console.log('omit (ID | name | email):', user);
}

function F03() {
	type T = Omit<User, keyof User>; // anything but null/undefined | NonNullable<unknown>

	let user: T;
	user = 'ubuntu';
	user = 120;
	user = true;
	user = [1, 2, 3];
	user = {};
	user = { a: 1 };
	user = (x: number): number => x;
	user = new Set([1, 2]);
	user = new Map([[1, 2]]);

	/* 	
	user = null;
	user = undefined; */

	console.log('omit (ID | name | email | age | height | weight):', user);
}

function F04() {
	const user: User = {
		ID: 1162036,
		name: 'Bruce',
		email: 'bruce@gmail.com',
		age: 27,
		height: 5.5,
		weight: 70
	};
	type T = Omit<User, 'age' | 'height' | 'weight'>;
	const userBio = getUserWithoutBio<T>(user);
	console.log('omit (age | height | weight):', userBio);
}

F01();
F02();
F03();
F04();

/* Omit<T, K>: Constructs a type by omitting the set of properties K from T */
