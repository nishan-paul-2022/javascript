import child_process from 'child_process';

function Exec() {
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

function Spawn() {
	const worker = child_process.spawn('node', ['node_event.js']);

	worker.stdout.on('data', (data) => {
		console.log('stdout: \n' + data);
	});

	worker.stderr.on('data', (error) => {
		console.log('stderr: \n' + error);
	});

	worker.on('exit', (code) => {
		console.log(`child process exited with code ${code}`);
	});
}

function Fork() {
	const worker = child_process.fork('node_event.js');

	worker.on('exit', (code) => {
		console.log(`child process exited with code ${code}`);
	});
}

Exec();
Spawn();
Fork();

/* 
    const worker = child_process.exec(commandLine, (error, data) => {})
    worker.on('exit', (code) => {})

    const worker = child_process.spawn('node', fileName)
    worker.stdout.on('data', (data) => {})
    worker.stderr.on('data', (error) => {})
    worker.on('exit', (code) => {})

    const worker = child_process.fork(fileName)
    worker.on('exit', (code) => {}) */
