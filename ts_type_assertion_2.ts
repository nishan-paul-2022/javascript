interface Animal {
	name: string;
}

interface Dog extends Animal {
	breed: string;
}

function F01() {
	const animal: Animal = { name: 'Spot' };
	// animal.ID = 1604085;
	console.log(animal);
}

function F02() {
	const dog: Dog = { name: 'Spot', breed: 'Husky' };
	// dog.ID = 1604085;
	console.log(dog);
}

function F03() {
	const dog: Dog = { name: 'Spot', breed: 'Husky' };
	const animal = dog as Animal;
	// animal.breed = 'Husly';
	console.log(animal);
}

function F04() {
	const animal: Animal = { name: 'Spot' };
	const dog = animal as Dog;
	dog.breed = 'Husky';
	console.log(dog);
}

function F05() {
	const dog: Dog = { name: 'Spot', breed: 'Husky' };
	const animal = <Animal>dog;
	// animal.breed = 'Husly';
	console.log(animal);
}

function F06() {
	const animal: Animal = { name: 'Spot' };
	const dog = <Dog>animal;
	dog.breed = 'Husky';
	console.log(dog);
}

F01();
F02();
F03();
F04();
F05();
F06();
