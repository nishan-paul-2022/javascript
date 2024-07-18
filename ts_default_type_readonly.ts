type S = {
	ID: number;
	email: { gmail: string };
};
type T = { ID: number };
type U = number | T;

const student: T = { ID: 1162036 };

function F01() {
	const value: U[] = [10, student];

	value[0] = 20;
	(value[1] as T).ID = 1604085;

	console.log(value);
	console.log(Object.isFrozen(value));
}

function F02() {
	const value = Object.freeze([10, student]);

	// value[0] = 20;
	(value[1] as T).ID = 1604085;

	console.log(value);
	console.log(Object.isFrozen(value));
}

function F03() {
	const value: Readonly<U[]> = [10, student];

	// value[0] = 20;
	(value[1] as T).ID = 1604085;

	console.log(value);
	console.log(Object.isFrozen(value));
}

function F04() {
	const value: readonly U[] = [10, student];

	// value[0] = 20;
	(value[1] as T).ID = 1604085;

	console.log(value);
	console.log(Object.isFrozen(value));
}

function F05() {
	const value = [10, student] as const;

	// value[0] = 20;
	(value[1] as T).ID = 1604085;

	console.log(value);
	console.log(Object.isFrozen(value));
}

function F06() {
	const value: S = {
		ID: 1,
		email: { gmail: 'alice@gmail.com' }
	};

	value.ID = 2;
	value.email.gmail = 'dixson@gmail.com';

	console.log(value);
	console.log(Object.isFrozen(value));
}

function F07() {
	const value = Object.freeze({
		ID: 1,
		email: { gmail: 'alice@gmail.com' }
	});

	// value.ID = 2;
	value.email.gmail = 'dixson@gmail.com';

	console.log(value);
	console.log(Object.isFrozen(value));
}

function F08() {
	const value: Readonly<S> = {
		ID: 1,
		email: { gmail: 'alice@gmail.com' }
	};

	// value.ID = 2;
	value.email.gmail = 'dixson@gmail.com';

	console.log(value);
	console.log(Object.isFrozen(value));
}

function F09() {
	const value = {
		ID: 1,
		email: { gmail: 'alice@gmail.com' }
	} as const;

	// value.ID = 2;
	// value.email.gmail = 'dixson@gmail.com';

	console.log(value);
	console.log(Object.isFrozen(value));
}

F01();
F02();
F03();
F04();
F05();
F06();
F07();
F08();
F09();

/* 
Object.freeze() :
	- top level readonly
	- makes all properties in object readonly

Readonly<T> :
	- top level readonly
	- makes all properties in T readonly

readonly modifier : 
	- top level readonly
	- permitted on literal and attribute

'const' assertion : 
	- root level readonly
	- permitted on literal and attribute */
