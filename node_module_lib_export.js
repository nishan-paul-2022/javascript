import path from 'path';
import url from 'url';

export function add(x, y) {
	const sum = x + y;
	console.log(sum);
}

export function fileName() {
	const name = url.fileURLToPath(import.meta.url);
	return name;
}

export function dirName() {
	const name1 = fileName();
	const name2 = path.dirname(name1);
	return name2;
}

export default async function random() {
	setTimeout(() => {
		console.log('random');
	}, 1000);

	const value = Math.random();
	return value;
}
