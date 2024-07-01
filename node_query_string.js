import querystring from 'querystring';

function StringToObject() {
	console.log('StringToObject');
	const string = 'name=Batman&city=Gotham';
	const object = querystring.parse(string);
	console.log(object);
}

function ObjectToString() {
	console.log('ObjectToString');
	const object = {
		name: 'Batman',
		company: 'Gotham'
	};
	const string = querystring.stringify(object);
	console.log(string);
}

StringToObject();
ObjectToString();
