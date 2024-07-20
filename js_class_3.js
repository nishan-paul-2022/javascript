class C01 {
	age = 10;
	height = 5.5;
	surname;
	weight;

	constructor(surname, weight) {
		this.surname = surname;
		this.weight = weight;
	}

	print() {
		console.log(this.age);
		console.log(this.height);
		console.log(this.surname);
		console.log(this.weight);
	}

	batman() {
		console.log('BRUCE WAYNE');
	}
}

class C02 extends C01 {
	age = 27;

	constructor(surname, weight) {
		super(surname, weight);
	}

	batman() {
		console.log('THE DARK KNIGHT');
	}

	superman() {
		super.batman();
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
	const instance = new C01('Logan', 67);
	instance.print();
	instance.batman();
}

function F02() {
	const instance = new C02('Bruce', 27);
	instance.print();
	instance.batman();
	instance.superman();
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
