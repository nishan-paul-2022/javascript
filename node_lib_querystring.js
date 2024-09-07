import querystring from 'querystring';

function StringToObject() {
	const string = 'name=Batman&city=Gotham';
	const object = querystring.parse(string);
	console.log(object);
}

function ObjectToString() {
	const object = {
		name: 'Batman',
		company: 'Gotham'
	};
	const string = querystring.stringify(object);
	console.log(string);
}

StringToObject();
ObjectToString();
