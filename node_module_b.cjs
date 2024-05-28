const module1 = require(`./node_module_a.cjs`);

function ExampleOne() {
	module1.Add(15, 25);
	console.log(module1.fName);
	console.log(module1.dName);
}

function ExampleTwo() {
	const module2 = require(`./node_module_a.cjs`);

	module2.Add(15, 25);
	console.log(module2.fName);
	console.log(module2.dName);
}

function ExampleThree() {
	const {
		Add,
		fName: firstName,
		dName,
		Id: CollegeId = 'NDC'
	} = require('./node_module_a.cjs');

	Add(10, 20);
	console.log(firstName);
	console.log(dName);
	console.log(CollegeId);
}

async function ExampleFour() {
	const value = await module1.RandomFunction();
	console.log(value);
}

ExampleOne();
ExampleTwo();
ExampleThree();
ExampleFour();
// await ExampleFour(); /* invalid (no outside await in commonjs-module) */
