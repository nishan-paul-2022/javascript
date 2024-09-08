const string = 'ubuntu';
const array = [0, 11, 22, 33, 44];

const regular1 = {
	x: 1,
	y: 'ubuntu',
	z: () => {
		console.log('method');
	}
};

const regular2 = {
	x: 1,
	y: 'ubuntu',
	z: () => {
		console.log('method');
	},
	[Symbol.iterator]: function () {
		const keys = Object.keys(this);
		const length = keys.length;
		let index = 0;
		return {
			next: function () {
				if (index < length) {
					return { value: keys[index++], done: false };
				} else {
					return { value: undefined, done: true };
				}
			}
		};
	}
};

function ForOfLoop(value) {
	try {
		for (const i of value) {
			console.log(i);
		}
	} catch (error) {
		console.log(error.message);
	}
}

function ForInLoop(value) {
	for (const i in value) {
		console.log(`${i} : ${value[i]}`);
	}
}

ForOfLoop(string);
ForOfLoop(array);
ForOfLoop(regular1);
ForOfLoop(regular2);

ForInLoop(string);
ForInLoop(array);
ForInLoop(regular1);
ForInLoop(regular2);

/* iterable object supports for-of-loop, non-iterable doesn't */
