/* eslint-disable no-with */
/* eslint-disable no-global-assign */

const obj = {
	name: 'Bard',
	age: 1
};

// This is equivalent to `obj.name = "Google AI"`.
with (obj) {
	name = 'Google AI';
}

console.log(obj.name);

// using with is not recommended
