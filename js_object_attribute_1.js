function ObjectKey01() {
	class A {
		constructor() {
			this.name = 'paul';
		}

		PrintValues() {
			console.log(this.name, this.age);
		}

		get Name() {
			return this.name;
		}
	}

	const object = new A();

	console.log(object.Name);

	object.PrintValues();
	object.age = 27;
	object.PrintValues();

	console.log(object);
	object.height = 52;
	console.log(object);
}

/* 
2 kinds of key: string and symbol
any value or identifier used as key, will be coerced to string
square bracket notation demands value, can't be used with identifier
dot notation demands identifier, can't be used with value */
function ObjectKey02() {
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

	// console.log(object[id]); /* invalid syntax */
	console.log(object['id']);
	console.log(object.id);
}

function ObjectKey03() {
	const object = {
		[1]: 'hello',
		[true]: 'world',
		['title']: 'TDK'
		// [id]: "fear" /* invalid syntax */
	};

	console.log(object[1]);
	console.log(object['1']);

	console.log(object[true]);
	console.log(object['true']);

	console.log(object['title']);
	console.log(object.title);
}

function ObjectKey04() {
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

ObjectKey01();
ObjectKey02();
ObjectKey03();
ObjectKey04();
