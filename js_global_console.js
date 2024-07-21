function delayOperation(value) {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			console.log(value);
			resolve();
		}, 500);
	});

	return promise;
}

const object = {
	age: 27,
	height: 5.5,
	weight: 53
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const length = array.length;

function F01() {
	console.table(array);
	console.table(object);
}

function F02() {
	console.count(array);
	console.count('ubuntu');
	console.count('ubuntu');
	console.count(Math.PI);
	console.count(Math.PI);
	console.count(Math.PI);
}

function F03() {
	console.time('label-01');
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		console.log(element);
	}
	console.timeEnd('label-01');
}

function F04() {
	console.time('label-02');
	for (let index = 0; index < length; index++) {
		const element = array[index];
		console.log(element);
	}
	console.timeEnd('label-02');
}

async function F05() {
	console.time('label-03');
	for (let index = 0; index < length; index++) {
		const element = array[index];
		await delayOperation(element);
	}
	console.timeEnd('label-03');
}

console.error('error message');
console.log('log message');
console.warn('warning message');
F01();
F02();
F03();
F04();
await F05();
