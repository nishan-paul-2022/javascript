function F01() {
	const arr: number[] = [1];
	// arr.push('a');
	arr.push(2);
	console.log(arr);
}

function F02() {
	const arr: (number | string)[] = [1, 'a'];
	arr.push('b');
	arr.push(2);
	// arr.push(true);
	console.log(arr);
}

function F03() {
	const arr: [number, string] = [1, 'a']; // ensures values in initialization are in certain order
	arr.push('b');
	arr.push(2);
	// arr.push(true);
	console.log(arr);
}

function F04() {
	const arr: readonly [number, string] = [1, 'a'];
	// arr.push('b');
	// arr.push(2);
	// arr.push(true);
	console.log(arr);
}

function F05() {
	type HttpResponse = readonly [statusCode: number, statusMessage: string];
	const response: HttpResponse = [200, 'OK'];
	const [statusCode, statusMessage] = response;
	const [statusCode1, statusMessage2] = response;
	console.log(`status Code: ${statusCode}, status Message: ${statusMessage}`);
	console.log(
		`status Code: ${statusCode1}, status Message: ${statusMessage2}`
	);
}

F01();
F02();
F03();
F04();
F05();
