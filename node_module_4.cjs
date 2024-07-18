/*global Add, fName, dName, RandomFunction*/

require(`./node_module_3.cjs`);

function Example01() {
	global.Add(33, 77);
	console.log(global.fName);
	console.log(global.dName);
	global.RandomFunction();
}

function Example02() {
	Add(100, 101);
	console.log(fName);
	console.log(dName);
	RandomFunction();
}

Example01();
Example02();
