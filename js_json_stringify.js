const data = {
	name: 'Alice',
	age: 25,
	isStudent: true,
	get Bio() {
		console.log(this.name, this.age, this.isStudent);
		return 'getter';
	}
};

// Example 1: Basic usage
function Func01() {
	const jsonString = JSON.stringify(data);
	console.log('Basic JSON string:', jsonString);
	console.log('JSON type:', typeof jsonString);
}

// Example 2: Using a replacer function to filter properties
function Func02() {
	const jsonString = JSON.stringify(data, (key, value) => {
		if (key === 'age') {
			return undefined; // exclude the 'age' property from the JSON
		} else if (key === 'name') {
			return value.toUpperCase();
		}
		return value;
	});
	console.log('Filtered JSON string:', jsonString);
}

// Example 3: Using the space parameter for indentation
function Func03() {
	const jsonString = JSON.stringify(data, null, 4); // Indent with 4 spaces
	console.log('Indented JSON string:', jsonString);
}

function Func04() {
	const jsonString = '{"name": "Alice", "age": 25, "isStudent": true}';
	const data = JSON.parse(jsonString);
	console.log(data);
	console.log(data.name);
}

Func01();
Func02();
Func03();
Func04();
