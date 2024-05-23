/*global Add, fName, dName, RandomFunction*/

require(`./node_module_c.cjs`);

function ExampleOne() {
	global.Add(100, 101);
	console.log(global.fName);
	console.log(global.dName);
	global.RandomFunction();
}

function ExampleTwo() {
	Add(100, 101);
	console.log(fName);
	console.log(dName);
	RandomFunction();
}

ExampleOne();
ExampleTwo();
