const data = {
	name: 'Alice',
	age: 25,
	is: true,
	get bio() {
		console.log(this.name, this.age, this.is);
		return 'getter';
	}
};

// usecase 1: basic usage
function UseCase01() {
	const string = JSON.stringify(data);
	console.log('basic JSON string:', string);
	console.log('JSON type:', typeof string);
}

// usecase 2: using a replacer function to filter properties
function UseCase02() {
	const string = JSON.stringify(data, (key, value) => {
		if (key === 'age') {
			return undefined; // exclude the 'age' property from the JSON
		} else if (key === 'name') {
			return value.toUpperCase();
		}
		return value;
	});
	console.log('filtered JSON string:', string);
}

// usecase 3: using the space parameter for indentation
function UseCase03() {
	const string = JSON.stringify(data, null, 4); // indent with 4 spaces
	console.log('indented JSON string:', string);
}

function UseCase04() {
	const data = {
		name: 'Alice',
		age: 25,
		is: true,
		auth: { gmail: 'paul@gmail.com', id: 7 }
	};
	const string = JSON.stringify(data);
	console.log(string);
}

function UseCase05() {
	const string =
		'{"name": "Alice", "age": 25, "is": true, "auth": {"gmail": "paul@gmail.com", "id": 7}}';
	const data = JSON.parse(string);
	console.log(data);
	console.log(data.auth);
}

function UseCase06() {
	const data = ['Alice', 25, true, { gmail: 'paul@gmail.com', id: 7 }];
	const string = JSON.stringify(data);
	console.log(string);
}

function UseCase07() {
	const string = '["Alice", 25, true, {"gmail": "paul@gmail.com", "id": 7}]';
	const data = JSON.parse(string);
	console.log(data);
	console.log(data[2]);
}

UseCase01();
UseCase02();
UseCase03();
UseCase04();
UseCase05();
UseCase06();
UseCase07();

/*
	JSON 	: set of name-value pairs (regular object) | set of indexed values (array)
	name	: string 
	value	: string, number, boolean, array, regular object, null */
