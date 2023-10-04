/* eslint-disable @typescript-eslint/no-explicit-any */

abstract class C01 {
	age = 10;
	height = 5.5;
	surname: string;
	weight;

	constructor(surname: string, weight: number) {
		this.surname = surname;
		this.weight = weight;
	}

	abstract CalculateWeight(extraWeight: any, location: number): void;

	abstract CalculateNothing(extraWeight: number, location?: any): void;

	abstract CalculateAnything(): void;
}

class C02 extends C01 {
	age: number = 27;

	constructor(surname: string, weight: number) {
		super(surname, weight);
	}

	CalculateWeight(
		extraWeight: number,
		location: string | number,
		value?: number
	): any {
		if (location !== undefined && value !== undefined) {
			console.log(extraWeight, location, value);
		} else {
			this.weight += extraWeight;
			console.log(this.weight);
		}
		return 'OK';
	}

	CalculateNothing(extraWeight: number | string, location: string): any {
		if (location !== undefined) {
			console.log(extraWeight, location);
		} else {
			this.weight += extraWeight as number;
			console.log(this.weight);
		}
		return 'OK';
	}

	CalculateAnything(value?: number): void {
		console.log(value);
	}

	ExampleOfOverload1(message: string): void;
	ExampleOfOverload1(message: string, value: number): string;
	ExampleOfOverload1(message: string, value?: number): void | string {
		if (value === undefined) {
			console.log(message);
		} else {
			console.log(message, value);
			return 'OVERLOAD';
		}
	}
}

function F01() {
	const c02 = new C02('paul', 53);
	console.log(c02.CalculateWeight(7, 'hello'));
	console.log(c02.CalculateWeight(7, 'RUNNING WITH KING KHAN', 27));
	console.log(c02.CalculateNothing(7, 'PATHAN'));
	console.log(c02.CalculateWeight(7, 'SRK', 2.17));
	console.log(c02.ExampleOfOverload1('message'));
	console.log(c02.ExampleOfOverload1('message', Math.E));
}

F01();
