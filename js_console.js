const error = 'error message';
const log = 'log message';
const warn = 'warning message';
const arr = [1, 2, 3, 4, 5];
const object = {
	age: 27,
	height: 5.5,
	weight: 53
};

console.log(log);
console.warn(warn);
console.error(error);
console.table(arr);
console.table(object);

console.count(object);
console.count('object');
console.count(Math.PI);
console.count(Math.PI);

function Delay03(value) {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			console.log(value);
			resolve();
		}, 2000);
	});

	return promise;
}

console.time('block-A');
for (let i = 0; i < 10; i++) {
	await Delay03(i);
}
console.timeEnd('block-A');
