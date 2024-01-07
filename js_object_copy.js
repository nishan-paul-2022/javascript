const grandparent = { origin: 'grandparent' };
const parent = { identity: 'parent' };
const child = { name: 'child' };
const grandChild = {};

Object.defineProperties(parent, {
	nature: {
		value: 'Alpha',
		writable: false,
		enumerable: false,
		configurable: false
	}
});

Object.defineProperties(child, {
	age: {
		value: () => {
			console.log(Math.E);
		},
		writable: false,
		enumerable: true,
		configurable: false
	},
	height: {
		get: () => {
			return child.name;
		},
		set: (name) => {
			child.name = name;
		},
		enumerable: false,
		configurable: true
	},
	[Symbol('symbol')]: {
		value: Math.PI,
		writable: true,
		enumerable: true,
		configurable: true
	}
});

Object.setPrototypeOf(parent, grandparent);
Object.setPrototypeOf(child, parent);

function print(message, objectName) {
	console.log('\n' + message);
	console.log('getPrototypeOf:', Object.getPrototypeOf(objectName));
	console.log(
		'getOwnPropertyDescriptors:',
		Object.getOwnPropertyDescriptors(objectName)
	);
}

function CopyObjectByLoop(objectName) {
	const copied = {};
	for (const key in objectName) {
		copied[key] = objectName[key];
	}
	return copied;
}

function OriginalObject() {
	console.log('keys:', Object.keys(child));
	console.log('getOwnPropertyNames:', Object.getOwnPropertyNames(child));
	console.log('getOwnPropertySymbols:', Object.getOwnPropertySymbols(child));
	console.log(
		'getOwnPropertyDescriptors:',
		Object.getOwnPropertyDescriptors(child)
	);
	console.log('getPrototypeOf:', Object.getPrototypeOf(child));
	console.log('child:', child);
	console.log('inherited-member from grandparent (child):', child.origin);
	console.log('inherited-member from parent (child):', child.identity);
	console.log(
		'inherited-non-enumerable-member from parent (child):',
		child.nature
	);
}

// Using a Loop
function CopyByLoop() {
	const byLoop = CopyObjectByLoop(child);
	print('byLoop', byLoop);
}

// Using Spread Operator
function CopyBySpread() {
	const bySpread = { ...child };
	print('bySpread', bySpread);
}

// Using Object Spread Properties (ECMAScript 2018)
function CopyByRest() {
	const { ...byRest } = child;
	print('byRest', byRest);
}

// Using Object.assign()
function CopyByAssign() {
	const byAssign = Object.assign({}, child);
	print('byAssign', byAssign);
}

// Using Object.fromEntries() (ECMAScript 2019)
function CopyByFromEntries() {
	const byFromEntries = Object.fromEntries(Object.entries(child));
	print('byFromEntries', byFromEntries);
}

// Using JSON.parse() and JSON.stringify()
function CopyByJSON() {
	const byJSON = JSON.parse(JSON.stringify(child));
	print('byJSON', byJSON);
}

// Using Object.create()
function CopyByCreate01() {
	const byCreate = Object.create(child);
	print('byCreate', byCreate);
}

// Using Object.create()
function CopyByCreate02() {
	const byCreate = Object.create(child, {
		a: { value: 1 },
		b: { value: 2, writable: true, enumerable: false, configurable: true }
	});
	print('byCreate', byCreate);
}

// Using Object.create()
function CopyByCreate03() {
	const byCreate = Object.create(
		Object.getPrototypeOf(child),
		Object.getOwnPropertyDescriptors(child)
	);
	print('byCreate', byCreate);
}

function ModByDefineProperties() {
	Object.defineProperties(
		grandChild,
		Object.getOwnPropertyDescriptors(child)
	);
	print('ModByDefineProperties', grandChild);
}

OriginalObject();
CopyByLoop();
CopyBySpread();
CopyByRest();
CopyByAssign();
CopyByFromEntries();
CopyByJSON();
CopyByCreate01();
CopyByCreate02();
CopyByCreate03();
ModByDefineProperties();

/* 
OBJECT COPY //

for-loop-in 				: 	enumerable, 		member, 	own + inherited,	named
spread, rest, assign, log 	: 	enumerable, 		member, 	own,				named + symbolic
keys, values, entries 		: 	enumerable, 		member, 	own, 				named
json						: 	enumerable, 		property, 	own, 				named
getOwnPropertyNames			:	non + enumerable, 	member, 	own,				named
getOwnPropertySymbols		:	non + enumerable, 	member, 	own,				symbolic
getOwnPropertyDescriptors	: 	non + enumerable, 	member, 	own, 				named + symbolic
create() 					: 	set prototype and member-with-descriptor

descriptor is by default false [ create() ] and true [ literal, for-loop-in, spread, rest, assign, json ]
enumerable means recognized by for-loop-in, spread, rest, assign, json
inheritance doesn't depend upon value of enumerable flag */
