import fs from 'fs/promises';
import path from 'path';
import util from 'util';
import child_process from 'child_process';
import readline from 'readline';

async function ReadJsonFile(filePath) {
	try {
		console.log(filePath);
		const fileContent = await fs.readFile(filePath, 'utf-8');
		const jsonData = JSON.parse(fileContent);
		return jsonData;
	} catch (error) {
		console.error('error reading the file:', error);
		throw error;
	}
}

async function WriteJsonFile(filePath, jsonData) {
	try {
		const fileContent = JSON.stringify(jsonData, null, 4);
		await fs.writeFile(filePath, fileContent, 'utf-8');
		console.log('data has been written to the file.');
	} catch (error) {
		console.error('error writing to the file:', error);
		throw error;
	}
}

async function GetFileDirs(directory, jsonData) {
	const fileNameSet = await fs.readdir(directory);

	const fileNames = fileNameSet.filter((fileName) => {
		const isValidFile = fileName.match(/.*\.(js|ts|mjs|mts)$/);
		const isNotNodeRunFile = fileName !== 'node_run_file.js';
		const isDone =
			fileName in jsonData.files && jsonData.files[fileName] === true;
		const isValid = isValidFile && isNotNodeRunFile && !isDone;
		return isValid;
	});

	return fileNames;
}

async function RunFile(directory, fileName) {
	const filePath = path.join(directory, fileName);
	console.log(`running ${fileName}...`);

	try {
		const execPromisify = util.promisify(child_process.exec);
		const { stdout, _stderr } = await execPromisify(
			`npx ts-node ${filePath}`
		);
		console.log(stdout);
		console.log(`output of ${fileName}`);
		return true;
	} catch (error) {
		console.error(`error running ${fileName}: ${error.message}`);
		return false;
	}
}

async function RunAllFiles(directory, jsonData, fileNames) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	for (const fileName of fileNames) {
		const isTerminate = await new Promise((resolve) => {
			rl.question('enter something: ', (userInput) => {
				resolve(userInput);
			});
		});

		if (!isTerminate) {
			jsonData.files[fileName] = await RunFile(directory, fileName);
		} else {
			rl.close();
			break;
		}
	}
}

const directory = 'E:/CODE/MERN';
const jsonFile = path.join(directory, 'node_run_file.json');
const jsonData = await ReadJsonFile(jsonFile);
const fileNames = await GetFileDirs(directory, jsonData);
await RunAllFiles(directory, jsonData, fileNames);
await WriteJsonFile(jsonFile, jsonData);

/* 
FILE READ AND WRITE :

	# monolithic approach
		- synchronous
		- asynchronous
			: callback-based  
			: promise-based 

	# modular approach 

	const exec = util.promisify(child_process.exec);
	const {stdout, _stderr} = exec(`npx ts-node ${filePath}`);
	console.log(stdout);

	readline.createInterace({
		stdin: process.stdin,
		stdout: process.stdout
	});
*/
