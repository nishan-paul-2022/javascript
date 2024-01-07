function* GenerateSequence(start, end) {
	for (let i = start; i <= end; i++) {
		yield i;
	}
}

function* GeneratePassword() {
	yield* GenerateSequence(48, 57);
	yield* GenerateSequence(65, 90);
	yield* GenerateSequence(97, 122);
}

function UseCase() {
	let str = '';
	const iterator = GeneratePassword();
	for (const value of iterator) {
		str += String.fromCharCode(value);
	}
	console.log(str);
}

UseCase();
