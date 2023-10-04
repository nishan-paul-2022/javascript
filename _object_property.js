// Object constructor function
function Person(firstName, lastName) {
	// Private variables (closure)
	let _firstName = firstName;
	let _lastName = lastName;

	// Define the getter for the full name
	Object.defineProperty(this, 'fullName', {
		get: function () {
			return _firstName + ' ' + _lastName;
		}
	});

	// Define the getter and setter for the first name
	Object.defineProperty(this, 'firstName', {
		get: function () {
			return _firstName;
		},
		set: function (newFirstName) {
			if (
				typeof newFirstName === 'string' &&
				newFirstName.trim() !== ''
			) {
				_firstName = newFirstName.trim();
			} else {
				console.error('Invalid first name.');
			}
		}
	});

	// Define the getter and setter for the last name
	Object.defineProperty(this, 'lastName', {
		get: function () {
			return _lastName;
		},
		set: function (newLastName) {
			if (typeof newLastName === 'string' && newLastName.trim() !== '') {
				_lastName = newLastName.trim();
			} else {
				console.error('Invalid last name.');
			}
		}
	});
}

// Create a new Person object
const person = new Person('John', 'Doe');

// Get the full name using the getter property
console.log(person.fullName); // Output: "John Doe"

// Change the first name using the setter property
person.firstName = 'Jane';

// Get the updated full name
console.log(person.fullName); // Output: "Jane Doe"
