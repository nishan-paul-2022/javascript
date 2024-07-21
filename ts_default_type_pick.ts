type User = {
	ID: number;
	name: string;
	email: string;
	age: number;
	height: number;
	weight: number;
};

function getUserBio<T>(user: User): T {
	const userBio = <T>{
		age: user.age,
		height: user.height,
		weight: user.weight
	};
	return userBio;
}

function F01() {
	type T = Pick<User, 'ID'>;
	const user: T = { ID: 1162036 };
	console.log('pick (ID):', user);
}

function F02() {
	type T = Pick<User, 'ID' | 'name' | 'email'>;
	const user: T = {
		ID: 1162036,
		name: 'Bruce',
		email: 'bruce@gmail.com'
	};
	console.log('pick (ID | name | email):', user);
}

function F03() {
	type T = Pick<User, keyof User>;
	const user: T = {
		ID: 1162036,
		name: 'Bruce',
		email: 'bruce@gmail.com',
		age: 27,
		height: 5.5,
		weight: 70
	};
	console.log('pick (ID | name | email | age | height | weight):', user);
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
	type T = Pick<User, 'age' | 'height' | 'weight'>;
	const userBio = getUserBio<T>(user);
	console.log('pick (age | height | weight):', userBio);
}

F01();
F02();
F03();
F04();

/* Pick<T, K>: Constructs a type by picking the set of properties K from T */
