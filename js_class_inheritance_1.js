class Profile1 {
	constructor(age, weight) {
		this.age = age;
		this.weight = weight;
	}

	name = 'paul';
	height = 5.5;
	movie = 'Batman Begins (2005)';

	batman() {
		console.log('DARK PRINCE OF GOTHAM');
	}

	print() {
		console.log(this.name);
		console.log(this.age);
		console.log(this.height);
		console.log(this.weight);
		console.log(this.movie);
	}
}

class Profile2 extends Profile1 {
	constructor(age, weight) {
		super(age, weight);
	}

	movie = 'The Batman (2022)';

	batman() {
		console.log('THE DARK KNIGHT');
	}

	title() {
		this.batman();
		super.batman();
		console.log(this.movie);
		console.log(super.movie); /* undefined */
	}
}

class StaticClass1 {
	static name = 'paul';
	static age = 27;

	static bankBalance(balance) {
		const value = balance * 1.1;
		this.balance = value.toPrecision(2);
		return this.balance;
	}
}

class StaticClass2 extends StaticClass1 {
	static age = 35;
	static weight = 70;
}

function F01() {
	const profile1 = new Profile1(27, 57);
	console.log(profile1.movie);
	profile1.batman();
	profile1.print();
}

function F02() {
	const profile2 = new Profile2(35, 70);
	console.log(profile2.movie);
	profile2.batman();
	profile2.print();
	profile2.title();
}

function F03() {
	console.log(StaticClass1.name);
	console.log(StaticClass1.age);
	console.log(StaticClass1.bankBalance(0.1));
}

function F04() {
	console.log(StaticClass2.name);
	console.log(StaticClass2.age);
	console.log(StaticClass2.weight);
	console.log(StaticClass2.bankBalance(10));
}

F01();
F02();
F03();
F04();

/* method and static-method can't be used as constructor */
