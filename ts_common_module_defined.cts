function Add(x: number, y: number): void {
	const sum = x + y;
	console.log(sum);
}

const fName = __filename;
const dName = __dirname;

async function RandomFunction(): Promise<number> {
	setTimeout(() => {
		console.log('RandomFunction');
	}, 1000);
	return Math.PI;
}

module.exports = { Add, fName, dName, message: 'FearIsATool', RandomFunction };
