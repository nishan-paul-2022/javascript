function print(object) {
	console.log('object :', object);
	console.log('{ ...object } :', { ...object });
	console.log('Object.keys(object) :', Object.keys(object));

	console.log(
		'getOwnProperty :',
		Object.getOwnPropertyNames(object).concat(
			Object.getOwnPropertySymbols(object)
		)
	);

	console.log(
		'getOwnPropertyDescriptors :',
		Object.getOwnPropertyDescriptors(object)
	);

	for (const i in object) {
		console.log(i, ':', object[i]);
	}
}

function Usecase01() {
	let regular = {};
	regular = new Proxy(regular, {
		ownKeys: (_target) => {
			return ['a', 'b', 'c'];
		}
	});
	print(regular);
}

function Usecase02() {
	let regular = {};
	regular = new Proxy(regular, {
		ownKeys: (_target) => {
			return ['a', 'b', 'c'];
		},
		getOwnPropertyDescriptor: (_target, _prop) => {
			return {
				value: Math.random(),
				writable: true,
				enumerable: true,
				configurable: true
			};
		}
	});
	print(regular);
}

Usecase01();
Usecase02();
