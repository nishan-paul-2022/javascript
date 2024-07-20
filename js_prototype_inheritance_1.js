const car = {
	cycles: 4,
	windows: 6,
	lookingGlass: 2
};

const bmw = {
	engine: 'V8',
	__proto__: car
};

const bmwE = {
	energy: 'electric',
	__proto__: bmw
};

const honda = {
	engine: 'Chrome',
	__proto__: car
};

const animal = {
	ID: 'animal',
	get fullName() {
		const name = `${this.firstName} ${this.lastName}`;
		return name;
	},

	set fullName(name) {
		[this.firstName, this.lastName] = name.split(' ');
	},

	Sound() {
		console.log(this.ID);
	}
};

const lion = {
	ID: 'lion',
	__proto__: animal
};

function F01() {
	console.log(car);
	console.log(bmw);
	console.log(bmwE);
	console.log(honda);
}

function F02() {
	console.log(Object.keys(car));
	console.log(Object.keys(bmw));
	console.log(Object.keys(bmwE));
	console.log(Object.keys(honda));
}

function F03() {
	console.log(Object.values(car));
	console.log(Object.values(bmw));
	console.log(Object.values(bmwE));
	console.log(Object.values(honda));
}

function F04(obj) {
	console.log(`\n\n`, obj);
	for (const i in obj) {
		console.log(`${i}: ${obj[i]}`);
	}
}

function F05() {
	F04(car);
	F04(bmw);
	F04(bmwE);
	F04(honda);
}

function F06(obj) {
	console.log(`\n\n`, obj);
	for (const i in obj) {
		const noTamim = Object.prototype.hasOwnProperty.call(obj, i);
		if (noTamim) {
			console.log(`${i}: ${obj[i]}`);
		}
	}
}

function F07() {
	F06(car);
	F06(bmw);
	F06(bmwE);
	F06(honda);
}

function F08() {
	lion.fullName = 'jhon wick';
	console.log(lion.fullName);

	animal.Sound();

	lion.Sound();

	lion.Sound = () => {
		// write operation
		console.log('WTF!');
	};
	lion.Sound();

	delete lion.Sound; // delete operation
	lion.Sound();

	delete lion.ID;
	lion.Sound();

	delete lion.ID;
	lion.Sound();
}

F01();
F02();
F03();
F05();
F07();
F08();
