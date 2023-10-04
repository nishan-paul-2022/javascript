const readline = require('readline');

function IOExample01() {
	function ShowOutput(userInput) {
		console.log('You entered:', userInput);
		this.close();
	}

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	const caption = 'Enter something: ';
	const ShowOutputBind = ShowOutput.bind(rl);
	rl.question(caption, ShowOutputBind);
}

async function IOExample02() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	const caption = 'Enter something: ';

	function Fn(resolve) {
		this.question(caption, (userInput) => {
			resolve(userInput);
			this.close();
		});
	}

	const FnBind = Fn.bind(rl);
	const result = await new Promise(FnBind);
	console.log('You entered:', result);
}

IOExample01();
IOExample02();
