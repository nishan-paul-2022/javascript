const module1 = require(`./node_module_1.cjs`);

function Example01() {
	module1.Add(15, 25);
	console.log(module1.fName);
	console.log(module1.dName);
	console.log(module1.message);
	console.log(module1.RandomFunction());
}

function Example02() {
	const module2 = require(`./node_module_1.cjs`);

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
		ID: collegeID = 'NDC'
	} = require('./node_module_1.cjs');

	Add(15, 25);
	console.log(fileName);
	console.log(dirName);
	console.log(message);
	console.log(collegeID);
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
		.then((resolve) => {
			console.log(resolve);
		})
		.catch((reject) => {
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
