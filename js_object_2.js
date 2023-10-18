const pro01 = {
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

const pro02 = {
	firstName: 'hello',
	lastName: 'world',
	age: 27,
	height: 5.5,
	weight: 52,

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

function TestCase01() {
	const object1 = Object.create(pro01);
	object1.firstName = 'hello';
	object1.lastName = 'world';
	object1.age = 27;
	object1.height = 5.5;
	object1.weight = 52;
	object1.FullName();
	object1.PrintBio();
}

function TestCase02() {
	const object2 = Object.create(pro02);
	object2.FullName();
	object2.PrintBio();
}

function TestCase03() {
	const object3 = pro01;
	const object4 = pro01;
	object3.firstName = 'hello';
	object3.lastName = 'world';
	object3.FullName();
	object4.FullName();
}

function TestCase04() {
	const number = [1, 2, 3, 4, 5];
	const numberX = number;
	numberX[0] = 11;
	console.log(number[0]);
	number[4] = 40;
	console.log(numberX[4]);
}

function TestCase05() {
	let str = 'hello';
	const str1 = str;
	str += str1;
	console.log(str);
}

TestCase01();
TestCase02();
TestCase03();
TestCase04();
TestCase05();
