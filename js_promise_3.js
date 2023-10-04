// Simulating an asynchronous function that returns a Promise after a delay
function fetchData() {
	return new Promise((resolve /*, reject */) => {
		setTimeout(() => {
			// Simulate data retrieval
			const data = {
				name: 'John',
				age: 30
			};
			resolve(data); // Resolve the Promise with the fetched data
		}, 2000); // Simulate a delay of 2 seconds
	});
}

// Using async function to handle the asynchronous operation
async function fetchDataAsync() {
	try {
		// Using await to pause the execution until the Promise is resolved
		const result = await fetchData();
		console.log('Data fetched successfully:', result);
		return result; // The async function returns the resolved value
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error; // The async function throws the error for further handling
	}
}

// Invoking the async function
fetchDataAsync()
	.then((resolvedData) => {
		console.log('Async function resolved:', resolvedData);
	})
	.catch((error) => {
		console.error('Async function error:', error);
	});
