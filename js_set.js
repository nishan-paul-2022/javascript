const mySet = new Set([1, 2, 3]);
console.log(mySet);
console.log(mySet.size);
mySet.clear();

mySet.add('mango');
mySet.add('apple');
mySet.add('banana');
mySet.add('cherry');
mySet.add('pineapple');

console.log(mySet.has('banana'));
mySet.delete('banana');

console.log('\n for-of:');
for (const i of mySet) {
	console.log(i);
}

console.log('\n for-each:');
mySet.forEach((value) => {
	console.log(value);
});

const setToArray = [...mySet];
console.log('\n SET TO ARRAY:', setToArray);
