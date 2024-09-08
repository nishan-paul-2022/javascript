const vehicle = {
	wheels: 4,
	windows: 6,
	mirrors: 2
};

const bmwPetrol = {
	engineType: 'petrol',
	__proto__: vehicle
};

const bmwElectric = {
	fuelType: 'electric',
	__proto__: bmwPetrol
};

const hondaPetrol = {
	engineType: 'petrol',
	__proto__: vehicle
};

const creature = {
	id: 'creature',

	get fullName() {
		const name = `${this.firstName} ${this.lastName}`;
		return name;
	},

	set fullName(name) {
		[this.firstName, this.lastName] = name.split(' ');
	},

	makeSound() {
		console.log(this.id);
	}
};

const animal = {
	id: 'animal',
	__proto__: creature
};

function logAllProperties(obj) {
	console.log(obj);
	for (const prop in obj) {
		console.log(`${prop}: ${obj[prop]}`);
	}
}

function logOwnProperties(obj) {
	console.log(obj);
	for (const prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			console.log(`${prop}: ${obj[prop]}`);
		}
	}
}

function logVehicles() {
	console.log(vehicle);
	console.log(bmwPetrol);
	console.log(bmwElectric);
	console.log(hondaPetrol);
}

function logVehicleKeys() {
	console.log(Object.keys(vehicle));
	console.log(Object.keys(bmwPetrol));
	console.log(Object.keys(bmwElectric));
	console.log(Object.keys(hondaPetrol));
}

function logVehicleValues() {
	console.log(Object.values(vehicle));
	console.log(Object.values(bmwPetrol));
	console.log(Object.values(bmwElectric));
	console.log(Object.values(hondaPetrol));
}

function logAllVehicleProperties() {
	logAllProperties(vehicle);
	logAllProperties(bmwPetrol);
	logAllProperties(bmwElectric);
	logAllProperties(hondaPetrol);
}

function logOwnVehicleProperties() {
	logOwnProperties(vehicle);
	logOwnProperties(bmwPetrol);
	logOwnProperties(bmwElectric);
	logOwnProperties(hondaPetrol);
}

function demonstrateAnimalObject() {
	animal.fullName = 'Blue Whale';
	console.log(animal.fullName);

	creature.makeSound();

	animal.makeSound();

	animal.makeSound = () => {
		console.log('roar');
	};
	animal.makeSound();

	delete animal.makeSound;
	animal.makeSound();

	delete animal.id;
	animal.makeSound();
}

logVehicles();
logVehicleKeys();
logVehicleValues();
logAllVehicleProperties();
logOwnVehicleProperties();
demonstrateAnimalObject();
