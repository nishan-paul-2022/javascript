export class ExA {
	constructor(firstName, lastName, subValue, divValue, unChanged) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.subValue = subValue;
		this.divValue = divValue;
		this.unChanged = unChanged;
	}

	FullName() {
		const fullName = this.firstName + ' ' + this.lastName;
		console.log(fullName);
	}

	Calculate(x, y, z) {
		const sum = x + y + z;
		const sub = sum - this.subValue;
		const div = sub / this.divValue;
		const ans = div + this.unChanged;
		console.log(ans);
	}

	CalculateExcess(x, y, z, u, v, w, a, b, c) {
		const sum = x + y + z + u + v + w + a + b + c;
		const sub = sum - this.subValue;
		const div = sub / this.divValue;
		const ans = div + this.unChanged;
		console.log(ans);
	}

	Fn() {
		console.log('NO THIS' + ' ' + this + ' ' + typeof this);
	}
}

export class ExB {
	constructor(firstName, lastName, subValue, divValue, unChanged) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.subValue = subValue;
		this.divValue = divValue;
		this.unChanged = unChanged;
	}
}
