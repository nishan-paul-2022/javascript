import { readdirSync } from 'fs';
import { join } from 'path';
import { exec } from 'child_process';

const directory = 'E:/CODE/MERN';

const files = readdirSync(directory).filter((file) => {
	return file.endsWith('.js');
});

files.forEach((file) => {
	const filePath = join(directory, file);
	console.log(`Running ${file}...`);
	exec(`node ${filePath}`, (error, stdout, _stderr) => {
		if (error) {
			console.error(`Error running ${file}: ${error.message}`);
			return;
		}
		console.log(`Output of ${file}:\n${stdout}`);
	});
});
