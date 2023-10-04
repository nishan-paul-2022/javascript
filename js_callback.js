function NonNegative(value) {
	if (value >= 0) {
		return true;
	}
}

function Negative(value) {
	if (value < 0) {
		return true;
	}
}
function Positive(value) {
	if (value > 0) {
		return true;
	}
}

function Filter(lValues, Fn) {
	console.log(Fn);
	for (const i of lValues) {
		if (Fn(i)) {
			console.log(i);
		}
	}
}

const lValues = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
Filter(lValues, NonNegative);
Filter(lValues, Negative);
Filter(lValues, Positive);
