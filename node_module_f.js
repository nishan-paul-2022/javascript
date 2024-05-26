import * as module1 from './node_module_e.js';
/* import { RandomFunction, Add, fName, dName } from './node_module_e.js'; */
/* import { RandomFunction as RandomFunctionNew, Add as AddNew, fName, dName } from './node_module_e.js'; */
/* import RandomFunctionNew, { Add as AddNew, fName, dName } from './node_module_e.js'; */
/* import RandomFunctionNew, * as module from './node_module_e.js'; */

function ESModuleExample01() {
	module1.Add(10, 20);
	console.log(module1.fName);
	console.log(module1.dName);
	module1.default();
	/* module1.RandomFunction(); // invalid */
}

async function ESModuleExample02() {
	const module2 = await import('./node_module_e.js');

	module2.Add(10, 20);
	console.log(module2.fName);
	console.log(module2.dName);
	module2.default();
	/* module2.RandomFunction(); // invalid */
}

ESModuleExample01();
await ESModuleExample02();
