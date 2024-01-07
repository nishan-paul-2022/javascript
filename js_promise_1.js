function resolve(response) {
	// The Promise was resolved, process the data
	console.log('Data fetched successfully: \n', response);
}

function reject(error) {
	// The Promise was rejected, handle the error
	console.log('Error fetching data: \n', error);
}

function ExecutorFunction(resolve, reject) {
	// Create an XMLHttpRequest object
	const xhr = new XMLHttpRequest();

	// Configure the request
	xhr.open('GET', 'http://www.shafaetsplanet.com/planetcoding/?p=1400');

	// Set up event handlers
	xhr.onload = function () {
		if (xhr.status === 200) {
			// Request successful, resolve the Promise with the response data
			resolve(xhr.responseText);
		} else {
			// Request failed, reject the Promise with an error message
			reject('Error: Unable to fetch data from the server.');
		}
	};

	xhr.onerror = function () {
		// Request error, reject the Promise with an error message
		reject('Error: An unexpected error occurred.');
	};

	// Send the request
	xhr.send();
}

// Example function that returns a Promise to make an HTTP request
const fetchDataFromServer = new Promise(ExecutorFunction);

// Using the Promise to fetch data from the server
fetchDataFromServer.then(resolve).catch(reject);
