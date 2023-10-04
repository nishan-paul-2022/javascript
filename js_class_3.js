class C01 {
	age = 10;
	height = 5.5;
	surname;
	weight;

	constructor(surname, weight) {
		this.surname = surname;
		this.weight = weight;
	}

	PrinValues() {
		console.log(this.age);
		console.log(this.height);
		console.log(this.surname);
		console.log(this.weight);
	}

	Jawan() {
		console.log('SRK');
	}
}

class C02 extends C01 {
	age = 27;

	constructor(surname, weight) {
		super(surname, weight);
	}

	Jawan() {
		console.log('LAST OF THE STARS');
	}

	JawanOG() {
		super.Jawan();
		console.log(super.age); // does not mean anything
	}
}

function F01() {
	const c02 = new C02('paul', 53);
	c02.PrinValues();
	c02.Jawan();
	c02.JawanOG();
}

function F02() {
	const c01 = new C01('logan', 63);
	c01.PrinValues();
	c01.Jawan();
}

F01();
F02();
