abstract class C01 {
	age = 10;
	height = 5.5;
	surname: string;
	weight;

	constructor(surname: string, weight: number) {
		this.surname = surname;
		this.weight = weight;
	}

	abstract CalculateWeight(extraWeight: number): void;

	abstract CalculateAge(extraNumber: number): boolean;

	Jawan(value: number): string {
		console.log('SRK');
		console.log(value);
		return 'OK';
	}
}

class C02 extends C01 {
	age: number = 27;

	constructor(surname: string, weight: number) {
		super(surname, weight);
	}

	CalculateWeight(extraWeight: number): string {
		this.weight += extraWeight;
		console.log(this.weight);
		return 'hello';
	}

	CalculateAge(extraAge: number): boolean {
		this.age += extraAge;
		console.log(this.age);
		return true;
	}

	Jawan(value: number | string): string {
		super.Jawan(12);
		console.log('KING');
		console.log(value);
		return 'FINE';
	}
}

function F01() {
	const c02 = new C02('paul', 53);
	c02.CalculateWeight(7);
	c02.CalculateAge(5);
	c02.Jawan('15');
}

F01();
