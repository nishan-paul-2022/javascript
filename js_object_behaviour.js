function CheckObject(obj) {
	const isE = Object.isExtensible(obj);
	const isS = Object.isSealed(obj);
	const isF = Object.isFrozen(obj);
	console.log(`isExtensible: ${isE}, isSealed: ${isS}, isFrozen: ${isF}`);
}

function SetObjectBehaviour() {
	const obj = {
		name: 'jhon wick',
		age: 27,
		chapter: 4
	};

	obj.country = 'russia';
	delete obj.chapter;
	obj.name = 'Jhon Wick';
	CheckObject(obj);

	/* can't add propery */
	Object.preventExtensions(obj);
	// obj.height = 5.5;
	CheckObject(obj);

	/* configurable: false */
	Object.seal(obj);
	// delete obj.country;
	CheckObject(obj);

	/* configurable: false | writable: false [ for all own-properties ] */
	Object.freeze(obj);
	// obj.age = 29;
	CheckObject(obj);
}

SetObjectBehaviour();

/*
Object.preventExtensions : Forbids adding new properties to the object.
Object.seal : Forbids adding/removing of properties. Sets configurable: false for all existing properties.
Object.freeze : Forbids adding/removing/reassign of properties. Sets configurable: false and writable: false for all existing properties.

Object.isExtensible : Returns false if adding properties is forbidden, otherwise true.
Object.isSealed : Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
Object.isFrozen : Returns true if adding/removing/reassign properties is forbidden, and all current properties are configurable: false, writable: false. */
