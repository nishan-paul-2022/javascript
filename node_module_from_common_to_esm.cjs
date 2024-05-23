async function ESModuleExample01() {
	const module = await import('./node_module_e.js');

	module.Add(10, 20);
	console.log(module.fName);
	console.log(module.dName);
	module.default();
}

function _ESModuleExample02() {
	const module = require('./node_module_e.js');

	module.Add(10, 20);
	console.log(module.fName);
	console.log(module.dName);
	module.RandomFunction();
}

ESModuleExample01();
// _ESModuleExample02();  // can't use require() to import es-module */
