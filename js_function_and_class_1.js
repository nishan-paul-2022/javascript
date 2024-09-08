class Profile1 {
	constructor(name, age, height, weight) {
		this.name = name;
		this.age = age;
		this.height = height;
		this.weight = weight;
	}

	get bio() {
		const body = {
			age: this.age,
			height: this.height,
			weight: this.weight
		};
		return body;
	}

	set bio(body) {
		this.age = body.age;
		this.height = body.height;
		this.weight = body.weight;
	}
}

function Profile2(name, age, height, weight) {
	this.name = name;
	this.age = age;
	this.height = height;
	this.weight = weight;
	this.slogan = {
		message: 'my life, my rules'
	};
}

function Usecase01() {
	const instance = new Profile1('paul', 27, 5.5, 57);

	instance.slogan = {
		message: 'my life, my rules'
	};

	instance.bio = {
		age: 32,
		height: 5.5,
		weight: 70
	};

	console.log(instance.name);
	console.log(instance.age);
	console.log(instance.height);
	console.log(instance.weight);
	console.log(instance.bio);
	console.log(instance.slogan.message);
}

function Usecase02() {
	const instance = new Profile2('paul', 27, 5.5, 57);

	console.log(instance.name);
	console.log(instance.age);
	console.log(instance.height);
	console.log(instance.weight);
	console.log(instance.slogan.message);
}

Usecase01();
Usecase02();
