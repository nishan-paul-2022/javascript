function UseCase01(ins) {
	console.log('\n UseCase - 01');

	const keys = Object.keys(ins);
	const values = Object.values(ins);
	const entries = Object.entries(ins);

	console.log(keys);
	console.log(values);
	console.log(entries);
}

function UseCase02(ins) {
	console.log('\n UseCase - 02');

	const keys = ins.keys();
	const values = ins.values();
	const entries = ins.entries();

	console.log(keys);
	console.log(values);
	console.log(entries);
}

const ins01 = {
	firstName: 'Jhon',
	lastName: 'Wick',
	age: 41
};

const ins02 = {
	a: 1,
	b: () => {
		console.log('helloWorld');
	},
	get c() {
		return this.a;
	},
	set c(a) {
		this.a = a;
	},
	[Symbol('symbol')]: () => {
		console.log('symbol');
	}
};

const ins03 = [Math.PI, 'Vikram Rathore', 300];

const ins04 = new Set(['Daredevil', 'Winter Soldier', 'US Agent']);

const ins05 = new Map([
	['apples', 500],
	['bananas', 300],
	['oranges', 200]
]);

UseCase01(ins01);
UseCase01(ins02);
UseCase01(ins03);
// UseCase01(ins04); /* invalid */
// UseCase01(ins05); /* invalid */

// UseCase02(ins01); /* invalid */
// UseCase02(ins02); /* invalid */
// UseCase02(ins03); /* invalid */
UseCase02(ins04);
UseCase02(ins05);
