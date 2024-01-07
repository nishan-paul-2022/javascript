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

function LoopOf(variable) {
	try {
		console.log('\n Loop Of');
		for (const i of variable) {
			console.log(i);
		}
	} catch (error) {
		console.log(error.message);
	}
}

function LoopIn(variable) {
	console.log('\n Loop In');
	for (const i in variable) {
		console.log(i, ':', variable[i]);
	}
}

LoopOf(str);
LoopOf(arr);
LoopOf(regular1);
LoopOf(regular2);

LoopIn(str);
LoopIn(arr);
LoopIn(regular1);
LoopIn(regular2);
