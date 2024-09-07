import * as module1 from './node_module_lib_export.js';
/* import { RandomFunction, Add, fName, dName } from './node_module_lib_export.js'; */
/* import { RandomFunction as RandomFunctionNew, Add as AddNew, fName, dName } from './node_module_lib_export.js'; */
/* import RandomFunctionNew, { Add as AddNew, fName, dName } from './node_module_lib_export.js'; */
/* import RandomFunctionNew, * as module1 from './node_module_lib_export.js'; */

async function Example01() {
	module1.add(10, 20);
	module1.fileName();
	module1.dirName();
	// module1.random(); /* invalid */
	const value = await module1.default();
	console.log(value);
}

async function Example02() {
	const module2 = await import('./node_module_lib_export.js');

	module2.add(10, 20);
	module2.fileName();
	module2.dirName();
	// module2.random(); /* invalid */
	const promise = module2.default();
	promise
		.then((resolve) => {
			console.log(resolve);
		})
		.catch((reject) => {
			console.log(reject);
		});
}

await Example01();
await Example02();
