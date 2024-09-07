/* eslint-disable @typescript-eslint/no-unused-vars */

import module1 from './node_module_lib_export_local.cjs';

function Example01() {
	module1.add(10, 20);
	module1.fileName();
	module1.dirName();
	module1.random();
}

async function Example02() {
	const module2 = await import('./node_module_lib_export_local.cjs');

	module2.add(10, 20);
	module2.fileName();
	module2.dirName();
	module2.random();
}

function Example03() {
	const module3 = require('./node_module_lib_export_local.cjs');
}

function Example04() {
	const promise = module1.random();
	promise
		.then((resolve) => {
			console.log(resolve);
		})
		.catch((reject) => {
			console.log(reject);
		});
}

async function Example05() {
	try {
		const value = await module1.random();
		console.log(value);
	} catch (error) {
		console.log(error);
	}
}

Example01();
Example02();
// Example03(); /* can't use require() in es-module */
Example04();
await Example05();

/* using commonjs-module in es-module */
