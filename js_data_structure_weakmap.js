// variable => type cohesion (string) => assign to attribute => value is used as attribute
function ObjectExample() {
	const userObject1 = { name: 'Bruce Wayne' }; // v1
	const userObject2 = { name: 'Bruce Wayne' }; // v1
	const userObject3 = userObject1; // v1

	const userRegularObject = { [userObject1]: 1 }; // v1

	console.log(userRegularObject);
	console.log(userRegularObject[userObject1]); // v1
	console.log(userRegularObject[userObject2]); // v1
	console.log(userRegularObject[userObject3]); // v1
}

// variable => assign to attribute =>
// pointer is used as attribute (reference-variable) | value is used as attribute (primitive-variable)
function MapExample() {
	const userObject1 = { name: 'Bruce Wayne' }; // p1
	const userObject2 = { name: 'Bruce Wayne' }; // p2
	const userObject3 = userObject1; // p1

	const userMap = new Map();
	userMap.set(userObject1, 'Gotham City'); // p1

	console.log(userMap);
	console.log(userMap.get(userObject1)); // p1
	console.log(userMap.get(userObject2)); // p2
	console.log(userMap.get(userObject3)); // p1
}

// reference-variable => assign to attribute => pointer is used as attribute
function WeakMapExample01() {
	const userObject1 = { name: 'Bruce Wayne' }; // p1
	const userObject2 = { name: 'Bruce Wayne' }; // p2
	const userObject3 = userObject1; // p1

	const userWeakMap = new WeakMap();
	userWeakMap.set(userObject1, 'Gotham City');

	console.log(userWeakMap.get(userObject1)); // p1
	console.log(userWeakMap.get(userObject2)); // p2
	console.log(userWeakMap.get(userObject3)); // p1

	// no result
	console.log(userWeakMap);
	console.log(userWeakMap.size);
	console.log(Object.keys(userWeakMap));
	console.log(Object.getOwnPropertyNames(userWeakMap));
}

function WeakMapExample02() {
	const userWeakMap = new WeakMap();

	let userObject1 = { name: 'Bruce Wayne' }; // p1
	const userObject2 = { name: 'Bruce Wayne' }; // p2
	const userObject3 = userObject1; // p1

	userWeakMap.set(userObject1, 'Gotham City');

	userObject1 = null; // p3

	console.log(userWeakMap.get(userObject1)); // p3
	console.log(userWeakMap.get(userObject2)); // p2
	console.log(userWeakMap.get(userObject3)); // p1
}

ObjectExample();
MapExample();
WeakMapExample01();
WeakMapExample02();
