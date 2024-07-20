import assert from 'assert';

function RandomFunction() {
	const value = Math.random() * 10;
	return value;
}

const value = RandomFunction();
assert(value < 5, 'less than 5');
