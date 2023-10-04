function Add(x, y) {
	const sum = x + y;
	console.log(sum);
}

const fName = __filename;
const dName = __dirname;

global.Add = Add;
global.fName = fName;
global.dName = dName;
