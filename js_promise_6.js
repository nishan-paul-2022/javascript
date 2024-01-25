const range = 10;

async function IterationDelay01() {
	console.log('Iteration Delay 01');

	const promise = new Promise((SetResolve) => {
		let i = 0;
		const intervalId = setInterval(() => {
			console.log(i++);
			if (i >= range) {
				clearInterval(intervalId);
				SetResolve();
			}
		}, 2000);
	});

	await promise;
}

async function IterationDelay02() {
	console.log('Iteration Delay 02');

	for (let i = 0; i < range; i++) {
		const promise = new Promise((SetResolve) => {
			setTimeout(() => {
				SetResolve(i);
			}, 2000);
		});
		const resolve = await promise;
		console.log(resolve);
	}
}

await IterationDelay01();
await IterationDelay02();
