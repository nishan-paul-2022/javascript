function Assign() {
	const obj1 = { a: 1, b: 2 };
	const obj2 = { b: 3, c: 4 };
	const obj3 = { a: 5 };
	Object.assign(obj3, obj1, obj2);
	console.log(obj3);
}

function KeyValueEntry() {
	const symbol = Symbol('symbol');

	const obj = {
		a: 1,
		b: () => {
			console.log('helloWorld');
		},
		get c() {
			return this.a;
		},
		set c(b) {
			this.b = b;
		},
		[symbol]: () => {
			console.log('symbol');
		}
	};

	const keys = Object.keys(obj);
	const values = Object.values(obj);
	const entries = Object.entries(obj);

	console.log(keys);
	console.log(values);
	console.log(entries);
	console.log(Object.fromEntries(entries));
	values[1]();
}

function SetProperty() {
	const symbol = Symbol('symbol');

	const obj = {
		a: 1,
		[symbol]: () => {
			console.log('symbol');
		}
	};

	Object.defineProperties(obj, {
		b: {
			value: () => {
				console.log('helloWorld');
			},
			writable: true,
			enumerable: true,
			configurable: true
		},
		c: {
			get: () => {
				return obj.a;
			},
			set: (a) => {
				obj.a = a;
			},
			enumerable: true,
			configurable: true
		}
	});

	Object.defineProperty(obj, 'd', {
		value: 4,
		writable: true,
		enumerable: true,
		configurable: true
	});

	obj.c = Math.PI;
	console.log(obj.c);

	console.log(Object.prototype.hasOwnProperty.call(obj, 'a'));
	console.log(Object.prototype.hasOwnProperty.call(obj, symbol));
	console.log(Object.prototype.hasOwnProperty.call(obj, 'e'));
}

function GetProperty() {
	const symbol = Symbol('symbol');

	const obj = {
		a: 1,
		b: () => {
			console.log('helloWorld');
		},
		get c() {
			return this.a;
		},
		set c(b) {
			this.b = b;
		},
		[symbol]: () => {
			console.log('symbol');
		}
	};

	console.log(Object.getOwnPropertyNames(obj));
	console.log(Object.getOwnPropertySymbols(obj));
	console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
	console.log(Object.getOwnPropertyDescriptor(obj, 'b'));
	console.log(Object.getOwnPropertyDescriptor(obj, 'c'));
	console.log(Object.getOwnPropertyDescriptor(obj, symbol));
	console.log(Object.getOwnPropertyDescriptors(obj));
}

function Prototype() {
	const meta = { c: 3, d: 4 };
	const raw = { e: 5, f: 6 };

	const obj = {
		a: 1,
		b: () => {
			console.log('helloWorld');
		},
		__proto__: meta
	};

	console.log(Object.getPrototypeOf(obj));
	Object.setPrototypeOf(obj, raw);
	console.log(Object.getPrototypeOf(obj));
}

function GetAllProperty() {
	const obj = Object.prototype;
	const allProps = [];
	let curr = obj;
	do {
		const names = Object.getOwnPropertyNames(curr);
		const symbols = Object.getOwnPropertySymbols(curr);
		const props = names.concat(symbols);
		props.forEach((prop) => {
			if (allProps.indexOf(prop) === -1) {
				allProps.push(prop);
			}
		});
	} while ((curr = Object.getPrototypeOf(curr)));
	console.log(allProps);
}

function ObjectPrototypeMethods() {
	const array = [1, 2, 3];
	console.log(Object.prototype.isPrototypeOf.call(Array.prototype, array));
	console.log(Object.prototype.propertyIsEnumerable.call(array, '0'));
	console.log(Object.prototype.hasOwnProperty.call(array, '0'));
}

Assign();
KeyValueEntry();
SetProperty();
GetProperty();
Prototype();
GetAllProperty();
ObjectPrototypeMethods();
