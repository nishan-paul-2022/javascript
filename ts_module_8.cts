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

Usecase01('./sample.txt');
Usecase02('./sample.txt');

/*
- no outside await in commonjs module 
- commonjs module isn't compatible for making aynchronous operation synchronous in module scope */
