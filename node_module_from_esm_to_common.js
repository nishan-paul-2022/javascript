import * as module1 from './node_module_a.cjs';

function CommonJsExample01() {
	module1.Add(10, 20);
	console.log(module1.fName);
	console.log(module1.dName);
	module1.RandomFunction();
}

async function CommonJsExample02() {
	const module2 = await import('./node_module_a.cjs');

	module2.Add(10, 20);
	console.log(module2.fName);
	console.log(module2.dName);
	module2.RandomFunction();
}

function _CommonJsExample03() {
	const module3 = require('./node_module_a.cjs');

	module3.Add(10, 20);
	console.log(module3.fName);
	console.log(module3.dName);
}

CommonJsExample01();
await CommonJsExample02();
/* CommonJsExample03(); // can't use require() in es-module */
