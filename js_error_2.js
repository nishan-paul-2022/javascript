/* eslint-disable no-undef */
import fs from 'fs';

class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = 'CustomError';
	}
}

function Error01() {
	const filePath = 'zmax.html';
	let fileContent, fileHandle;

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
		if (fileContent) {
			console.log('File content:', fileContent);
		}
	}
}

function Error02() {
	try {
		console.log(value);
	} catch (error) {
		console.error(`${error.name} / ${error.message}`);
	}
}

function Error03() {
	try {
		throw 'This is a custom error message';
	} catch (error) {
		console.log(error);
	}
}

function Error04() {
	try {
		const error = new Error('ErrorMessage');
		error.name = 'ErrorName';
		throw error;
	} catch (error) {
		console.log(error);
	}
}

function Error05() {
	try {
		// console.log(value); // throws default error
		throw new CustomError('This is a custom error message'); // throws custom error
	} catch (error) {
		const errorDetails = `${error.name} / ${error.message}`;
		if (error instanceof CustomError) {
			console.error(`Caught custom error: ${errorDetails}`);
		} else {
			console.error(`Caught default error: ${errorDetails}`);
		}
	}
}

Error01();
Error02();
Error03();
Error04();
Error05();

/*
- auto throw => default error => error object => name and message
- manual throw => custom error => any object */
