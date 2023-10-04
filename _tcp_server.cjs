const net = require('net');

const clients = [];

// Broadcast a message to all connected clients
function broadcast(message, sender, clients) {
	clients.forEach((client) => {
		if (client !== sender) {
			client.write(message);
		}
	});
}

const server = net.createServer((socket) => {
	// Store the new client in the clients array
	clients.push(socket);

	// Welcome message for the new client
	socket.write('Welcome to the chat!\n');

	// Event listeners for data and client-disconnection
	socket.on('data', (data) => {
		const message = `${socket.remoteAddress}:${socket.remotePort} - ${data}`;
		console.log(message);
		broadcast(message, socket, clients);
	});

	socket.on('end', () => {
		// Remove the client from the clients array
		const index = clients.indexOf(socket);
		if (index !== -1) {
			clients.splice(index, 1);
		}
		console.log(
			`${socket.remoteAddress}:${socket.remotePort} disconnected.`
		);
	});
});

server.on('error', (err) => {
	console.error('Server error:', err);
});

// Start the server on port 8000
server.listen(8000, () => {
	console.log('Chat server started on port 8000');
});
