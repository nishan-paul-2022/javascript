import fs from 'fs';

function greeting1() {
	console.log('hello from the other side 01');
}

function greeting2() {
	console.log('hello from the other side 02');
}

function greeting3() {
	console.log('hello from the other side 03');
}

function Usecase01() {
	const id1 = setTimeout(greeting1, 1000);
	const id2 = setInterval(greeting2, 1000);
	const id3 = setImmediate(greeting3);

	clearTimeout(id1);
	clearInterval(id2);
	clearImmediate(id3);
}

// simulating an I/O operation (e.g. reading a file)
function Usecase02() {
	console.log('START');

	fs.readFile('./sample.txt', 'utf8', (error, data) => {
		setTimeout(() => {
			console.log('TIMEOUT 01');
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
			console.log('TIMEOUT 02');
		}, 0);

		setImmediate(() => {
			console.log('IMMEDIATE 01');
			fs.readFile('./sample.txt', 'utf8', (error, data) => {
				if (error) {
					throw error;
				}
				console.log(data);
			});
		});

		setTimeout(() => {
			console.log('TIMEOUT 03');
		}, 0);

		setImmediate(() => {
			console.log('IMMEDIATE 02');
		});

		if (error) {
			throw error;
		}
		console.log(data);
	});

	setTimeout(() => {
		console.log('FILE-SET-TIMEOUT');
	}, 0);

	setImmediate(() => {
		console.log('FILE-SET-IMMEDIATE');
	});

	console.log('END');
}

function Usecase03() {
	fs.readFile('./sample.txt', 'utf8', (error, data) => {
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

		if (error) {
			console.log(error);
		} else {
			console.log(data);
		}
	});
}

function Usecase04() {
	console.log('START');

	setTimeout(() => {
		console.log('SET-TIMEOUT');
	}, 0);

	setImmediate(() => {
		console.log('SET-IMMEDIATE');
	});
	console.log('END');
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();

/*
precedence of timer : 
- Immediate 
- TimeOut and Interval */
