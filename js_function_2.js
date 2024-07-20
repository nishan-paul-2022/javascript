class Class1 {
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

function Class2(name, age, height, weight) {
	this.name = name;
	this.age = age;
	this.height = height;
	this.weight = weight;
	this.slogan = {
		message: 'my life, my rules'
	};
}

function F01() {
	const instance = new Class1('paul', 27, 5.5, 57);

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

function F02() {
	const instance = new Class2('paul', 27, 5.5, 57);

	console.log(instance.name);
	console.log(instance.age);
	console.log(instance.height);
	console.log(instance.weight);
	console.log(instance.slogan.message);
}

function F03() {
	const instance = new Function('x', 'y', 'z', 'return x+y+z;');
	const value = instance(1, 2, 3);
	console.log(value);
}

function F04() {
	function v4(callback) {
		callback(14);
	}

	const v1 = (x) => {
		return console.log(x);
	};
	v1(10);

	const v2 = function (x) {
		console.log(x);
	};
	v2(11);

	const v3 = function v4(x) {
		console.log(x);
	};
	v3(12);

	v4(v3);
}

F01();
F02();
F03();
F04();
