function Delay01() {
	let i = 0;
	const intervalId = setInterval(() => {
		console.log(i++);
		if (i >= 10) {
			clearInterval(intervalId);
		}
	}, 2000);
}

async function Delay02() {
	for (let i = 0; i < 10; i++) {
		await new Promise((resolve) => {
			setTimeout(() => {
				console.log(i);
				resolve();
			}, 2000);
		});
	}
}

function Delay03(value) {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			console.log(value);
			resolve();
		}, 2000);
	});

	return promise;
}

Delay01();

await Delay02();

for (let i = 0; i < 10; i++) {
	await Delay03(i);
}
