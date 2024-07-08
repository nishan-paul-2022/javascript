interface Animal {
	name: string;
}

interface Dog extends Animal {
	breed: string;
}

function F01() {
	const animal: Animal = { name: 'Spot' };
	// animal.breed = 'Husly';
	console.log(animal);
}

function F02() {
	const dog: Dog = { name: 'Spot', breed: 'Husky' };
	// dog.ID = 1604085;
	console.log(dog);
}

function F03() {
	const dog: Dog = { name: 'Spot', breed: 'Husky' };
	const dogModified = dog as Animal;
	// dogModified.breed = 'Husly';
	console.log(dogModified);
}

function F04() {
	const animal: Animal = { name: 'Spot' };
	const animalModified = animal as Dog;
	animalModified.breed = 'Husky';
	console.log(animalModified);
}

F01();
F02();
F03();
F04();
