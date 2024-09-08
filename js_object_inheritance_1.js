const prototype1 = {
	FullName: function () {
		const fullName = `${this.firstName} ${this.lastName}`;
		console.log(fullName);
	},

	PrintBio: function () {
		console.log(this.age);
		console.log(this.height);
		console.log(this.weight);
	}
};

const prototype2 = {
	firstName: 'Logan',
	lastName: 'Paul',
	age: 27,
	height: 5.5,
	weight: 52,
	__proto__: prototype1
};

function Usecase01() {
	const object = Object.create(prototype1);
	object.firstName = 'Logan';
	object.lastName = 'Paul';
	object.age = 27;
	object.height = 5.5;
	object.weight = 52;
	object.FullName();
	object.PrintBio();
}

function Usecase02() {
	const object = Object.create(prototype2);
	object.FullName();
	object.PrintBio();
}

function Usecase03() {
	const object1 = Object.create(prototype1);
	const object2 = object1;
	object1.firstName = 'Logan';
	object1.lastName = 'Paul';
	object1.FullName();
	object2.FullName();
}

Usecase01();
Usecase02();
Usecase03();
