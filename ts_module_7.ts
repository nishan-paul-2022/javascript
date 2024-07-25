import fs from 'fs';
// import * as fs from 'fs';

function Usecase01(filename: string): void {
	const content = fs.readFileSync(filename).toString();
	console.log(content);
}

async function Usecase02(filename: string): Promise<void> {
	const fs = await import('fs');
	const content = fs.readFileSync(filename).toString();
	console.log(content);
}

Usecase01('./sample.txt');
await Usecase02('./sample.txt');
