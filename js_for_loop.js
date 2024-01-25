const str = 'hello';
const arr = [0, 11, 22, 33, 44];

const regular1 = {
	x: 1,
	y: 'string',
	z: () => {
		console.log('method');
	}
};

const regular2 = {
	x: 1,
	y: 'string',
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

function ForOfLoop(variable) {
	try {
		for (const i of variable) {
			console.log(i);
		}
	} catch (error) {
		console.log(error.message);
	}
}

function ForInLoop(variable) {
	for (const i in variable) {
		console.log(`${i} : ${variable[i]}`);
	}
}

ForOfLoop(str);
ForOfLoop(arr);
ForOfLoop(regular1);
ForOfLoop(regular2);

ForInLoop(str);
ForInLoop(arr);
ForInLoop(regular1);
ForInLoop(regular2);

// iterable-object supports for-of-loop, non-iterable doesn't
