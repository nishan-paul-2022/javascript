const parent = {
	identity: 'boogeyman',
	print: (value) => {
		console.log(value);
	}
};

Object.defineProperties(parent, {
	location: {
		value: 'dhaka',
		writable: true,
		enumerable: false,
		configurable: false
	}
});

const child = {
	name: 'jhon wick',
	identity: Math.PI,
	__proto__: parent
};

function F01() {
	for (const i in child) {
		console.log(i, ':', child[i]);
	}
}

function F02() {
	child.print(child);
	console.log(Object.getOwnPropertyDescriptor(child, 'location'));

	child.location = 'Chittagong';

	child.print(child);
	console.log(Object.getOwnPropertyDescriptor(child, 'location'));
}

function F03() {
	F01();
	delete child.identity;
	F01();
}

F01();
F02();
F03();

/*
- console.log treats different types of object differently
- members of built-in prototype-object are non-enumerable 
- members of parent-object will maintain their descriptor in child-object 
- objects can be created using literal, function, constructor 
- literal, function : frozen
- constructor : not-frozen 
- delete works only for own-configurable-member
- child-object and parent-object may have property with same name 
- they will co-exist, but property from child-object will be utilized
*/
