function FetchUserData() {
	const promise = new Promise((SetResolve, _SetReject) => {
		setTimeout(() => {
			const data = { name: 'John', age: 30 };
			SetResolve(data);
			console.log('FetchUserData');
		}, 2000);
	});
	return promise;
}

function FetchProductData() {
	const promise = new Promise((_SetResolve, SetReject) => {
		setTimeout(() => {
			const data = { productName: 'Smart Phone', price: 500 };
			SetReject(data);
			console.log('FetchProductData');
		}, 4000);
	});
	return promise;
}

async function HandleUserData() {
	try {
		const userData = await FetchUserData();
		console.log('User Data:', userData);
	} catch (error) {
		console.error('Error Fetching Data:', error);
	}
}

async function HandleProductData() {
	try {
		const productData = await FetchProductData();
		console.log('Product Data:', productData);
	} catch (error) {
		console.error('Error Fetching Data:', error);
	}
}

HandleUserData();
HandleProductData();
