import path from 'path';
import { fileURLToPath } from 'url';

export function Add(x, y) {
	const sum = x + y;
	console.log(sum);
}

export const fName = fileURLToPath(import.meta.url);
export const dName = path.dirname(fName);

export default async function RandomFunction() {
	setTimeout(() => {
		console.log('RandomFunction');
	}, 1000);
	return Math.PI;
}
