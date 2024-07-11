function F01() {
	const arr: number[] = [120];
	arr.push(220);
	// arr.push('ubuntu');
	// arr.push(true);
	console.log(arr);
}

function F02() {
	const arr: (number | string)[] = [120, 'paul'];
	arr.push(220);
	arr.push('ubuntu');
	// arr.push(true);
	console.log(arr);
}

function F03() {
	const arr: [number, string] = [120, 'paul']; // ensures values in initialization are in certain order
	arr.push(220);
	arr.push('ubuntu');
	// arr.push(true);
	console.log(arr);
}

function F04() {
	const arr: readonly [number, string] = [120, 'paul'];
	// arr.push(220);
	// arr.push('ubuntu');
	// arr.push(true);
	console.log(arr);
}

function F05() {
	const arr: [number, string, boolean?] = [120, 'paul'];
	arr.push(220);
	arr.push('ubuntu');
	arr.push(true);
	console.log(arr);
}

function F06() {
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
