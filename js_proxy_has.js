const symbol = Symbol('symbol');
const grandparent = { origin: 'grandparent' };
const parent = { identity: 'parent' };
const child = { name: 'child' };

Object.defineProperties(parent, {
	nature: {
		value: 'Alpha',
		writable: false,
		enumerable: false,
		configurable: false
	}
});

Object.defineProperties(child, {
	age: {
		value: () => {
			console.log(Math.E);
		},
		writable: false,
		enumerable: true,
		configurable: false
	},
	height: {
		get: () => {
			return child.name;
		},
		set: (name) => {
			child.name = name;
		},
		enumerable: false,
		configurable: true
	},
	[symbol]: {
		value: Math.PI,
		writable: true,
		enumerable: true,
		configurable: true
	}
});

Object.setPrototypeOf(parent, grandparent);
Object.setPrototypeOf(child, parent);

function UseCase01() {
	console.log('\n use case 01 :');
	console.log("'origin' in child :", 'origin' in child);
	console.log("'identity' in child :", 'identity' in child);
	console.log("'name' in child :", 'name' in child);
	console.log("'nature' in child :", 'nature' in child);
	console.log("'age' in child :", 'age' in child);
	console.log("'height' in child :", 'height' in child);
	console.log('symbol in child :', symbol in child);
	console.log("'toString' in child :", 'toString' in child);
}

function UseCase02() {
	console.log('\n use case 02 :');
	let range = {
		start: 1,
		end: 10,
		data: 'helloWorld'
	};

	range = new Proxy(range, {
		has(target, prop) {
			return prop >= target.start && prop <= target.end;
		}
	});

	console.log('5 in range :', 5 in range);
	console.log('50 in range :', 50 in range);
	console.log("'data' in range :", 'data' in range);
}

UseCase01();
UseCase02();
