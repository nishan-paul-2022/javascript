class Class01 {}

class Class02 extends Class01 {}

class Class03 extends String {}

function UseCaseString() {
	console.log('\n UseCaseString -');

	const string1 = 'paul';
	const string2 = String('paul');
	const string3 = new String('paul');

	console.log('string1 instanceof Object:', string1 instanceof Object);
	console.log('string1 instanceof String:', string1 instanceof String);

	console.log('string2 instanceof Object:', string2 instanceof Object);
	console.log('string2 instanceof String:', string2 instanceof String);

	console.log('string3 instanceof Object:', string3 instanceof Object);
	console.log('string3 instanceof String:', string3 instanceof String);
}

function UseCase01() {
	console.log('\n UseCase01 -');

	const ins01 = new Class01();

	console.log('ins01 instanceof Object:', ins01 instanceof Object);
	console.log('ins01 instanceof Class01:', ins01 instanceof Class01);
}

function UseCase02() {
	console.log('\n UseCase02 -');

	const ins02 = new Class02();

	console.log('ins02 instanceof Class01:', ins02 instanceof Class01);
	console.log('ins02 instanceof Class02:', ins02 instanceof Class02);
}

function UseCase03() {
	console.log('\n UseCase03 -');

	const ins03 = {
		a: 1,
		b: 2,
		c: 3
	};

	console.log('ins03 instanceof Object:', ins03 instanceof Object);
}

function UseCase04() {
	console.log('\n UseCase04 -');

	const ins04 = new Class01();
	ins04.__proto__ = String.prototype;

	console.log('ins04 instanceof Object:', ins04 instanceof Object);
	console.log('ins04 instanceof Class01:', ins04 instanceof Class01);
	console.log('ins04 instanceof String:', ins04 instanceof String);
}

function UseCase05() {
	console.log('\n UseCase05 -');

	const ins05 = new Class03();

	console.log('ins05 instanceof Object:', ins05 instanceof Object);
	console.log('ins05 instanceof Class03:', ins05 instanceof Class03);
	console.log('ins05 instanceof String:', ins05 instanceof String);
}

UseCaseString();
UseCase01();
UseCase02();
UseCase03();
UseCase04();
UseCase05();

// every class instance is also an instance of Object
// when we change the prototype of an object, we actually change the type of that object
// every data type has prototype chain and end of the chain is Object.prototype
