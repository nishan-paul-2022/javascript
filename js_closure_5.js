function F01() {
	function makeNewEngine(callback) {
		const array = [];

		function wrapper(...values) {
			array.push(...values);
			wrapper.argList = array;
			callback(...values);
		}

		return wrapper;
	}

	function engine(...values) {
		const sum = values.reduce((sum, current) => {
			return sum + current;
		});
		console.log(sum);
	}

	const newEngine = makeNewEngine(engine);

	newEngine(1, 2); // 3
	newEngine(4, 5); // 9
	newEngine(6, 7, 8); // 9

	newEngine.argList.forEach((arg) => {
		console.log(arg);
	});
}

function F02() {
	function delay(callback) {
		function wrapper(message, ms) {
			setTimeout(callback, ms, message);
		}
		return wrapper;
	}

	const delayLog = delay(console.log);
	delayLog('hello, sir!', 3000); // logs "test" after 1000ms
}

F01();
F02();
