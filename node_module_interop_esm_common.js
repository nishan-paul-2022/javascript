import { Add, fName, dName } from './node_module_a.cjs';

function CommonJsExample01() {
	Add(10, 20);
	console.log(fName);
	console.log(dName);
}

async function CommonJsExample02() {
	const module = await import('./node_module_a.cjs');

	module.Add(10, 20);
	console.log(module.fName);
	console.log(module.dName);
}

async function RandomFunction() {
	console.log('RandomFunction');
}

async function ESModuleExample() {
	const promise = import('./node_module_e.js');
	console.log(promise instanceof Promise);

	const module = await promise;

	module.Add(10, 20);
	console.log(module.fName);
	console.log(module.dName);
	module.default();
}

CommonJsExample01();
CommonJsExample02();
await RandomFunction();
await ESModuleExample();
