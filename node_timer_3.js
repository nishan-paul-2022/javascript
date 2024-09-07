import {
	setImmediate as immediate,
	setTimeout as timeout
} from 'timers/promises';

function RegularTimer01() {
	const values = [10, 20, 30];
	let count = 0;
	let intervalId;

	function callback01(i, j, k, msg) {
		console.log(msg, i + j + k);
	}

	function callback02(i, j, k, msg) {
		count++;
		console.log(count, msg, i + j + k);
		if (count >= 5) {
			clearTimeout(intervalId);
		}
	}

	setImmediate(callback01, ...values, 'setImmediate');
	setTimeout(callback01, 5 * 1000, ...values, 'setTimeout');
	intervalId = setInterval(callback02, 1000, ...values, 'setInterval');
}

function RegularTimer02() {
	const array = [1, 2, 3, 4, 5];

	array.equation = function (n) {
		if (n >= 0 && n < this.length) {
			console.log(this[n]);
		} else {
			console.log('INVALID');
		}
	}.bind(array);

	array.equation(3);
	setTimeout(array.equation, 3000, 3);
}

async function Immediate() {
	const msg = await immediate('promise / immediate');
	console.log(msg);
}

async function Timeout01() {
	const msg = await timeout(3000, 'peomise / timeout');
	console.log(msg);
}

function Timeout02() {
	timeout(5000, 'foobar')
		.then(console.log)
		.catch((err) => {
			console.error(err.name);
		});
}

function Timeout03() {
	const controller = new AbortController();
	const signal = controller.signal;

	timeout(5000, 'TIMEOUT 03', { signal })
		.then(console.log)
		.catch((err) => {
			console.error(err.name);
		})
		.finally(() => {
			console.log('finally');
		});

	controller.abort();
}

RegularTimer01();
RegularTimer02();

Immediate();

Timeout01();
Timeout02();
Timeout03();
