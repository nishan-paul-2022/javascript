function ObjectKey0() {
	class A {
		constructor() {
			this.name = 'paul';
			this.height = 5.5;
		}

		PrintValues() {
			console.log(this.name);
			console.log(this.age);
		}

		get Name() {
			return this.name;
		}
	}

	const object = new A();
	object.weight = 52;
	console.log(object.Name);
	object.PrintValues();
	object.age = 27;
	object.PrintValues();
}

// two types of key: string and symbol
// any value or identifier used as key, will be coerced to string
// square bracket notation demands value, can't be used with identifier
// dot notation demands identifier, can't be used with value
function ObjectKey1() {
	const object = {
		1: 'hello',
		true: 'world',
		title: 'TDK',
		id: 'fear'
	};

	console.log(object[1]);
	console.log(object['1']);

	console.log(object[true]);
	console.log(object['true']);

	console.log(object['title']);
	console.log(object.title);

	// console.log(object[id]); // invalid syntax
	console.log(object['id']);
	console.log(object.id);
}

function ObjectKey2() {
	const object = {
		[1]: 'hello',
		[true]: 'world',
		['title']: 'TDK'
		// [id]: "fear" // invalid syntax
	};

	console.log(object[1]);
	console.log(object['1']);

	console.log(object[true]);
	console.log(object['true']);

	console.log(object['title']);
	console.log(object.title);
}

function ObjectKey3() {
	const ageKey = 'age';
	const object1 = {
		ageKey: 27 // ageKey as string
	};
	const object2 = {
		[ageKey]: 27 // ageKey as variable
	};

	console.log(object1.age); // undefined
	console.log(object1['age']); // undefined
	console.log(object1.ageKey);
	console.log(object1['ageKey']);

	console.log(object2.age);
	console.log(object2['age']);
	console.log(object2.ageKey); // undefined
	console.log(object2['ageKey']); // undefined
}

ObjectKey0();
ObjectKey1();
ObjectKey2();
ObjectKey3();

// value
// varaible
// identifer
// key
