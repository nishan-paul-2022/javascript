import net from 'net';
import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const port = 8080; // Port number for the server

const clients = []; // Array to store connected clients

const broadcastMessage = (sender, message, socket) => {
	const formattedMessage = `${sender} => Clients: ${message}`;

	clients.forEach((client) => {
		if (client !== socket) {
			// Don't send to the sender itself
			client.write(formattedMessage);
		}
	});

	console.log(`Server broadcast: ${formattedMessage}`); // Display on server
};

const server = net.createServer((socket) => {
	console.log('Client connected!');

	clients.push(socket); // Add new client to the list

	socket.on('data', (data) => {
		const message = data.toString().trim();
		const sender = 'Client'; // Identify client messages
		console.log(`Server received: ${message}`);
		broadcastMessage(sender, message, socket);
	});

	socket.on('end', () => {
		console.log('Client disconnected!');
		clients.splice(clients.indexOf(socket), 1); // Remove disconnected client
	});
});

server.listen(port, () => {
	console.log(`Server listening on port ${port}`);

	rl.on('line', (message) => {
		const sender = 'Server'; // Identify server messages
		broadcastMessage(sender, message);
	});
});
