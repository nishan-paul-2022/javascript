/* eslint-disable @typescript-eslint/no-unused-vars */

import * as module1 from './node_module_1.cjs';

async function CommonJsExample01() {
	module1.Add(10, 20);
	console.log(module1.fName);
	console.log(module1.dName);
	const value = await module1.RandomFunction();
	console.log(value);
}

async function CommonJsExample02() {
	const module2 = await import('./node_module_1.cjs');

	module2.Add(10, 20);
	console.log(module2.fName);
	console.log(module2.dName);
	const promise = module2.RandomFunction();
	promise
		.then((resolve) => {
			console.log(resolve);
		})
		.catch((reject) => {
			console.log(reject);
		});
}

async function CommonJsExample03() {
	const module3 = require('./node_module_1.cjs');
}

await CommonJsExample01();
await CommonJsExample02();
// CommonJsExample03(); /* can't use require() in es-module */

/* using commonjs-module in es-module */
