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
function Usecase01() {
	const string = JSON.stringify(data);
	console.log('basic JSON string:', string);
	console.log('JSON type:', typeof string);
}

// usecase 2: using a replacer function to filter properties
function Usecase02() {
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
function Usecase03() {
	const string = JSON.stringify(data, null, 4); // indent with 4 spaces
	console.log('indented JSON string:', string);
}

function Usecase04() {
	const data = {
		name: 'Alice',
		age: 25,
		is: true,
		auth: { gmail: 'paul@gmail.com', id: 7 }
	};
	const string = JSON.stringify(data);
	console.log(string);
}

function Usecase05() {
	const string =
		'{"name": "Alice", "age": 25, "is": true, "auth": {"gmail": "paul@gmail.com", "id": 7}}';
	const data = JSON.parse(string);
	console.log(data);
	console.log(data.auth);
}

function Usecase06() {
	const data = ['Alice', 25, true, { gmail: 'paul@gmail.com', id: 7 }];
	const string = JSON.stringify(data);
	console.log(string);
}

function Usecase07() {
	const string = '["Alice", 25, true, {"gmail": "paul@gmail.com", "id": 7}]';
	const data = JSON.parse(string);
	console.log(data);
	console.log(data[2]);
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();
Usecase05();
Usecase06();
Usecase07();

/*
	JSON 	: set of name-value pairs (regular object) | set of indexed values (array)
	name	: string 
	value	: string, number, boolean, array, regular object, null */
