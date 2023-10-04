function UseCase01(ins) {
	console.log('\n UseCase - 01');

	const keysArray = Object.keys(ins);
	const valuesArray = Object.values(ins);
	const entriesArray = Object.entries(ins);

	console.log(keysArray);
	console.log(valuesArray);
	console.log(entriesArray);
}

function UseCase02(ins) {
	console.log('\n UseCase - 02');

	const keysIterator = ins.keys();
	const valuesIterator = ins.values();
	const entriesIterator = ins.entries();

	console.log(keysIterator);
	console.log(valuesIterator);
	console.log(entriesIterator);
}

const ins01 = {
	firstName: 'Jhon',
	lastName: 'Wick',
	age: 41
};

const ins02 = [Math.PI, 'Vikram Rathore', 300];

const ins03 = new Set(['Daredevil', 'Winter Soldier', 'US Agent']);

const ins04 = new Map([
	['apples', 500],
	['bananas', 300],
	['oranges', 200]
]);

UseCase01(ins01);
UseCase01(ins02);

UseCase02(ins02);
UseCase02(ins03);
UseCase02(ins04);
