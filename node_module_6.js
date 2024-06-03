import * as module1 from './node_module_5.js';
/* import { RandomFunction, Add, fName, dName } from './node_module_5.js'; */
/* import { RandomFunction as RandomFunctionNew, Add as AddNew, fName, dName } from './node_module_5.js'; */
/* import RandomFunctionNew, { Add as AddNew, fName, dName } from './node_module_5.js'; */
/* import RandomFunctionNew, * as module1 from './node_module_5.js'; */

async function ESModuleExample01() {
	module1.Add(10, 20);
	console.log(module1.fName);
	console.log(module1.dName);
	// module1.RandomFunction(); /* invalid */
	const value = await module1.default();
	console.log(value);
}

async function ESModuleExample02() {
	const module2 = await import('./node_module_5.js');

	module2.Add(10, 20);
	console.log(module2.fName);
	console.log(module2.dName);
	// module2.RandomFunction(); /* invalid */
	const promise = module2.default();
	promise
		.then((resolve) => {
			console.log(resolve);
		})
		.catch((reject) => {
			console.log(reject);
		});
}

await ESModuleExample01();
await ESModuleExample02();
