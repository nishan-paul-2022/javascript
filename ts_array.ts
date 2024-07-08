function F01() {
	const arr1: number[] = [1];
	// arr1.push('a');
	arr1.push(2);
	console.log(arr1);
}

function F02() {
	const arr2: (number | string)[] = [1, 'a'];
	arr2.push('b');
	arr2.push(2);
	// arr2.push(true);
	console.log(arr2);
}

function F03() {
	const arr3: [number, string] = [1, 'a']; // ensures values in initialization are in certain order
	arr3.push('b');
	arr3.push(2);
	// arr3.push(true);
	console.log(arr3);
}

function F04() {
	const arr4: readonly [number, string] = [1, 'a'];
	// arr4.push('b');
	// arr4.push(2);
	// arr4.push(true);
	console.log(arr4);
}

function F05() {
	type HttpResponse = [statusCode: number, statusMessage: string];
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
