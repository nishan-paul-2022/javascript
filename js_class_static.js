class Person {
	static ID;
	static character;
	static counter = 0;

	constructor(ID, character) {
		Person.counter++;
		this.ID = ID;
		this.character = character;
		Person.ID = ID * 2;
		Person.character = `hello, ${character}`;
	}

	getCounter() {
		console.log('number of instance :', Person.counter);
	}

	static print() {
		console.log(this.ID, this.character);
	}

	print() {
		console.log(this.ID, this.character);
	}
}

const user1 = new Person(10, 'Logan');
user1.getCounter();
user1.print();

const user2 = new Person(20, 'Bruce');
user2.getCounter();
user2.print();

const user3 = new Person(30, 'Robert');
user3.getCounter();
user3.print();

console.log('class name :', Person.name);
console.log(Person.counter);
Person.print();
