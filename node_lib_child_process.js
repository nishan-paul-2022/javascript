import child_process from 'child_process';

function processExec() {
	const worker = child_process.exec(
		'npx ts-node node_event.js',
		(error, stdout) => {
			if (error) {
				console.error(error);
			} else {
				console.log(stdout);
			}
		}
	);

	worker.on('exit', (code) => {
		console.log(`child process exited with exit code ${code}`);
	});
}

function processSpawn() {
	const worker = child_process.spawn('node', ['node_event.js']);

	worker.stdout.on('data', (data) => {
		console.log('STDOUT:', data);
	});

	worker.stderr.on('data', (error) => {
		console.log('STDERR:', error);
	});

	worker.on('exit', (code) => {
		console.log(`child process exited with code ${code}`);
	});
}

function processFork() {
	const worker = child_process.fork('node_event.js');

	worker.on('exit', (code) => {
		console.log(`child process exited with code ${code}`);
	});
}

processExec();
processSpawn();
processFork();

/* 
const worker = child_process.exec(commandLine, (error, data) => {})
worker.on('exit', (code) => {})

const worker = child_process.spawn('node', fileName)
worker.stdout.on('data', (data) => {})
worker.stderr.on('data', (error) => {})
worker.on('exit', (code) => {})

const worker = child_process.fork(fileName)
worker.on('exit', (code) => {}) */
