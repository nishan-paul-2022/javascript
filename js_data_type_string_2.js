function CheckObject(str) {
	const isE = Object.isExtensible(str);
	const isS = Object.isSealed(str);
	const isF = Object.isFrozen(str);
	console.log(`isExtensible: ${isE}, isSealed: ${isS}, isFrozen: ${isF}`);
}

function StringAutoPrototype(str) {
	console.log(Object.getPrototypeOf(str));
	console.log(Object.getPrototypeOf(str) === String.prototype);
	console.log(str);
}

function StringManualPrototype(str) {
	const parent = { identity: 'parent object' };
	Object.setPrototypeOf(str, parent);
	console.log(Object.getPrototypeOf(str));
	console.log(Object.getPrototypeOf(str) === parent);
	console.log(str);
}

function StringBehaviour1() {
	const literal = 'hello';
	const object = new String('hello');
	CheckObject(literal);
	CheckObject(object);
}

function StringBehaviour2() {
	const literal = 'hello';
	const object = new String('hello');
	StringAutoPrototype(literal);
	StringAutoPrototype(object);
}

function StringBehaviour3() {
	const literal = 'hello';
	const object = new String('hello');
	StringManualPrototype(literal);
	StringManualPrototype(object);
}

function TaggedTemplateLiteral() {
	const myName = 'Alice';
	const myAge = 30;
	const highLight = (strings, name, age) => {
		console.log(strings, name, age);
	};
	const greeting = highLight`My name is ${myName} and I am ${myAge} years old.`;
	console.log(greeting); // undefined
}

function UnicodeCharacter() {
	console.log('\x41');
	console.log('\u{41}');
	console.log('\u{1F604}');
	console.log('\u{1F449}');
}

StringBehaviour1();
StringBehaviour2();
StringBehaviour3();

TaggedTemplateLiteral();

UnicodeCharacter();
