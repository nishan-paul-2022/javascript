class ClassA {
	address = '89/B';

	house = '3/4';

	get FullAddress() {
		const fullAddress = this.address + ' - ' + this.house;
		return fullAddress;
	}

	set FullAddress(house) {
		this.house = house;
	}
}

class ClassB {
	static bio = 'MERN';

	constructor() {
		this.name = 'paul';
		this.address = '3/4';
	}

	get Name() {
		return this.name;
	}

	set Name(name) {
		this.name = name;
	}

	static get Bio() {
		return ClassB.bio;
	}

	static set Bio(bio) {
		ClassB.bio = bio;
	}
}

function Func01() {
	const classA = new ClassA();
	console.log(classA.address);
	console.log(classA.house);

	console.log(classA.FullAddress);
	classA.FullAddress = '4/5';
	console.log(classA.FullAddress);
}

function Func02() {
	const classB = new ClassB();
	classB.name = 'bateman';
	console.log(classB.name);

	console.log(ClassB.Bio);
	ClassB.Bio = 'JAVASCRIPT';
	console.log(ClassB.Bio);
}

function Func03() {
	class Rabbit {
		constructor(id) {
			this.id = id;
		}
	}

	const rabbitArray = Array.from({ length: 3 }, (_notUsed, index) => {
		return new Rabbit(index);
	});
	console.log(rabbitArray);
}

Func01();
Func02();
Func03();
