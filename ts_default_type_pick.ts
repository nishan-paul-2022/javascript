type User = {
	name: string;
	ID: number;
	city: string;
	age: number;
	height: number;
	weight: number;
};

type UserBio = Pick<User, 'age' | 'height' | 'weight'>;

function getUserBio(user: User): UserBio {
	const userBio = {
		age: user.age,
		height: user.height,
		weight: user.weight
	};
	return userBio;
}

function F01() {
	const user: Pick<User, 'name'> = { name: 'Bruce' };
	console.log('pick (name):', user);
}

function F02() {
	const user: Pick<User, 'name' | 'ID' | 'city'> = {
		name: 'Bruce',
		ID: 1162036,
		city: 'Dhaka'
	};
	console.log('pick (name | ID | city):', user);
}

function F03() {
	const user: Pick<User, keyof User> = {
		name: 'Bruce',
		ID: 1162036,
		city: 'Dhaka',
		age: 27,
		height: 5.5,
		weight: 70
	};
	console.log('pick (name | ID | city | age | height | weight):', user);
}

function F04() {
	const user: User = {
		name: 'Bruce',
		ID: 1162036,
		city: 'Dhaka',
		age: 27,
		height: 5.5,
		weight: 70
	};
	const userBio = getUserBio(user);
	console.log('pick (age | height | weight):', userBio);
}

F01();
F02();
F03();
F04();

/* Pick<T, K>: Constructs a type by picking the set of properties K from T */
