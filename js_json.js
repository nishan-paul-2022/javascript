const data = {
	name: 'Alice',
	age: 25,
	isStudent: true,
	get Bio() {
		console.log(this.name, this.age, this.isStudent);
		return 'getter';
	}
};

// usecase 1: basic usage
function UseCase01() {
	const jsonString = JSON.stringify(data);
	console.log('basic JSON string:', jsonString);
	console.log('JSON type:', typeof jsonString);
}

// usecase 2: using a replacer function to filter properties
function UseCase02() {
	const jsonString = JSON.stringify(data, (key, value) => {
		if (key === 'age') {
			return undefined; // exclude the 'age' property from the JSON
		} else if (key === 'name') {
			return value.toUpperCase();
		}
		return value;
	});
	console.log('filtered JSON string:', jsonString);
}

// usecase 3: using the space parameter for indentation
function UseCase03() {
	const jsonString = JSON.stringify(data, null, 4); // indent with 4 spaces
	console.log('indented JSON string:', jsonString);
}

function UseCase04() {
	const jsonString = '{"name": "Alice", "age": 25, "isStudent": true}';
	const data = JSON.parse(jsonString);
	console.log(data);
	console.log(data.name);
}

UseCase01();
UseCase02();
UseCase03();
UseCase04();

/*
	JSON is a set of name-value pairs 
	name is string 
	value is string, number, boolean, null, array, value within value
*/
