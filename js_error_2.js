/* eslint-disable no-undef */
import fs from 'fs';

class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = 'CustomError';
	}
}

function ReadAndProcessFile(filePath) {
	let fileContent;
	let fileHandle;

	try {
		fileHandle = fs.openSync(filePath, 'r');
		fileContent = fs.readFileSync(fileHandle, 'utf8');
	} catch (error) {
		console.error('An error occurred:', error.message);
	} finally {
		if (fileHandle) {
			fs.closeSync(fileHandle);
			console.log('File handle closed.');
		}
	}

	if (fileContent) {
		console.log('File content:', fileContent);
	}
}

function Error04() {
	try {
		console.log(value);
	} catch (error) {
		console.error(`${error.name} / ${error.message}`);
	}
}

function Error05() {
	try {
		throw 'This is a custom error message';
	} catch (error) {
		console.log(error);
	}
}

function Error06() {
	try {
		const error = new Error('ErrorMessage');
		error.name = 'ErrorName';
		throw error;
	} catch (error) {
		console.log(error);
	}
}

function Error07() {
	try {
		// console.log(value);
		throw new CustomError('This is a custom error message');
	} catch (error) {
		const errorDetails = `${error.name} / ${error.message}`;
		if (error instanceof CustomError) {
			console.error(`Caught custom error: ${errorDetails}`);
		} else {
			console.error(`Caught default error: ${errorDetails}`);
		}
	}
}

ReadAndProcessFile('zmax.html');
Error04();
Error05();
Error06();
Error07();

/*
# auto throw => default error => error object => name and message
# manual throw => custom error => any object
*/
