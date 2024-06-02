import querystring from 'querystring';

function StringToObject() {
	console.log('StringToObject');
	const string = 'name=batmana&city=gotham';
	const object = querystring.parse(string);
	console.log(object);
}

function ObjectToString() {
	console.log('ObjectToString');
	const object = {
		name: 'batman',
		company: 'gotham'
	};
	const string = querystring.stringify(object);
	console.log(string);
}

StringToObject();
ObjectToString();
