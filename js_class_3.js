class C01 {
	age = 10;
	height = 5.5;
	surname;
	weight;

	constructor(surname, weight) {
		this.surname = surname;
		this.weight = weight;
	}

	Print() {
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

	Pathan() {
		super.Jawan();
		console.log(super.age); /* does not mean anything */
	}
}

class Class1 {
	static name1 = 'name1';

	static name2() {
		this.name3 = 'name3';
		return this.name3;
	}
}

class Class2 extends Class1 {
	static name4 = 'name4';
}

function F01() {
	const c02 = new C02('Paul', 53);
	c02.Print();
	c02.Jawan();
	c02.Pathan();
}

function F02() {
	const c01 = new C01('Logan', 63);
	c01.Print();
	c01.Jawan();
}

function F03() {
	console.log(Class2.name1);
	console.log(Class2.name2());
	console.log(Class2.name3);
	console.log(Class2.name4);
}

F01();
F02();
F03();

/* method and static-method can't be used as constructor */
