class C01 {
	age = 10;
	height = 5.5;
	surname: string;
	weight;

	constructor(surname: string, weight: number) {
		this.surname = surname;
		this.weight = weight;
	}

	PrinValues(): void {
		console.log(this.age);
		console.log(this.height);
		console.log(this.surname);
		console.log(this.weight);
	}

	Jawan(): void {
		console.log('SRK');
	}
}

class C02 extends C01 {
	age: number = 27;

	constructor(surname: string, weight: number) {
		super(surname, weight);
	}

	Jawan(): void {
		console.log('LAST OF THE STARS');
	}

	JawanOG(): void {
		super.Jawan();
	}

	PrintAge() {
		console.log(this.age);
		// console.log(super.age); // does not mean anything
	}
}

function F01() {
	const c01 = new C01('logan', 63);
	c01.Jawan();

	const c02 = new C02('paul', 53);
	c02.PrinValues();
	c02.Jawan();
	c02.JawanOG();
	c02.PrintAge();
}

F01();
