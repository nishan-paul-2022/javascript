function fetchUserData() {
	const promise = new Promise((SetResolve, _SetReject) => {
		setTimeout(() => {
			const data = { name: 'John', age: 30 };
			SetResolve(data);
			console.log('fetchUserData');
		}, 2000);
	});
	return promise;
}

function fetchProductData() {
	const promise = new Promise((_SetResolve, SetReject) => {
		setTimeout(() => {
			const data = { productName: 'Smart Phone', price: 500 };
			SetReject(data);
			console.log('fetchProductData');
		}, 4000);
	});
	return promise;
}

async function HandleUserData() {
	try {
		const userData = await fetchUserData();
		console.log('User Data:', userData);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

async function HandleProductData() {
	try {
		const productData = await fetchProductData();
		console.log('Product Data:', productData);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

HandleUserData();
HandleProductData();
