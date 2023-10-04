/* eslint-disable @typescript-eslint/no-unused-vars */

const http = require('http');

function Fn() {
	http.createServer((request, response) => {
		const message = request.url;
		const type = { 'Content-Type': 'text/plain' };
		console.log(type['Content-Type']);
		response.writeHead(200, type);
		response.end(message);
	}).listen(8081);

	console.log('Server running at http://127.0.0.1:8081/');
}

function Gn() {
	const server = http.createServer((_request, response) => {
		const type = { 'Content-Type': 'text/plain' };
		const message = 'Hello, world!';
		response.writeHead(200, type);
		response.write(message);
		response.end();

		setTimeout(() => {
			response.end(); // Ending the response after a delay (simulating an async operation)
			console.log('helloWorld');
		}, 5000);
	});

	server.listen(8002, () => {
		console.log('Server is listening on port 8002');
	});
}

// Fn();
Gn();
