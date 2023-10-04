const user = {
	name: 'John'
};

Object.defineProperty(user, 'name', {
	configurable: false
});

user.name = 'Pete'; // works fine
// delete user.name; // Error

Object.defineProperty(user, 'name', {
	writable: false
});

// user.name = "Pete"; // doesn't work fine

// Object.defineProperty(user, "name", {
//     writable: true
// });

// user.name = "Pete";

function User(name, birthday) {
	this.name = name;
	this.birthday = birthday;

	// age is calculated from the current date and birthday
	Object.defineProperty(this, 'age', {
		get() {
			const todayYear = new Date().getFullYear();
			return todayYear - this.birthday.getFullYear();
		}
	});
}

const john = new User('John', new Date(1992, 6, 1));

console.log(john.birthday); // birthday is available
console.log(john.age); // ...as well as the age

function Func01() {
	console.log('helloWorld');
}

const obj = {
	myMethod() {
		console.log('This is my method.');
	}
};

const descriptor = Object.getOwnPropertyDescriptor(obj, 'myMethod');
console.log(descriptor);

obj.myMethod();
Object.defineProperty(obj, 'myMethod', {
	value: Func01
});

obj.myMethod();

/*

Object.getOwnPropertyDescriptor
Object.getOwnPropertyDescriptors
Object.defineProperty
Object.defineProperties

value : value of the property 
writable : if the property is re-assignable 
enumerable : if the property is listed in for loop
configuarable : 
- if the property is deletable and if the attributes of that property are changable 
- making a property non-configurable is a one-way road.
- The only attribute change possible: writable true → false

*/
