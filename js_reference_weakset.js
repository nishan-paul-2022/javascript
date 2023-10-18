function SetExample() {
	const mySet = new Set();
	let obj = { a: 1 };
	mySet.add(obj);
	console.log(mySet);
	obj = null;
	console.log(mySet);
}

function WeakSetExample01() {
	const weakSet = new WeakSet();
	let obj = { message: 'Hello' };
	weakSet.add(obj);
	console.log(weakSet.has(obj));
	obj = null;
	console.log(weakSet.has(obj));
}

function WeakSetExample02() {
	const myWeakSet = new WeakSet();
	const obj = { name: 'Alice' };
	myWeakSet.add(obj);
	console.log(myWeakSet.has(obj));
	myWeakSet.delete(obj);
	console.log(myWeakSet.has(obj));
}

SetExample();
WeakSetExample01();
WeakSetExample02();

/* 
	Q: what is garbage-collection?
	A: when a value becomes non-reachable / non-referenced, memory will be de-allocated and value will be garbage-collected 
	   
	   usecase 01 / non-reachable :
	   every pointer is unique
	   so, if  pointer got replaced without backup, we lose it forever
	   and value will be non-reachable

	   usecase 02 / non-referenced :
       pointer exists from the declaration-statement to last-utilization-statement
	   after that value will be non-referenced

	   action :
	   so, javascript engine will identify and remove that value from memory (memory deallocation)
	   and value will be a garbage (garbage-collection)  

	Q: weakmap supports only reference-object to prevent memory leak, how so?
	A: setting a value against a reference-object, means : encrypt value using a dedicated unique password
	   only way to retrieve the value, using that password 
	   if we lose the password, value and password, both will be garbage-collected
	   so, no memory leak !

	Q: weakset supports only reference-object to prevent memory leak, how so?
	A: storing a reference-object in a weakset, means : putting a pointer in a locker 
	   only way to know if the pointer does exist in the locker, is to pass the exact pointer 
	   if we lose the pointer, value of the pointer will be garbage-collected
	   so, no memory leak !
*/
