function Func(obj) {
	const isE = Object.isExtensible(obj);
	const isS = Object.isSealed(obj);
	const isF = Object.isFrozen(obj);
	console.log(`isExtensible: ${isE}, isSealed: ${isS}, isFrozen: ${isF}`);
}

const obj = {
	name: 'jhon wick',
	age: 27,
	chapter: 4
};

obj.country = 'russia';
delete obj.chapter;
obj.name = 'Jhon Wick';
Func(obj);

Object.preventExtensions(obj);
// obj.height = 5.5; // can't add propery
Func(obj);

Object.seal(obj);
// delete obj.country; // for all properties -  configurable: false
Func(obj);

Object.freeze(obj);
// obj.age = 29; // for all properties - configurable: false and writable: false
Func(obj);

/*
Object.preventExtensions : Forbids the adding new properties to the object.
Object.seal : Forbids adding/removing of properties. Sets configurable: false for all existing properties.
Object.freeze : Forbids adding/removing/reassign of properties. Sets configurable: false and writable: false for all existing properties.

Object.isExtensible : Returns false if adding properties is forbidden, otherwise true.
Object.isSealed : Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
Object.isFrozen : Returns true if adding/removing/reassign properties is forbidden, and all current properties are configurable: false, writable: false.
*/
