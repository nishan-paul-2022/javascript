import { setTimeout as setTimeoutPromise } from 'timers/promises';

function Func01() {
	function spy(func) {
		const arr = [];
		const func1 = function (...values) {
			arr.push(...values);
			func1.argList = arr;
			func(...values);
		};

		return func1;
	}

	function work(...values) {
		const sum = values.reduce((sum, currvalue) => {
			return sum + currvalue;
		});
		console.log(sum);
	}

	const workMod = spy(work);
	workMod(1, 2); // 3
	workMod(4, 5); // 9
	workMod(6, 7, 8); // 9

	for (const arg of workMod.argList) {
		console.log(arg);
	}
}

function Func02() {
	function delay(f) {
		return function (message, ms) {
			setTimeout(f, ms, message);
		};
	}

	const delayAlert = delay(console.log);
	delayAlert('test', 3000); // shows "test" after 1000ms
}

function Func03() {
	function Debounce(func, ms) {
		let timer;
		return (message) => {
			if (timer) {
				clearTimeout(timer);
			}

			timer = setTimeout(() => {
				func(message);
				clearTimeout(timer);
			}, ms);
		};
	}

	const log = Debounce(console.log, 3000);
	log('a');
	log('b');
	log('c');
	log('d');
}

async function Func04() {
	function Throttle(func, ms) {
		let text = null;
		let isThrottled = false;

		function Wrapper(message) {
			if (isThrottled) {
				text = message;
				isThrottled = true;
				return;
			}
			isThrottled = true;
			func(message);
			setTimeout(() => {
				isThrottled = false;
				if (text) {
					Wrapper(text);
					text = null;
				}
			}, ms);
		}

		return Wrapper;
	}

	const log = Throttle(console.log, 1000);
	log('a');
	log('b');
	log('c');
	await setTimeoutPromise(5000);
	log('d');
	log('e');
	await setTimeoutPromise(5000);
	log('f');
	log('g');
	log('h');
}

Func01();
Func02();
Func03();
Func04();
