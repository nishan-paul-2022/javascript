class Class1 {
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

class Class2 {
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
		return Class2.bio;
	}

	static set Bio(bio) {
		Class2.bio = bio;
	}
}

class Class3 {
	constructor(ID) {
		this.ID = ID;
	}
}

function F01() {
	const instance = new Class1();
	console.log(instance.address);
	console.log(instance.house);

	console.log(instance.FullAddress);
	instance.FullAddress = '4/5';
	console.log(instance.FullAddress);
}

function F02() {
	const instance = new Class2();
	instance.name = 'Batman';
	console.log(instance.name);

	console.log(Class2.Bio);
	Class2.Bio = 'JS';
	console.log(Class2.Bio);
}

function F03() {
	const array = Array.from({ length: 3 }, (_notUsed, index) => {
		return new Class3(index);
	});

	console.log(array);
}

F01();
F02();
F03();
