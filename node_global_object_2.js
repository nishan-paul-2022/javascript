const x = 15;
global.x = 16;
const y = 17;
global.z = 18;

function random() {
	console.log(Math.random());
}

function UseCase01() {
	console.log(x);
	console.log(global.x);
	console.log(y);
	console.log(global.z);
	random();
}

function UseCase02() {
	const x = 19;
	console.log(x);
	console.log(global.x);
}

function UseCase03() {
	// console.log(z); // not defined
	// global._random(); // not method
}

UseCase01();
UseCase02();
UseCase03();
