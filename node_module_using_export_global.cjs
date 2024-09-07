require(`./node_module_lib_export_global.cjs`);

function Example01() {
	global.add(33, 77);
	global.fileName();
	global.dirName();
	global.random();
}

function Example02() {
	/*global add, fileName, dirName, random*/

	add(100, 101);
	fileName();
	dirName();
	random();
}

function Example03() {
	const promise = global.random();
	promise
		.then((resolve) => {
			console.log(resolve);
		})
		.catch((reject) => {
			console.log(reject);
		});
}

async function Example04() {
	try {
		const resolve = await global.random();
		console.log(resolve);
	} catch (reject) {
		console.log(reject);
	}
}

Example01();
Example02();
Example03();
Example04();

/*
- no outside await in commonjs module 
- commonjs module isn't compatible for making aynchronous operation synchronous in module scope */
