import fs from 'fs';

function welcome1() {
	console.log('Welcome to JavaTpoint 1');
}

function welcome2() {
	console.log('Welcome to JavaTpoint 2');
}

function welcome3() {
	console.log('Welcome to JavaTpoint 3');
}

function En() {
	const id1 = setTimeout(welcome1, 1000);
	const id2 = setInterval(welcome2, 1000);
	const id3 = setImmediate(welcome3);
	clearTimeout(id1);
	clearInterval(id2);
	clearImmediate(id3);
}

// Simulating an I/O operation (e.g. reading a file)
function Fn() {
	console.log('Start');

	fs.readFile('zmax.txt', 'utf8', (err, data) => {
		setTimeout(() => {
			console.log('timeout1');
		}, 0);

		let i = 0;
		const x = setInterval(() => {
			i++;
			console.log(i);
			if (i >= 10) {
				clearInterval(x);
			}
		}, 0);

		setTimeout(() => {
			console.log('timeout2');
		}, 0);

		setImmediate(() => {
			console.log('immediate1');
			fs.readFile('zmax.css', 'utf8', (err, data) => {
				if (err) {
					throw err;
				}
				console.log(data);
			});
		});

		setTimeout(() => {
			console.log('timeout3');
		}, 0);

		setImmediate(() => {
			console.log('immediate2');
		});

		if (err) {
			throw err;
		}
		console.log(data);
	});

	setTimeout(() => {
		console.log('FILE-SET-TIMEOUT');
	}, 0);

	setImmediate(() => {
		console.log('FILE-SET-IMMEDIATE');
	});

	console.log('End');
}

function Gn() {
	fs.readFile('zmax.html', 'utf8', (err, data) => {
		setTimeout(() => {
			console.log('SET-TIMEOUT');
		}, 0);

		setImmediate(() => {
			const x = 10;
			const y = 20;
			const z = (x * y) / (x + y);
			const u = z ** Math.PI;
			console.log(u);
			console.log('SET-IMMEDIATE');
		});

		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	});
}

function Hn() {
	console.log('START');

	setTimeout(() => {
		console.log('SET-TIMEOUT');
	}, 0);

	setImmediate(() => {
		console.log('SET-IMMEDIATE');
	});
	console.log('END');
}

En();
Fn();
Gn();
Hn();

// module : client side (ES module) | server side (CommonJs module)
// precedence : 01. Immediate 02. TimeOut, Interval
