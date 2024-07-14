function F01() {
	const arr: number[] = [120];
	arr[0] = 220;
	arr.push(320);
	// arr.push('ubuntu');
	// arr.push(true);
	console.log(arr);
}

function F02() {
	const arr: (number | string)[] = [120, 'paul'];
	arr[0] = 220;
	arr.push(320);
	arr.push('ubuntu');
	// arr.push(true);
	console.log(arr);
}

function F03() {
	type array = number[] | string[];

	const arr1: array = ['paul', 'ubuntu'];
	console.log(arr1);

	const arr2: array = [120, 220];
	console.log(arr2);

	/*
	const arr3: array = ['paul', 'ubuntu', 120, 220];
	console.log(arr3); */
}

function F04() {
	const arr: [number, string] = [120, 'paul']; // ensures values in initialization are in certain order and number
	arr[0] = 220;
	arr.push(320);
	arr.push('ubuntu');
	// arr.push(true);
	console.log(arr);
}

function F05() {
	const arr: [number, string][] = [[120, 'paul']];
	arr[0][0] = 220;
	arr[0].push(320);
	arr[0].push('ubuntu');
	// arr[0].push(true);
	console.log(arr);
}

function F06() {
	const arr: [number, string?] = [120];
	arr[0] = 220;
	arr.push(320);
	arr.push('ubuntu');
	// arr.push(true);
	console.log(arr);
}

function F07() {
	const arr: readonly [number, string] = [120, 'paul'];
	// arr[0] = 220;
	// arr.push(320);
	// arr.push('ubuntu');
	// arr.push(true);
	console.log(arr);
}

function F08() {
	type HttpResponse = readonly [statusCode: number, statusMessage: string];
	const response: HttpResponse = [200, 'OK'];
	const [statusCode, statusMessage] = response;
	const [code, message] = response;
	console.log(`status Code: ${statusCode}, status Message: ${statusMessage}`);
	console.log(`code: ${code}, message: ${message}`);
}

F01();
F02();
F03();
F04();
F05();
F06();
F07();
F08();
