function Constrcutor(message) {
	// undefined | null | '' | false | 0
	if (message) {
		console.log(message);
		return Math.random();
	}
	this.x = 'hello';
	this.y = 'World';
}

Constrcutor.staticMethod = () => {
	console.log('Aww! You make me proud son!!');
};

function UseCase01() {
	const value = Constrcutor('GO!');
	console.log(value);
}

function UseCase02() {
	const object = new Constrcutor();
	console.log(object.x);
	console.log(object.y);
	// object.staticMethod(); // invalid
}

UseCase01();
UseCase02();
Constrcutor.staticMethod();
