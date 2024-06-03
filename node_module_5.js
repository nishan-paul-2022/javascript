import path from 'path';
import url from 'url';

export function Add(x, y) {
	const sum = x + y;
	console.log(sum);
}

export const fName = url.fileURLToPath(import.meta.url);
export const dName = path.dirname(fName);

export default async function RandomFunction() {
	setTimeout(() => {
		console.log('RandomFunction');
	}, 1000);
	return Math.PI;
}
