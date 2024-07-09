interface Animal {
	name: string;
}

interface Dog extends Animal {
	breed: string;
}

function MathConstant(format: boolean): number | string {
	const ans = format ? `${Math.PI}` : Math.PI;
	return ans;
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

function F07() {
	const someValue: unknown = 'Hello, TypeScript';
	const strLength: number = (someValue as string).length;
	console.log(`The length of the string is: ${strLength}`);
}

function F08() {
	const someValue: unknown = 'Hello, TypeScript';
	const strLength: number = (<string>someValue).length;
	console.log(`The length of the string is: ${strLength}`);
}

function F09() {
	const ans1 = MathConstant(true) as string;
	console.log(ans1.length);

	const ans2 = <number>MathConstant(false);
	console.log(ans2.toPrecision(2));
}

function F10() {
	const profile = {
		name: 'paul',
		age: 25,
		height: 5.5,
		weight: '57kg'
	} as const;

	console.log(profile);
	console.log(Object.isFrozen(profile));
	// profile.weight = '70kg'; /* read-pnly property */
}

F01();
F02();
F03();
F04();
F05();
F06();
F07();
F08();
F09();
F10();
