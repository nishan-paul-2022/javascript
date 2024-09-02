class Person {
	static counter = 0;
	static ID;
	static fullName;

	constructor(ID, fullName) {
		this.ID = ID;
		this.fullName = fullName;

		Person.counter++;
		Person.ID = ID * 2;
		Person.fullName = `Mr. ${fullName}`;
	}

	numberOfInstance() {
		console.log('number of instance :', Person.counter);
	}

	static print() {
		console.log(this.ID, this.fullName);
	}

	print() {
		console.log(this.ID, this.fullName);
	}
}

const user1 = new Person(10, 'Logan');
user1.numberOfInstance();
user1.print();

const user2 = new Person(20, 'Bruce');
user2.numberOfInstance();
user2.print();

const user3 = new Person(30, 'Robert');
user3.numberOfInstance();
user3.print();

console.log('class name :', Person.name);
console.log(Person.counter);
Person.print();
