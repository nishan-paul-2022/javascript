function callback(acc, val, idx, arr) {
	acc += val;
	console.log(`${idx}: ${arr}`);
	return acc;
}

function ArrayConcat() {
	const array1 = [1, 2];
	console.log(array1);
	console.log(`${array1}`);
	console.log(array1.toString());

	const array2 = [3, 4];
	const array3 = array1 + array2;
	console.log(array3);
	console.log(typeof array3);

	const array4 = array1.concat(array2);
	console.log(array4);
	console.log(typeof array4);
}

function ArrayConversion() {
	const array = ['z', 'a', 'm', 'd', 'i'];
	console.log(array.toString());
	console.log(array.join(' '));

	array.name = 'number array';
	array.sepStr = function (sep) {
		const str = this.join(sep);
		console.log(str);
	};

	console.log(array);
	console.log(array.name);
	array.sepStr('-');
}

function DeleteAndInsert() {
	const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const delElems = array.splice(0, 2, ...[101, 102, 103]);
	console.log(array);
	console.log(delElems);

	array.splice(7);
	console.log(array);
}

function StringToArray() {
	const str = 'hello world';
	const words = str.split(/\s+/);
	console.log(words);
	words.pop();
	console.log(words.length);
}

function HigherOrderMethods() {
	const array = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
	];

	console.log(array.length);

	const arrayMap = array.map((n) => {
		return n * 10;
	});
	console.log(arrayMap);

	const arrayFilter = array.filter((n) => {
		return n % 2;
	});
	console.log(arrayFilter);

	const arraySome = array.some((n) => {
		return n < 0;
	});
	console.log(arraySome);

	const arrayEvery = array.every((n) => {
		return n > 0;
	});
	console.log(arrayEvery);

	const arrayFind = array.find((n) => {
		return n % 5 === 0;
	});
	console.log(arrayFind);

	const idxFind = array.findIndex((n) => {
		return n % 5 === 0;
	});
	console.log(idxFind);

	const arrayReduce = array.reduce(callback, 0); // left to right
	console.log(arrayReduce);

	const arrayReduceRight = array.reduceRight(callback, 0); // right to left
	console.log(arrayReduceRight);

	array.forEach((n) => {
		return console.log(n * 11);
	});

	console.log(array.indexOf(1));

	console.log(array.lastIndexOf(1));
}

function ArrayKey() {
	const array = [11, 22, 33];
	console.log(array['0']);
	console.log(array['1']);
	console.log(array['2']);
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

function ArrayOf() {
	const arr = Array.of(1, 2, 3, 4, 5);
	console.log(arr); // Output: [1, 2, 3, 4, 5]
}

ArrayConcat();
ArrayConversion();
DeleteAndInsert();
StringToArray();
HigherOrderMethods();
ArrayKey();
ArrayIteration();
ArrayOf();

/* splice(where-to-insert-elements, from-that-postion-number-of-elements-to-be-deletd, new-elements-to-be-added) */
