import fs from 'fs/promises';
import path from 'path';
import util from 'util';
import child_process from 'child_process';
import readline from 'readline';

async function ReadJsonFile(filePath) {
	try {
		const fileContent = await fs.readFile(filePath, 'utf-8');
		const jsonData = JSON.parse(fileContent);
		return jsonData;
	} catch (error) {
		console.error('error reading the file:', error);
		throw error;
	}
}

async function WriteJsonFile(filePath, data) {
	try {
		await fs.writeFile(filePath, JSON.stringify(data, null, 4), 'utf-8');
		console.log('data has been written to the file.');
	} catch (error) {
		console.error('error writing to the file:', error);
		throw error;
	}
}

async function GetDirForAllFiles(directory, jsonData) {
	const dirForAllFiles = (await fs.readdir(directory)).filter((file) => {
		const isValidFile = file.match(/.*\.(js|ts|mjs|mts)$/);
		const isNotNodeRunFile = file !== 'node_run_file.js';
		const isDone = file in jsonData.files && jsonData.files[file] === true;
		const isValid = isValidFile && isNotNodeRunFile && !isDone;
		return isValid;
	});
	return dirForAllFiles;
}

const directory = 'E:/CODE/MERN';
const jsonFile = path.join(directory, 'node_run_file.json');
const jsonData = await ReadJsonFile(jsonFile);
const files = await GetDirForAllFiles(directory, jsonData);
const execPromisify = util.promisify(child_process.exec);

async function RunFile(file) {
	const filePath = path.join(directory, file);
	console.log(`running ${file}...`);

	try {
		const { stdout, _stderr } = await execPromisify(
			`npx ts-node ${filePath}`
		);
		console.log(stdout);
		console.log(`output of ${file}`);
		jsonData.files[file] = true;
	} catch (error) {
		console.error(`error running ${file}: ${error.message}`);
		jsonData.files[file] = false;
	}
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function Ask(resolve) {
	const caption = 'Enter something: ';
	rl.question(caption, (userInput) => {
		resolve(userInput);
	});
}

async function RunAllFiles() {
	for (const file of files) {
		const isTerminate = await new Promise(Ask);
		if (!isTerminate) {
			await RunFile(file);
		} else {
			rl.close();
			break;
		}
	}
}

await RunAllFiles();
WriteJsonFile(jsonFile, jsonData);

/* 
FILE READ AND WRITE :

# monolithic approach
- synchronous
- asynchronous
	- callback-based  
	- promise-based 

# modular approach 
*/
