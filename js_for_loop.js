const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];

console.log('\narray + of');
for (const i of arr) {
	console.log(i);
}

console.log('\narray + in');
for (const i in arr) {
	console.log(`${i} : ${arr[i]}`);
}

const object = {
	x: 1,
	y: 'string',
	z: () => {
		return console.log('function');
	}
};

console.log('\nobjec + in');
for (const i in object) {
	const key = object[i];
	if (key instanceof Function) {
		console.log(`${i} : `);
		key();
	} else {
		console.log(`${i} : ${key}`);
	}
}

console.log('\nstring + of');
const superhero = 'batman';
for (const i of superhero) {
	console.log(i);
}

console.log('\nstring + in');
for (const i in superhero) {
	console.log(`${i} - ${superhero[i]}`);
}

// for (let i of object) { // invalid syntax
//     console.log(i);
// }

// of / value : iterable object
// in / key : iterable and non-iterable object
