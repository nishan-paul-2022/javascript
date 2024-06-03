/*global Add, fName, dName, RandomFunction*/

require(`./node_module_3.cjs`);

function ExampleOne() {
	global.Add(33, 77);
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
