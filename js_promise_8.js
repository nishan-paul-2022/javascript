function getResolve(message) {
	console.log('resolve message:', message);
}

function getReject(message) {
	console.log('reject message:', message);
}

function ExecutorFunction(setResolve, setReject) {
	console.log('Enter The Dragon');

	setTimeout(() => {
		const value = Math.round(Math.random() * 10);
		if (value % 2 === 0) {
			setResolve('Thennable object resolved');
		} else {
			setReject('Thennable object rejected');
		}
	}, 2000);
}

function ReturnThennable() {
	const thennable = {
		then: ExecutorFunction
	};
	return thennable;
}

function ReturnPromise() {
	const promise = new Promise(ExecutorFunction);
	return promise;
}

async function HandleThennable(func) {
	try {
		const thennable = func();
		const result = await thennable;
		console.log('resolved:', result);
	} catch (error) {
		console.error('rejected:', error);
	}
}

async function NestedPromise() {
	const promise = new Promise((_, setReject) => {
		setReject(
			new Promise((setResolve, _) => {
				setResolve(
					new Promise((_, setReject) => {
						return setReject(
							new Promise((setResolve, _) => {
								setResolve(
									new Promise((setResolve, _) => {
										setResolve(
											new Promise((_, setReject) => {
												setReject(
													new Promise(
														(setResolve, _) => {
															setResolve(
																'treasure'
															);
														}
													)
												);
											})
										);
									})
								);
							})
						);
					})
				);
			})
		);
	});

	await Promise.all([promise]).then(getResolve).catch(getReject);

	await Promise.allSettled([promise]).then(getResolve).catch(getReject);

	await promise
		.catch((m) => {
			console.log(m);
			return m;
		})
		.catch((m) => {
			console.log(m);
			return m;
		})
		.catch((m) => {
			console.log(m);
			return m;
		})
		.then((m) => {
			console.log(m);
			return m;
		});
}

await HandleThennable(ReturnThennable);
await HandleThennable(ReturnPromise);
await NestedPromise();

/*
- promise is async 
- every method in promise is async 
*/
