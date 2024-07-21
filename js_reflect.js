/* eslint-disable no-prototype-builtins */

class Animal {}

class Dog {}

function RandomFunction(arg1, arg2, arg3) {
	return arg1 + arg2 + arg3;
}

function marvel(_x, _y) {
	this.title = 'WinterSoldier';
	this.location = 'USA';
}

function Usecase01() {
	const array = [1, 2, 3];
	const regular1 = { a: 1 };
	const regular2 = {
		b: 2,
		c: () => {
			console.log(regular2.a);
		},
		__proto__: regular1
	};
	regular2.c();

	console.log('Reflect.ownKeys(regular1)', Reflect.ownKeys(regular1));
	console.log('Reflect.ownKeys(regular2)', Reflect.ownKeys(regular2));
	console.log('Reflect.ownKeys(array)', Reflect.ownKeys(array));
	console.log(
		'Object.getOwnPropertyNames(regular1)',
		Object.getOwnPropertyNames(regular1)
	);
	console.log(
		'Object.getOwnPropertyNames(regular2)',
		Object.getOwnPropertyNames(regular2)
	);
	console.log(
		'Object.getOwnPropertyNames(array)',
		Object.getOwnPropertyNames(array)
	);
	console.log('array.length', array.length);
}

function Usecase02() {
	const args = [10, 20, 30];

	const result1 = RandomFunction(...args);
	console.log('result1:', result1);

	// RandomFunction.apply = '';
	const result2 = RandomFunction.apply(null, args);
	console.log('result2:', result2);

	// Reflect.apply = '';
	const result3 = Reflect.apply(RandomFunction, null, args);
	console.log('result3:', result3);
}

function Usecase03() {
	const regular = { a: 1, b: 2, c: 3 };

	// regular.hasOwnProperty = '';
	console.log(regular.hasOwnProperty('a'));

	// Object.prototype.hasOwnProperty.call = '';
	console.log(Object.prototype.hasOwnProperty.call(regular, 'a'));

	// Reflect.apply = '';
	console.log(Reflect.apply(Object.prototype.hasOwnProperty, regular, ['a']));
}

function Usecase04() {
	const person = { name: 'Alice', age: 30 };
	const propName = 'age';
	Reflect.deleteProperty(person, propName);
	console.log(person);
}

function Usecase05() {
	Reflect.setPrototypeOf(Dog.prototype, Animal.prototype);
	console.log(
		'Reflect.getPrototypeOf(Dog.prototype) === Animal.prototype :',
		Reflect.getPrototypeOf(Dog.prototype) === Animal.prototype
	);

	const dog = new Dog();

	console.log(
		'Reflect.getPrototypeOf(dog) === Dog.prototyp :',
		Reflect.getPrototypeOf(dog) === Dog.prototype
	);
}

function Usecase06() {
	const array = [10, 20, 30];
	const index = 1;
	const element1 = Reflect.get(array, index);
	console.log(element1);
	Reflect.set(array, index, 200);
	const element2 = Reflect.get(array, index);
	console.log(element2);
}

function Usecase07() {
	const userDefined = new marvel();

	Reflect.set(marvel, 'ID', 'Swag'); // marvel.ID = 'Swag'
	console.log(Reflect.get(marvel, 'name')); // console.log(marvel.name)
	console.log(Reflect.get(marvel, 'length')); // console.log(marvel.length)
	console.log(Reflect.get(marvel, 'ID')); // console.log(marvel.ID)

	Reflect.set(userDefined, 'location', 'america'); // userDefined.location = 'america'
	console.log(Reflect.get(userDefined, 'location')); // console.log(userDefined.location)
	console.log(Reflect.get(userDefined, 'title')); // console.log(userDefined.title)
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();
Usecase05();
Usecase06();
Usecase07();

/*
Reflect.get(object, member)
Reflect.set(object, member, value)
Reflect.ownKeys(object)
Reflect.deleteProperty(object, member)
Reflect.getPrototypeOf(object)
Reflect.setPrototypeOf(object1, object2)
Reflect.apply(function, context, array of argument)
*/
