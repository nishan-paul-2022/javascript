export class ExA {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	PrintFullName() {
		const fullName = this.firstName + ' ' + this.lastName;
		console.log(fullName);
		return fullName;
	}

	PrintAge() {
		console.log(this.age);
	}

	static Sma() {
		console.log(`FROM EXA - STATIC METHOD SMA()`);
	}
}

export class ExB {
	constructor() {
		this.PI = 3.1416;
	}

	static Smb() {
		console.log(`FROM EXB - STATIC METHOD SMB()`);
	}
}

function Add(x, y) {
	const sum = x + y;
	console.log(sum);
}

const fName = '__filename';
const dName = '__dirname';

export const members = { Add, fName, dName };
