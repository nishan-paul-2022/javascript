export function add(a, b) {
	return a + b;
}

async function UseCase() {
	console.log('UseCase-01');
}

/* top-level-await is allowed in ES module */
await UseCase();

const executor = (resolve) => {
	resolve('hello');
};
const promise = new Promise(executor);
const resolve = await promise;
console.log(resolve);
