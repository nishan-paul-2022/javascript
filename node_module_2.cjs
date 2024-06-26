const module1 = require(`./node_module_1.cjs`);

function ExampleOne() {
	module1.Add(15, 25);
	console.log(module1.fName);
	console.log(module1.dName);
	console.log(module1.message);
	console.log(module1.RandomFunction());
}

function ExampleTwo() {
	const module2 = require(`./node_module_1.cjs`);

	module2.Add(15, 25);
	console.log(module2.fName);
	console.log(module2.dName);
	console.log(module2.message);
	console.log(module1.RandomFunction());
}

function ExampleThree() {
	const {
		Add,
		fName: fileName,
		dName: dirName,
		message,
		id: collegeId = 'NDC'
	} = require('./node_module_1.cjs');

	Add(10, 20);
	console.log(fileName);
	console.log(dirName);
	console.log(message);
	console.log(collegeId);
}

async function ExampleFour() {
	console.log('ExampleFour');
	const value = await module1.RandomFunction();
	console.log(value);
}

function ExampleFive() {
	console.log('ExampleFive');
	const promise = module1.RandomFunction();
	promise
		.then((resolve) => {
			console.log(resolve);
		})
		.catch((reject) => {
			console.log(reject);
		});
}

ExampleOne();
ExampleTwo();
ExampleThree();
ExampleFour();
// await ExampleFour(); /* invalid (no outside await in commonjs module) */
ExampleFive();

/* commonjs module isn't compatible for making aynchronous operation synchronous in module scope */
