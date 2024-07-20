/* eslint-disable no-with */
/* eslint-disable no-global-assign */

const value = {
	name: 'USA',
	age: 1
};

// This is equivalent to `value.name = "FINLAND"`.
with (value) {
	name = 'FINLAND';
}

console.log(value.name);

/* using with is not recommended */
