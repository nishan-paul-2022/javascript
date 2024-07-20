function FunctionAndClass(message) {
	//  null | undefined | false | 0 | ''
	if (message) {
		console.log(message);
		const random = Math.random();
		return random;
	}

	this.x = 'hello';
	this.y = 120;
	this.z = true;
	this.print = function () {
		console.log(this.x, this.y, this.z);
	};
}

FunctionAndClass.method = () => {
	console.log('make me proud son');
};

function Usecase01() {
	const value = FunctionAndClass('hello, sir');
	console.log(value);
}

function Usecase02() {
	const value = new FunctionAndClass();
	console.log(value.x);
	console.log(value.y);
	console.log(value.z);
	value.print();
}

Usecase01();
Usecase02();
FunctionAndClass.method();
