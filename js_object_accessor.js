function Person(firstName, lastName) {
	let _firstName = firstName;
	let _lastName = lastName;

	Object.defineProperties(this, {
		firstName: {
			get: function () {
				return _firstName;
			},
			set: function (newFirstName) {
				_firstName = newFirstName;
			}
		},
		lastName: {
			get: function () {
				return _lastName;
			},
			set: function (newLastName) {
				_lastName = newLastName;
			}
		},
		fullName: {
			get: function () {
				const name = `${_firstName} ${_lastName}`;
				return name;
			}
		}
	});
}

function User(name, birthday) {
	this.name = name;
	this.birthday = birthday;

	Object.defineProperties(this, {
		age: {
			get() {
				const todayYear = new Date().getFullYear();
				return todayYear - this.birthday.getFullYear();
			}
		}
	});
}

function Usecase01() {
	const person = new Person('Logan', 'Paul');

	console.log(person.fullName);

	person.firstName = 'Jhon';
	person.lastName = 'Wick';

	console.log(person.firstName);
	console.log(person.lastName);
	console.log(person.fullName);
}

function Usecase02() {
	const user = new User('John', new Date(1992, 6, 1));

	console.log(user.name);
	console.log(user.birthday);
	console.log(user.age);
}

Usecase01();
Usecase02();

/*
after we make an object non-configuarable, 
	- we can change the value of writable from true to false (not vice-versa)
	- we can't change the value of enumerable  
	- we can't change the value of configuarable

writable is irrelevant for accessor */
