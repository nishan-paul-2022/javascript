function ReduceCallback(acc, val, idx, arr) {
	acc += val;
	const arrStr = arr.toString();
	console.log(`${idx}: ${arrStr}`);
	return acc;
}

function ArrayConcat() {
	const arr1 = [1, 2];
	const arr2 = [3, 4];
	const arr3 = arr1 + arr2;
	const arr4 = arr1.concat(arr2);

	console.log(`${arr1}`);
	console.log(arr1);
	console.log(arr3);
	console.log(typeof arr3);
	console.log(arr4);
	console.log(`${arr4}`);
}

function ArrayConversion() {
	const number = ['z', 'a', 'm', 'd', 'i'];
	console.log(number.toString());
	console.log(number.join(' '));

	number.name = 'number array';
	number.sepStr = function (sep) {
		const str = this.join(sep);
		console.log(str);
	};

	console.log(number);
	console.log(number.name);
	number.sepStr('-');
}

function DeleteAndInsert() {
	const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const delElems = number.splice(0, 2, ...[101, 102, 103]);
	console.log(number);
	console.log(delElems);

	number.splice(7);
	console.log(number);
}

function StringToArray() {
	const str = 'hello world';
	const words = str.split(/\s+/);
	console.log(words);
	words.pop();
	console.log(words.length);
}

function HigherOrderMethods() {
	const number = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
	];

	console.log(number.length);

	const numberMap = number.map((n) => {
		return n * 10;
	});
	console.log(numberMap);

	const numberFilter = number.filter((n) => {
		return n % 2;
	});
	console.log(numberFilter);

	const numberSome = number.some((n) => {
		return n < 0;
	});
	console.log(numberSome);

	const numberEvery = number.every((n) => {
		return n > 0;
	});
	console.log(numberEvery);

	const numberFind = number.find((n) => {
		return n % 5 === 0;
	});
	console.log(numberFind);

	const idxFind = number.findIndex((n) => {
		return n % 5 === 0;
	});
	console.log(idxFind);

	const numberReduce = number.reduce(ReduceCallback, 0); // left to right
	console.log(numberReduce);

	const numberReduceRight = number.reduceRight(ReduceCallback, 0); // right to left
	console.log(numberReduceRight);

	number.forEach((n) => {
		return console.log(n * 11);
	});

	console.log(number.indexOf(1));

	console.log(number.lastIndexOf(1));
}

function ArrayKey() {
	const num = [1, 2, 3];
	console.log(num['0']);
	console.log(num['1']);
	console.log(num['2']);
}

function ArrayIteration() {
	const arr = [1, 2, 3];
	for (const i in arr) {
		console.log(i, arr[i]);
	}

	for (const i of arr) {
		console.log(i);
	}

	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

ArrayConcat();
ArrayConversion();
DeleteAndInsert();
StringToArray();
HigherOrderMethods();
ArrayKey();
ArrayIteration();
