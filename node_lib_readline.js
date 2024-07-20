import readline from 'readline';
import util from 'util';

async function IOExample01() {
	function ShowOutput(userInput) {
		console.log('you entered:', userInput);
		this.close();
	}

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	const caption = 'enter something: ';
	const ShowOutputBind = ShowOutput.bind(rl);
	rl.question(caption, ShowOutputBind);
}

async function IOExample02() {
	function ShowOutput(resolve) {
		const caption = 'enter something: ';
		this.question(caption, (userInput) => {
			resolve(userInput);
			this.close();
		});
	}

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	const ShowOutputBind = ShowOutput.bind(rl);
	const result = await new Promise(ShowOutputBind);
	console.log('you entered:', result);
}

async function IOExample03() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	const question = util.promisify(rl.question.bind(rl));
	const caption = 'enter something: ';
	try {
		const result = await question(caption);
		console.log('you entered:', result);
	} catch (error) {
		console.log(error);
		rl.close();
	}
}

await IOExample01();
await IOExample02();
await IOExample03();

/* 
- rl.question is async 
- util.promisify doesn't directly work with rl.question method because, rl.question doesn't follow standard node.js callback style (error-first callback) */
