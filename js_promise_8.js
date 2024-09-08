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

await HandleThennable(ReturnThennable);
await HandleThennable(ReturnPromise);

/*
- promise is async 
- every method in promise is async */
