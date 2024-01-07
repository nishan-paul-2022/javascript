function MyFunction1() {
	const myModule = import('./js_module.js');
	console.log(myModule.name); // undefined
}

async function MyFunction2() {
	const myModule = await import('./js_module.js');
	console.log(myModule.name);
}

MyFunction1();
await MyFunction2();
