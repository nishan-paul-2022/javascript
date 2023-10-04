const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Create a TCP socket for the client
const client = new net.Socket();

// Connect to the server on localhost:8001
client.connect(8000, 'localhost', () => {
	console.log('Connected to the chat server');

	rl.question('Enter your name: ', (name) => {
		console.log(`Welcome, ${name}! Type your messages below.`);

		// Read user input and send messages to the server
		rl.on('line', (input) => {
			client.write(`${name}: ${input}`);
		});

		// Close the client connection when the user exits
		rl.on('close', () => {
			console.log('Disconnected from the chat server');
			client.end();
		});
	});
});

// Display messages received from the server
client.on('data', (data) => {
	console.log(data.toString());
});
