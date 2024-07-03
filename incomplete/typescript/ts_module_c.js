export function add(a, b) {
	return a + b;
}

async function UseCase() {
	console.log('UseCase-01');
}

await UseCase();

const executor = (resolve) => {
	resolve('helloWorld');
};

const promise = new Promise(executor);
const resolveValue = await promise;
console.log(resolveValue);

/* top-level-await is allowed in ES module */
