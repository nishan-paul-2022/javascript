const parent = {
	identity: 'batMan',
	tag: () => {
		console.log('parent');
	}
};

Object.defineProperties(parent, {
	location: {
		value: 'dhaka',
		writable: true,
		enumerable: false,
		configurable: false
	},
	print: {
		value: (value) => {
			console.log(value);
		},
		writable: true,
		enumerable: true,
		configurable: true
	}
});

const child = {
	PI: Math.PI,
	identity: 'ironMan',
	tag: () => {
		console.log('child');
	},
	__proto__: parent
};

function Iteration(object) {
	for (const i in object) {
		console.log(i, object[i]);
	}
	console.log(object);
}

function Add() {
	child.location = 'Chittagong';
	console.log(child);
	console.log(Object.getOwnPropertyDescriptor(child, 'location'));
}

function Delete() {
	delete child.PI;
	delete child.identity;
	delete child.print;
	Iteration(child);
}

Iteration(parent);
Iteration(child);
Add();
Delete();

/*
- console.log treats different types of object differently
- members of built-in prototype-object are non-enumerable 
- members of parent-object will maintain their descriptor in child-object 
- delete works only for own-configurable-member
- child-object and parent-object may have property with same name, both co-exists but property from child-object overrides */
