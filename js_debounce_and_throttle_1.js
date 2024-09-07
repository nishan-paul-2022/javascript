async function engine() {
	const promise = new Promise((resolve, reject) => {
		try {
			setTimeout(() => {
				console.log('patience');
				resolve('success');
			}, 5000);
		} catch (error) {
			const message = error.message;
			console.log(message);
			reject(message);
		}
	});
	return promise;
}

function Usecase01() {
	function debounce(callback, ms) {
		let timer;
		function wrapper(message) {
			if (timer) {
				clearTimeout(timer);
			}

			timer = setTimeout(() => {
				callback(message);
				clearTimeout(timer);
			}, ms);
		}
		return wrapper;
	}

	const debounceLog = debounce(console.log, 3000);

	debounceLog('a');
	debounceLog('b');
	debounceLog('c');
	debounceLog('d');
}

async function Usecase02() {
	function throttle(callback, ms) {
		let text = null;
		let isThrottled = false;

		function wrapper(message) {
			if (isThrottled) {
				text = message;
				isThrottled = true;
				return;
			}
			isThrottled = true;
			callback(message);
			setTimeout(() => {
				isThrottled = false;
				if (text) {
					wrapper(text);
					text = null;
				}
			}, ms);
		}

		return wrapper;
	}

	const throttleLog = throttle(console.log, 1000);

	throttleLog('a');
	throttleLog('b');
	throttleLog('c');
	await engine();

	throttleLog('d');
	throttleLog('e');
	await engine();

	throttleLog('f');
	throttleLog('g');
	throttleLog('h');
}

Usecase01();
Usecase02();
