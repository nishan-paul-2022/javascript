function add(x, y) {
	const sum = x + y;
	console.log(sum);
}

function fileName() {
	const name = __filename;
	console.log(name);
}

function dirName() {
	const name = __dirname;
	console.log(name);
}

async function random() {
	setTimeout(() => {
		console.log('random');
	}, 1000);

	const value = Math.random();
	return value;
}

global.add = add;
global.fileName = fileName;
global.dirName = dirName;
global.random = random;