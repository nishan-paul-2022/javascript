// ownKeys : returns all own members
function print(objectName) {
	console.log('objectName :', objectName); // filter (enumerable, member, own, named + symbolic)

	console.log('{ ...objectName } :', { ...objectName }); // ownKeys, filter (enumerable, member, own, named + symbolic)

	console.log('Object.keys(objectName) :', Object.keys(objectName)); // ownKeys, filter (enumerable, member, own, named)

	// ownKeys, filter (non + enumerable, member, own, named)
	// ownKeys, filter (non + enumerable, member, own, symbolic)
	console.log(
		'getOwnProperty :',
		Object.getOwnPropertyNames(objectName).concat(
			Object.getOwnPropertySymbols(objectName)
		)
	);

	// ownKeys, filter (non + enumerable, member, own, named + symbolic)
	console.log(
		'getOwnPropertyDescriptors :',
		Object.getOwnPropertyDescriptors(objectName)
	);

	// ownKeys, filter (enumerable, member, own, named) [ object and prototype chain ]
	for (const i in objectName) {
		console.log(i, ':', objectName[i]);
	}

	console.log('\n');
}

function UseCase01() {
	let regular1 = {};
	regular1 = new Proxy(regular1, {
		ownKeys: (_target) => {
			return ['a', 'b', 'c'];
		}
	});
	print(regular1);
}

function UseCase02() {
	let regular1 = {};
	regular1 = new Proxy(regular1, {
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
	print(regular1);
}

UseCase01();
UseCase02();
