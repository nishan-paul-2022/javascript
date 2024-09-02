class Class1 {
	address = 'Dhaka-100';
	house = '3/4';

	get FullAddress() {
		const fullAddress = this.address + ' and ' + this.house;
		return fullAddress;
	}

	set FullAddress(fullAddress) {
		const [address, house] = fullAddress.split(' and ');
		this.address = address;
		this.house = house;
	}
}

class Class2 {
	static bio = 'JS';
	bio = 'COO';

	get Bio() {
		return this.bio;
	}

	set Bio(bio) {
		this.bio = bio;
	}

	static get Bio() {
		return this.bio;
	}

	static set Bio(bio) {
		this.bio = bio;
	}
}

function F01() {
	const instance = new Class1();
	console.log(instance.address);
	console.log(instance.house);

	console.log(instance.FullAddress);
	instance.FullAddress = 'Dhaka-1207 and 89/B';
	console.log(instance.FullAddress);
}

function F02() {
	const instance = new Class2();
	console.log(instance.Bio);
	instance.Bio = 'Chief Operational Officer';
	console.log(instance.Bio);

	console.log(Class2.Bio);
	Class2.Bio = 'Javascript';
	console.log(Class2.Bio);
}

F01();
F02();
