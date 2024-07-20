import fs from 'fs/promises';
import path from 'path';
import util from 'util';
import child_process from 'child_process';
import readline from 'readline';
// import * as readline from 'readline/promises';

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
		const isNodeRunFile = fileName === 'node_code_checking.js';
		const isDone =
			fileName in jsonData.files && jsonData.files[fileName] === true;
		const isValid = isValidFile && !isNodeRunFile && !isDone;
		return isValid;
	});

	return fileNames;
}

async function RunFile(directory, fileName) {
	const filePath = path.join(directory, fileName);
	console.log(`running ${fileName}...`);

	try {
		const exec = util.promisify(child_process.exec);
		const { stdout, _stderr } = await exec(`npx ts-node ${filePath}`);
		console.log(stdout);
		console.log(`output of ${fileName}`);
		return true;
	} catch (error) {
		console.error(`error running ${fileName}: ${error.message}`);
		return false;
	}
}

async function RunAllFiles(directory, fileNames, jsonData) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	const question = util.promisify(rl.question.bind(rl));

	for (const fileName of fileNames) {
		try {
			await question('enter something (blank to continue): ');
			jsonData.files[fileName] = await RunFile(directory, fileName);
		} catch (error) {
			console.log(error);
			rl.close();
			break;
		}
	}
}

const directory = './';
const jsonFile = path.join(directory, 'node_code_checking.json');
const jsonData = await ReadJsonFile(jsonFile);
const fileNames = await GetFileDirs(directory, jsonData);
await RunAllFiles(directory, fileNames, jsonData);
await WriteJsonFile(jsonFile, jsonData);
