function CheckObject(str) {
	const isE = Object.isExtensible(str);
	const isS = Object.isSealed(str);
	const isF = Object.isFrozen(str);
	console.log(`isExtensible: ${isE}, isSealed: ${isS}, isFrozen: ${isF}`);
}

function AutoPrototype(str) {
	console.log(Object.getPrototypeOf(str));
	console.log(Object.getPrototypeOf(str) === String.prototype);
	console.log(str);
}

function ManualPrototype(str) {
	const parent = { identity: 'parent object' };
	Object.setPrototypeOf(str, parent);
	console.log(Object.getPrototypeOf(str));
	console.log(Object.getPrototypeOf(str) === parent);
	console.log(str);
}

function BehaviourCheckObject(strLiteral, strInstance) {
	CheckObject(strLiteral);
	CheckObject(strInstance);
}

function BehaviourAutoPrototype(strLiteral, strInstance) {
	AutoPrototype(strLiteral);
	AutoPrototype(strInstance);
}

function BehaviourManualPrototype(strLiteral, strInstance) {
	ManualPrototype(strLiteral);
	ManualPrototype(strInstance);
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

const strLiteral = 'hello';
const strInstance = new String('hello');

BehaviourCheckObject(strLiteral, strInstance);
BehaviourAutoPrototype(strLiteral, strInstance);
BehaviourManualPrototype(strLiteral, strInstance);
TaggedTemplateLiteral();
UnicodeCharacter();
