async function _ESModuleExample01() {
	const module = require('./node_module_e.js');

	module.Add(10, 20);
	console.log(module.fName);
	console.log(module.dName);
}

async function ESModuleExample02() {
	const promise = import('./node_module_e.js');
	console.log(promise instanceof Promise);

	const module1 = await promise;

	module1.Add(10, 20);
	console.log(module1.fName);
	console.log(module1.dName);
	module1.default();
}

async function _RandomFunction() {
	console.log('RandomFunction');
}

// _ESModuleExample01(); // invalid (require doesn't work with es module)
ESModuleExample02();
// await _RandomFunction(); // invalid (no outside await in commonjs module)
