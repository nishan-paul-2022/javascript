function Add(x, y) {
	const sum = x + y;
	console.log(sum);
}

const fName = __filename;
const dName = __dirname;

async function RandomFunction() {
	console.log('RandomFunction');
	return Math.PI;
}

global.Add = Add;
global.fName = fName;
global.dName = dName;
global.RandomFunction = RandomFunction;
