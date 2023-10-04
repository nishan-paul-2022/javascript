function ExampleImmediate() {
	console.log(1);
	console.log(2);
	console.log(3);

	setImmediate(() => {
		console.log('SET IMMEDIATE');
	});

	console.log(4);
	console.log(5);
	console.log(6);
	console.log(7);
}

function ExampleInterval() {
	console.log(1);
	console.log(2);
	console.log(3);

	let i = 0;
	const objectI = setInterval(() => {
		const ans = i ** 2;
		console.log(ans);
		i++;
		if (i >= 5) {
			clearInterval(objectI);
		}
	}, 2000);

	console.log(4);
	console.log(5);
	console.log(6);
	console.log(7);
}

function ExampleTimeout() {
	console.log(1);
	console.log(2);
	console.log(3);

	setTimeout(() => {
		console.log('SET TIME OUT');
	}, 5000);

	console.log(4);
	console.log(5);
	console.log(6);
	console.log(7);
}

ExampleImmediate(); // immediate invoke
ExampleInterval(); // interval before repeated invoke
ExampleTimeout(); // time gap before invoke
