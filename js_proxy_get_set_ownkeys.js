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

	// ownKeys, filter (enumerable, member, own, named) [ object and prototype chain ]
	for (const i in objectName) {
		console.log(i, ':', objectName[i]);
	}

	console.log('\n');
}

// regular1 and regular2 are interconnected in terms of setting-member, nothing else
// regular1 and regular2 don't behave in same way in terms of other characteristics
function Usecase01() {
	const regular1 = {
		name: 'Paul',
		id: 1604085,
		location: 'Dhaka'
	};

	const regular2 = new Proxy(regular1, {});
	regular2.id = 1162036;
	regular2.skill = 'MERN';
	regular1.state = 'broken';

	console.log(regular2.name);
	console.log(regular2.id);
	console.log(regular2.location);
	console.log(regular2.state);

	console.log(regular1.id);
	console.log(regular1.skill);

	console.log(regular1 === regular2);
}

function Usecase02() {
	let numbers1 = [0, 1, 2, 3];
	numbers1 = new Proxy(numbers1, {
		get: (target, prop) => {
			if (prop in target) {
				return target[prop];
			} else {
				return 'invalid index';
			}
		},
		set: (target, prop, value) => {
			if (typeof value === 'number') {
				target[prop] = value;
				return true;
			} else {
				console.log('not a number');
				return false;
			}
		}
	});

	console.log(numbers1[3]);
	console.log(numbers1[4]);
	numbers1[5] = 100;

	try {
		// numbers1[6] = '200'; // not a number
		numbers1.push('200'); // not a number
	} catch (error) {
		console.log(error.message);
	}

	console.log(numbers1);
}

function Usecase03() {
	let regular1 = {
		name: 'Paul',
		id: 1604085,
		_location: 'Dhaka',
		[Symbol('hashing')]: 'helloWorld',
		__proto__: {
			year: 1999,
			_current: 'rebuilding'
		}
	};

	print(regular1);

	regular1 = new Proxy(regular1, {
		ownKeys: (target) => {
			const arr1 = Object.getOwnPropertyNames(target).filter((key) => {
				const isPrivate = key.startsWith('_');
				return !isPrivate;
			});
			const arr2 = Object.getOwnPropertySymbols(target);
			return arr1.concat(arr2);
		}
	});

	print(regular1);
}

Usecase01();
Usecase02();
Usecase03();

/*
@Internal Method		@Handler Method				@Triggers when

[[Get]]					get							reading a property
[[Set]]					set							writing to a property
[[HasProperty]]			has							in operator
[[Delete]]				deleteProperty				delete operator
[[Call]]				apply						function call
[[Construct]]			construct					new operator
[[GetPrototypeOf]]		getPrototypeOf				Object.getPrototypeOf
[[SetPrototypeOf]]		setPrototypeOf				Object.setPrototypeOf
[[IsExtensible]]		isExtensible				Object.isExtensible
[[PreventExtensions]]	preventExtensions			Object.preventExtensions
[[DefineOwnProperty]]	defineProperty				Object.defineProperty, Object.defineProperties
[[GetOwnProperty]]		getOwnPropertyDescriptor	Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries
[[OwnPropertyKeys]]		ownKeys						Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object.keys/values/entries

get (target, prop)
set (target, prop, value) 
ownKeys (target)
defineProperty (target, prop) 
deleteProperty (target, prop)
getOwnPropertyDescriptor
has (target, prop) 
apply (target, thisArg, argList)
*/
