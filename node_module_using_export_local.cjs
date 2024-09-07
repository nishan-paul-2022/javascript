const module1 = require(`./node_module_lib_export_local.cjs`);

function Example01() {
	module1.add(15, 25);
	module1.fileName();
	module1.dirName();
	module1.random();
}

function Example02() {
	const module2 = require(`./node_module_lib_export_local.cjs`);

	module2.add(15, 25);
	module2.fileName();
	module2.dirName();
	module1.random();
}

function Example03() {
	const {
		add,
		fileName,
		dirName,
		random
	} = require('./node_module_lib_export_local.cjs');

	add(15, 25);
	fileName();
	dirName();
	random();
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
Example03();
Example04();
Example05();
