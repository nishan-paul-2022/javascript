import { readFile, writeFile } from 'fs';

const inputFilePath = 'E:/CODE/MERN/-node-file-system/input_file.txt';
const outputFilePath = 'E:/CODE/MERN/-node-file-system/output_file.txt';

readFile(inputFilePath, 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading input file:', err);
		return;
	}

	const uppercasedData = data.toUpperCase();

	writeFile(outputFilePath, uppercasedData, 'utf8', (writeErr) => {
		if (writeErr) {
			console.error('Error writing to output file:', writeErr);
			return;
		}
		console.log('Uppercase text written to output file.');
	});
});
