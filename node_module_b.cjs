const module = require(`./node_module_a.cjs`);

function ExampleOne() {
	const {
		Add,
		fName: firstName,
		dName,
		Id: CollegeId = 'NDC'
	} = require('./module_a.cjs');

	Add(10, 20);
	console.log(firstName);
	console.log(dName);
	console.log(CollegeId);
}

function ExampleTwo() {
	const module = require(`./module_a.cjs`);

	module.Add(15, 25);
	console.log(module.fName);
	console.log(module.dName);
}

function ExampleThree() {
	module.Add(15, 25);
	console.log(module.fName);
	console.log(module.dName);
}

ExampleOne();
ExampleTwo();
ExampleThree();
