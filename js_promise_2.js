// functions that return Promises after a delay
function fetchUserData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ name: 'John', age: 30 });
			console.log('hello');
		}, 2000);
	});
}

function fetchProductData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ productName: 'Smartphone', price: 500 });
			console.log('world');
		}, 1500);
	});
}

// using async/await to handle sequential async operations
async function fetchData() {
	try {
		const userData = await fetchUserData();
		console.log('User Data:', userData);

		const productData = await fetchProductData();
		console.log('Product Data:', productData);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

fetchData();
