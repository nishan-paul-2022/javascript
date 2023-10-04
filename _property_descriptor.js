const person = {
	firstName: 'John',
	lastName: 'Doe',
	get fullName() {
		return this.firstName + ' ' + this.lastName;
	}
};

const descriptors = Object.getOwnPropertyDescriptors(person);

console.log(descriptors.firstName.writable); // true
console.log(descriptors.fullName.get); // [Function: get fullName]

/*
Object.defineProperty
Object.defineProperties
Object.getOwnPropertyDescriptor
Object.getOwnPropertyDescriptors
*/
