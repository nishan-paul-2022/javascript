async function holdMyBear() {
	const promise = new Promise((SetResolve, SetReject) => {
		try {
			setTimeout(() => {
				console.log('have patience');
				SetResolve('success');
			}, 5000);
		} catch (error) {
			const message = error.message;
			console.log(message);
			SetReject(message);
		}
	});
	return promise;
}

function F01() {
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

async function F02() {
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
	await holdMyBear();

	throttleLog('d');
	throttleLog('e');
	await holdMyBear();

	throttleLog('f');
	throttleLog('g');
	throttleLog('h');
}

F01();
F02();
