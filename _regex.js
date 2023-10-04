function Fn() {
	console.log('Fn--------------------');
	const text = 'Hello, hello, HELLO';
	const regex = /hello/gi;
	const result = text.match(regex);
	console.log(result); // Output: ["Hello", "hello", "HELLO"]
}

function Gn() {
	console.log('Gn--------------------');
	const text = 'Hello, hello, HELLO';
	const pattern = 'hello';
	const flag = 'gi';
	const regex = new RegExp(pattern, flag);
	const result = text.match(regex);
	console.log(result); // Output: ["Hello", "hello", "HELLO"]
}

function Hn() {
	console.log('Hn--------------------');
	const text = 'Hello, hello, hello, HELLO';
	const pattern = 'hello';
	const regex = new RegExp(pattern);
	const result = text.match(regex);
	console.log(result); // Output: [ 'hello', index: 7, input: 'Hello, hello, HELLO', groups: undefined ]
	console.log(result instanceof Array);
}

function In() {
	console.log('In--------------------');
	const s = 'hello';
	const index = 7;
	const input = 'Hello, hello, HELLO';
	const groups = undefined;

	const result = [s];
	result.index = index;
	result.input = input;
	result.groups = groups;

	console.log(result); // Output: [ 'hello', index: 7, input: 'Hello, hello, HELLO', groups: undefined ]
}

function Jn() {
	console.log('Jn--------------------');
	const text =
		'I love cats. Cats are very easy to love. Cats are very popular.';
	const result = text.matchAll(/Cats/gi);
	for (const i of result) {
		console.log(i);
	}
}

function Kn() {
	console.log('Kn--------------------');
	const text = 'Hello, world!';
	const pattern = /hello/i; // case-insensitive search for "hello" in the string
	const result = pattern.test(text);
	console.log(result); // Output: true
}

function Ln() {
	console.log('Ln--------------------');
	const text = 'Hello, world!';
	const pattern = /world/i; // case-insensitive search for "world" in the string
	const result = text.search(pattern);
	console.log(result); // Output: 7 (index of the first occurrence of "world")
}

function Mn() {
	console.log('Mn--------------------');
	const text = 'Hello, world!';
	const pattern = /hello/i; // case-insensitive search for "hello" in the string
	const replacedText = text.replace(pattern, 'Hi');
	console.log(replacedText); // Output: "Hi, world!"
}

function Nn() {
	console.log('Nn--------------------');
	const text = 'Hello, hello, HELLO';
	const regex = /hello/gi;
	let match;
	while ((match = regex.exec(text)) !== null) {
		console.log(match instanceof Array);
		console.log(match);
		console.log(`Match found at index ${match.index}: ${match[0]}`);
	}
}

Fn();
Gn();
Hn();
In();
Jn();
Kn();
Ln();
Mn();
Nn();

// pattern: [a-b], [A-B], [0-9], [abc], [a-b|x-z]
// modfier: g, i, m
// quantifier: n+, n*, n?
// metacharacter: \d, \s, \uxxxx
