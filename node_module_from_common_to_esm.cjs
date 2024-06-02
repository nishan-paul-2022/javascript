async function ESModuleExample01() {
	const module = await import('./node_module_e.js');

	module.Add(10, 20);
	console.log(module.fName);
	console.log(module.dName);
	// module.RandomFunction(); /* invalid */
	const value = await module.default();
	console.log(value);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function ESModuleExample02() {
	const module = require('./node_module_e.js');

	module.Add(10, 20);
	console.log(module.fName);
	console.log(module.dName);
	// module.RandomFunction(); /* invalid */
	const value = await module.default();
	console.log(value);
}

ESModuleExample01();
// ESModuleExample02(); /* can't use require() to import es-module */
