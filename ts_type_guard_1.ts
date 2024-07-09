function isNumber1(value: unknown): boolean {
	return typeof value === 'number';
}

function isNumber2(value: unknown): value is number {
	return typeof value === 'number';
}

function KeywordIs1() {
	const value: unknown = Math.PI;

	// within this block, typeScript doesn't know that value is of type number
	if (isNumber1(value)) {
		console.log("typeScript doesn't allow number-specific methods");
		// console.log(value.toPrecision(5));
	}
}

function KeywordIs2() {
	const value: unknown = Math.PI;

	// within this block, typeScript doesn't know that value is of type number
	if (isNumber1(value)) {
		console.log(
			'typeScript allows number-specific methods beacuse of type assertion'
		);
		console.log((value as number).toPrecision(5));
	}
}

function KeywordIs3() {
	const value: unknown = Math.PI;

	// within this block, typeScript knows that value is of type number
	if (isNumber2(value)) {
		console.log(
			'typeScript allows number-specific methods beacuse of type guard'
		);
		console.log(value.toPrecision(5));
	}
}

KeywordIs1();
KeywordIs2();
KeywordIs3();
