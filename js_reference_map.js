const myMap = new Map([
	[1, 2],
	[3, 4]
]);

const regualr1 = { a: 1, b: 2 };
const regualr2 = { a: 1, b: 2 };

console.log(myMap);
console.log(myMap.size);
myMap.clear();

myMap.set(Math.PI, 'value1');
myMap.set('batman', 'value2');
myMap.set(true, 'value3');
myMap.set(BigInt(27), 'value4');
myMap.set(regualr1, 'value4');

console.log(myMap.get(regualr1));
console.log(myMap.get(regualr2));
console.log(myMap.get(true));
console.log(myMap.has('key'));

myMap.delete(Math.PI);

console.log('\n for-of:');
for (const [key, value] of myMap) {
	console.log(key, value);
}

console.log('\n for-each:');
myMap.forEach((value, key) => {
	console.log(key, value);
});

const mapToArray = [...myMap];
console.log(mapToArray);

/*
USP of Map :
    - iterable 
    - size 
    - key can be any type 
    - keys are ordered on basis of insertion 
*/
