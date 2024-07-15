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

function Usecase01() {
	const value = Constrcutor('GO!');
	console.log(value);
}

function Usecase02() {
	const object = new Constrcutor();
	console.log(object.x);
	console.log(object.y);
	// object.staticMethod(); /* invalid */
}

Usecase01();
Usecase02();
Constrcutor.staticMethod();
