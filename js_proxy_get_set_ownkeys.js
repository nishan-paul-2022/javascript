// ownKeys : returns all own members
function print(object) {
	console.log('object :', object); // filter (enumerable, member, own, named + symbolic)

	console.log('{ ...object } :', { ...object }); // ownKeys, filter (enumerable, member, own, named + symbolic)

	console.log('Object.keys(object) :', Object.keys(object)); // ownKeys, filter (enumerable, member, own, named)

	// ownKeys, filter (non + enumerable, member, own, named)
	// ownKeys, filter (non + enumerable, member, own, symbolic)
	console.log(
		'getOwnProperty :',
		Object.getOwnPropertyNames(object).concat(
			Object.getOwnPropertySymbols(object)
		)
	);

	// ownKeys, filter (enumerable, member, own, named) [ object and prototype chain ]
	for (const i in object) {
		console.log(i, ':', object[i]);
	}
}

// regular1 and regular2 are interconnected in terms of setting-member, nothing else
// regular1 and regular2 don't behave in same way in terms of other characteristics
function Usecase01() {
	const regular1 = {
		name: 'paul',
		ID: 1604085,
		location: 'Dhaka'
	};

	const regular2 = new Proxy(regular1, {});
	regular2.ID = 1162036;
	regular2.skill = 'MERN';
	regular1.state = 'broken';

	console.log(regular2.name);
	console.log(regular2.ID);
	console.log(regular2.location);
	console.log(regular2.state);

	console.log(regular1.ID);
	console.log(regular1.skill);

	console.log(regular1 === regular2);
}

function Usecase02() {
	let numbers = [0, 1, 2, 3];
	numbers = new Proxy(numbers, {
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

	console.log(numbers[3]);
	console.log(numbers[4]);
	numbers[5] = 100;

	try {
		// numbers[6] = '200'; /* not a number */
		numbers.push('200'); /* not a number */
	} catch (error) {
		console.log(error.message);
	}

	console.log(numbers);
}

function Usecase03() {
	let regular = {
		name: 'paul',
		ID: 1604085,
		_location: 'Dhaka',
		[Symbol('hashing')]: 'helloWorld',
		__proto__: {
			year: 1999,
			_current: 'rebuilding'
		}
	};

	print(regular);

	regular = new Proxy(regular, {
		ownKeys: (target) => {
			const arr1 = Object.getOwnPropertyNames(target).filter((key) => {
				const isPrivate = key.startsWith('_');
				return !isPrivate;
			});
			const arr2 = Object.getOwnPropertySymbols(target);
			return arr1.concat(arr2);
		}
	});

	print(regular);
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
apply (target, thisArg, argList) */
