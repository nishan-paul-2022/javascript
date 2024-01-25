function GetResolve(message) {
	console.log('resolve message:', message);
}

function GetReject(message) {
	console.log('reject message:', message);
}

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

async function fetchDataAsync(fetchData) {
	try {
		const result = await fetchData();
		console.log('Data fetched successfully:', result);
		return result;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}

const promise1 = fetchDataAsync(fetchUserData);
promise1.then(GetResolve).catch(GetReject);

const promise2 = fetchDataAsync(fetchProductData);
promise2.then(GetResolve).catch(GetReject);
