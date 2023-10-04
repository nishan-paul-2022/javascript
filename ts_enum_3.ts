/* eslint-disable @typescript-eslint/no-unused-vars */

const _age = 27;
const _nickname = 'VikramRathore';

const personA = {
	age: _age,
	nickname: _nickname
} as const;

enum personB {
	age = _age,
	nickname = _nickname
}

enum personC {
	age = personA.age
	// nickname = personA.nickname // invalid
}

// type T1 = _age; // invalid
// type T2 = _nickname; // invalid

// type T3 = personA.age; // invalid
// type T4 = personA.nickname; // invalid

type T5 = personB;
type T6 = personB.age;
type T7 = personB.nickname;

type T8 = 27;
type T9 = 'VikramRathore';

const variable1: T5 = 27;
const variable2: T5 = _age;
// let variable3: T5 = "VikramRathore"; // invalid
// let variable4: T5 = _nickname; // invalid
const variable5: T5 = personB.age;
const variable6: T5 = personB.nickname;
const variable7: T9 = _nickname;

function KeyofOperator() {
	enum Fruit1 {
		a = 'ax',
		b = 'bx',
		c = 'cx'
	}

	const Fruit2 = {
		a: 'ax',
		b: 'bx',
		c: 'cx'
	};

	const Fruit = Fruit1;

	console.log(Fruit['a']);
	console.log(Fruit['a' as keyof typeof Fruit]);
	console.log(Fruit['a' as keyof typeof Fruit] === 'ax');
}

KeyofOperator();
