function F01() {
	const values: number[] = [120];
	values[0] = 220;
	values.push(320);
	// values.push('ubuntu');
	// values.push(true);
	console.log(values);
}

function F02() {
	const values: (number | string)[] = [120, 'paul'];
	values[0] = 220;
	values.push(320);
	values.push('ubuntu');
	// values.push(true);
	console.log(values);
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
	const values: [number, string] = [120, 'paul']; // ensures values in initialization are in certain order and number
	values[0] = 220;
	values.push(320);
	values.push('ubuntu');
	// values.push(true);
	console.log(values);
}

function F05() {
	const values: [number, string][] = [[120, 'paul']];
	values[0][0] = 220;
	values[0].push(320);
	values[0].push('ubuntu');
	// values[0].push(true);
	console.log(values);
}

function F06() {
	const values: [number, string?] = [120];
	values[0] = 220;
	values.push(320);
	values.push('ubuntu');
	// values.push(true);
	console.log(values);
}

function F07() {
	const values: readonly [number, string] = [120, 'paul'];
	// values[0] = 220;
	// values.push(320);
	// values.push('ubuntu');
	// values.push(true);
	console.log(values);
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
