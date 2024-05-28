const prototype01 = {
	FullName: function () {
		const fullName = this.firstName + ' ' + this.lastName;
		console.log(fullName);
	},

	PrintBio: function () {
		console.log(this.age);
		console.log(this.height);
		console.log(this.weight);
	}
};

const prototype02 = {
	firstName: 'hello',
	lastName: 'world',
	age: 27,
	height: 5.5,
	weight: 52,
	__proto__: prototype01
};

function TestCase01() {
	const object = Object.create(prototype01);
	object.firstName = 'hello';
	object.lastName = 'world';
	object.age = 27;
	object.height = 5.5;
	object.weight = 52;
	object.FullName();
	object.PrintBio();
}

function TestCase02() {
	const object = Object.create(prototype02);
	object.FullName();
	object.PrintBio();
}

function TestCase03() {
	const object1 = Object.create(prototype01);
	const object2 = object1;
	object1.firstName = 'hello';
	object1.lastName = 'world';
	object1.FullName();
	object2.FullName();
}

TestCase01();
TestCase02();
TestCase03();
