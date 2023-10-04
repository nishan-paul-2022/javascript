async function MyFunction() {
	const myModule = await import('./my-module.js');
	console.log(myModule.name);
}

await MyFunction();
console.log('async import is done');
