function GetResolve(message) {
	console.log('resolve message:', message);
}

function GetReject(message) {
	console.log('reject message:', message);
}

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

async function FetchDataAsync(FetchData) {
	try {
		const result = await FetchData();
		console.log('Data Fetched Successfully:', result);
		return result;
	} catch (error) {
		console.error('Error Fetching Data:', error);
		throw error;
	}
}

const promise1 = FetchDataAsync(FetchUserData);
promise1.then(GetResolve).catch(GetReject);

const promise2 = FetchDataAsync(FetchProductData);
promise2.then(GetResolve).catch(GetReject);
