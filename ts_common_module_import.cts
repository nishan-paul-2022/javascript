const module1 = require('./ts_common_module_defined.cts');

function Example01() {
	module1.Add(15, 25);
	console.log(module1.fName);
	console.log(module1.dName);
	console.log(module1.message);
	console.log(module1.RandomFunction());
}

function Example02() {
	const module2 = require('./ts_common_module_defined.cts');

	module2.Add(15, 25);
	console.log(module2.fName);
	console.log(module2.dName);
	console.log(module2.message);
	console.log(module1.RandomFunction());
}

function Example03() {
	const {
		Add,
		fName: fileName,
		dName: dirName,
		message,
		id: collegeId = 'NDC'
	} = require('./ts_common_module_defined.cts');

	Add(15, 25);
	console.log(fileName);
	console.log(dirName);
	console.log(message);
	console.log(collegeId);
}

async function Example04() {
	try {
		const value = await module1.RandomFunction();
		console.log(value);
	} catch (error) {
		console.log(error);
	}
}

function Example05() {
	const promise = module1.RandomFunction();
	promise
		.then((resolve: number) => {
			console.log(resolve);
		})
		.catch((reject: unknown) => {
			console.log(reject);
		});
}

Example01();
Example02();
Example03();
Example04();
Example05();

/*
- no outside await in commonjs module 
- commonjs module isn't compatible for making aynchronous operation synchronous in module scope */
