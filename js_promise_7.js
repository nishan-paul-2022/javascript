const GetResolve = (value) => {
	console.log('resolved:', value);
};

const GetReject = (value) => {
	console.log('rejected:', value);
};

const red1 = async () => {
	return new Promise((resolve, _reject) => {
		setTimeout(() => {
			resolve('red1');
		}, 1000);
	});
};

const green1 = async () => {
	return new Promise((resolve, _reject) => {
		setTimeout(() => {
			resolve('green1');
		}, 3000);
	});
};

const blue1 = async () => {
	return new Promise((resolve, _reject) => {
		setTimeout(() => {
			resolve('blue1');
		}, 5000);
	});
};

const red2 = async () => {
	return new Promise((_resolve, reject) => {
		setTimeout(() => {
			reject('red2');
		}, 2000);
	});
};

const green2 = async () => {
	return new Promise((_resolve, reject) => {
		setTimeout(() => {
			reject('green2');
		}, 4000);
	});
};

const blue2 = async () => {
	return new Promise((_resolve, reject) => {
		setTimeout(() => {
			reject('blue2');
		}, 6000);
	});
};

async function Usecase01() {
	console.log('\n - Usecase 01');

	await Promise.resolve('E01').then(GetResolve);
	await Promise.reject('E02').catch(GetReject);

	await Promise.resolve(Promise.resolve('E03')).then(GetResolve);
	await Promise.resolve(Promise.reject('E04')).catch(GetReject);

	await Promise.reject(Promise.resolve('E05'))
		.catch((m) => {
			console.log(m);
			return m;
		})
		.then(GetResolve);

	await Promise.reject(Promise.reject('E06'))
		.catch((m) => {
			console.log(m);
			return m;
		})
		.catch(GetReject);
}

async function Usecase02() {
	console.log('\n - Usecase 02');
	await Promise.all([red1(), green1(), blue1()]).then(GetResolve);
	await Promise.all([red1(), green1(), blue2()]).catch(GetReject);
	await Promise.all([red1(), green2(), blue2()]).catch(GetReject);
}

async function Usecase03() {
	console.log('\n - Usecase 03');
	await Promise.any([red1(), green1(), blue1()]).then(GetResolve);
	await Promise.any([red2(), green2(), blue1()]).then(GetResolve);
	await Promise.any([red2(), green2(), blue2()]).catch(GetReject);
}

async function Usecase04() {
	console.log('\n - Usecase 04');
	await Promise.allSettled([red1(), green1(), blue1()]).then(GetResolve);
	await Promise.allSettled([red2(), green2(), blue2()]).then(GetResolve);
}

async function Usecase05() {
	console.log('\n - Usecase 05');
	await Promise.race([red1(), green1(), blue1()]).then(GetResolve);
	await Promise.race([red2(), green2(), blue2()]).catch(GetReject);
}

await Usecase01();
await Usecase02();
await Usecase03();
await Usecase04();
await Usecase05();

/* 
- Promise.resolve() 	// make resolved
- Promise.reject() 		// make rejected

- Promise.all() 		// all resolved
- Promise.any() 		// any resolved
- Promise.allSettled() 	// all settled
- Promise.race() 		// any settled
*/
