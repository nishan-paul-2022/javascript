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

function Filter(values, callback) {
	console.log(callback);
	for (const i of values) {
		if (callback(i)) {
			console.log(i);
		}
	}
}

const values = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
Filter(values, NonNegative);
Filter(values, Negative);
Filter(values, Positive);
