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

function StringBehaviour() {
	const literal = 'hello';
	const object = new String('hello');
	CheckObject(literal);
	CheckObject(object);
	StringAutoPrototype(literal);
	StringAutoPrototype(object);
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
	console.log(greeting);
}

StringBehaviour();
TaggedTemplateLiteral();
