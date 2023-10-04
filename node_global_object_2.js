const x = 15;
global.x = 17;

function _random() {
	console.log(Math.E);
}

function UseCase01() {
	console.log(x);
	console.log(global.x);
}

function UseCase02() {
	const x = 18;
	console.log(x);
	console.log(global.x);
}

function _UseCase03() {
	global._random();
}

UseCase01();
UseCase02();
// UseCase03(); // invalid
