import net from 'net';
import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const port = 8080; // Same port as the server
const host = 'localhost'; // Server hostname (localhost)

const client = net.createConnection({ port, host }, () => {
	console.log('Connected to server!');

	rl.on('line', (message) => {
		client.write(message); // Send message to the server
	});
});

client.on('data', (data) => {
	console.log(`Server message: ${data}`);
});

client.on('end', () => {
	console.log('Disconnected from server!');
	rl.close(); // Close readline on disconnect
});
