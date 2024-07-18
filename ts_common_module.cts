import fs = require('fs');

function Usecase01(filename: string): void {
	const content = fs.readFileSync(filename).toString();
	console.log(content);
}

async function Usecase02(filename: string): Promise<void> {
	const fs = await import('fs');
	const content = fs.readFileSync(filename).toString();
	console.log(content);
}

Usecase01('./zmax.txt');
Usecase02('./zmax.txt');
