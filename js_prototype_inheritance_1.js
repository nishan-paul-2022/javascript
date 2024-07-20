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
		const name = this.firstName + ' ' + this.lastName;
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

function Func01() {
	console.log(car);
	console.log(bmw);
	console.log(bmwE);
	console.log(honda);
}

function Func02() {
	console.log(Object.keys(car));
	console.log(Object.keys(bmw));
	console.log(Object.keys(bmwE));
	console.log(Object.keys(honda));
}

function Func03() {
	console.log(Object.values(car));
	console.log(Object.values(bmw));
	console.log(Object.values(bmwE));
	console.log(Object.values(honda));
}

function Func04(obj) {
	console.log(`\n\n`, obj);
	for (const i in obj) {
		console.log(`${i}: ${obj[i]}`);
	}
}

function Func05() {
	Func04(car);
	Func04(bmw);
	Func04(bmwE);
	Func04(honda);
}

function Func06(obj) {
	console.log(`\n\n`, obj);
	for (const i in obj) {
		const noTamim = Object.prototype.hasOwnProperty.call(obj, i);
		if (noTamim) {
			console.log(`${i}: ${obj[i]}`);
		}
	}
}

function Func07() {
	Func06(car);
	Func06(bmw);
	Func06(bmwE);
	Func06(honda);
}

function Func08() {
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

Func01();
Func02();
Func03();
Func05();
Func07();
Func08();
