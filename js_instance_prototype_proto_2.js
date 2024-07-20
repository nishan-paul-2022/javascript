class AnimalClass {
	ID = '1162036';
}
AnimalClass.number = '1604085';
AnimalClass.prototype.location = 'Gotham';

class LionClass extends AnimalClass {}

// class TigerClass extends AnimalClass {}
class TigerClass {}
Object.setPrototypeOf(TigerClass, AnimalClass);
Object.setPrototypeOf(TigerClass.prototype, AnimalClass.prototype);
Object.defineProperties(
	TigerClass.prototype,
	Object.getOwnPropertyDescriptors(new AnimalClass())
);

const lionObject = new LionClass();
const tigerObject = new TigerClass();

function Inheritance() {
	const classList = [
		[
			['LionClass', LionClass],
			['lionObject', lionObject]
		],
		[
			['TigerClass', TigerClass],
			['tigerObject', tigerObject]
		]
	];

	for (const [[name1, v1], [name2, v2]] of classList) {
		console.log('-new-chapter-');
		console.log(`members of ${name1} :`, Object.getOwnPropertyNames(v1));
		console.log(`members of ${name2} :`, Object.getOwnPropertyNames(v2));
		console.log(`${name2}.ID :`, v2.ID);
		console.log(`${name1}.number :`, v1.number);
		console.log(`${name1}.prototype.location :`, v1.prototype.location);
		console.log(`${name1}.prototype.ID :`, v1.prototype.ID);
	}
}

/*
proto-chain of LionClass : AnimalClass => Function.prototype => Object.prototype
constructor-chain of LionClass : Function => Object */
function LionClassChain() {
	console.log(
		'Object.getPrototypeOf(LionClass) === AnimalClass',
		Object.getPrototypeOf(LionClass) === AnimalClass
	);
	console.log(
		'Object.getPrototypeOf(AnimalClass) === Function.prototype',
		Object.getPrototypeOf(AnimalClass) === Function.prototype
	);
	console.log(
		'Object.getPrototypeOf(Function.prototype) === Object.prototype',
		Object.getPrototypeOf(Function.prototype) === Object.prototype
	);

	console.log('LionClass instanceof Function', LionClass instanceof Function);
	console.log('LionClass instanceof Object', LionClass instanceof Object);
}

/*
proto-chain of TigerClass : AnimalClass => Function.prototype => Object.prototype
constructor-chain of TigerClass : Function => Object */
function TigerClassChain() {
	console.log(
		'Object.getPrototypeOf(TigerClass) === AnimalClass',
		Object.getPrototypeOf(TigerClass) === AnimalClass
	);
	console.log(
		'Object.getPrototypeOf(AnimalClass) === Function.prototype',
		Object.getPrototypeOf(AnimalClass) === Function.prototype
	);
	console.log(
		'Object.getPrototypeOf(Function.prototype) === Object.prototype',
		Object.getPrototypeOf(Function.prototype) === Object.prototype
	);

	console.log(
		'TigerClass instanceof Function',
		TigerClass instanceof Function
	);
	console.log('TigerClass instanceof Object', TigerClass instanceof Object);
}

/* proto-chain of lionObject : LionClass.prototype => AnimalClass.prototype => Grand.prototype => Object.prototype */
function LionObjectChain() {
	console.log(
		'Object.getPrototypeOf(lionObject) === LionClass.prototype',
		Object.getPrototypeOf(lionObject) === LionClass.prototype
	);
	console.log(
		'Object.getPrototypeOf(LionClass.prototype) === AnimalClass.prototype',
		Object.getPrototypeOf(LionClass.prototype) === AnimalClass.prototype
	);
	console.log(
		'Object.getPrototypeOf(AnimalClass.prototype) === Object.prototype',
		Object.getPrototypeOf(AnimalClass.prototype) === Object.prototype
	);

	console.log(
		'lionObject instanceof LionClass',
		lionObject instanceof LionClass
	);
	console.log(
		'lionObject instanceof AnimalClass',
		lionObject instanceof AnimalClass
	);
	console.log('lionObject instanceof Object', lionObject instanceof Object);
}

/* proto-chain of tigerObject : TigerClass.prototype => AnimalClass.prototype => Object.prototype */
function TigerObjectChain() {
	console.log(
		'Object.getPrototypeOf(tigerObject) === TigerClass.prototype :',
		Object.getPrototypeOf(tigerObject) === TigerClass.prototype
	);
	console.log(
		'Object.getPrototypeOf(TigerClass.prototype) === AnimalClass.prototype :',
		Object.getPrototypeOf(TigerClass.prototype) === AnimalClass.prototype
	);
	console.log(
		'Object.getPrototypeOf(AnimalClass.prototype) === Object.prototype :',
		Object.getPrototypeOf(AnimalClass.prototype) === Object.prototype
	);

	console.log(
		'tigerObject instanceof TigerClass :',
		tigerObject instanceof TigerClass
	);
	console.log(
		'tigerObject instanceof AnimalClass :',
		tigerObject instanceof AnimalClass
	);
	console.log(
		'tigerObject instanceof Object :',
		tigerObject instanceof Object
	);
}

Inheritance();

LionClassChain(); /* Function => Object */
TigerClassChain(); /* Function => Object */

LionObjectChain(); /* LionClass.prototype => AnimalClass.prototype => Object.prototype */
TigerObjectChain(); /* TigerClass.prototype => AnimalClass.prototype => Object.prototype */
