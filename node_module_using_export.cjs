/* eslint-disable @typescript-eslint/no-unused-vars */

async function Example01() {
	const module = await import('./node_module_lib_export.js');

	module.add(10, 20);
	module.fileName();
	module.dirName();
	// module.random(); /* invalid */
	const value = await module.default();
	console.log(value);
}

async function Example02() {
	const module = require('./node_module_lib_export.js');
}

Example01();
// Example02(); /* can't use require() to import es-module */

/* using es-module in commonjs-module */
