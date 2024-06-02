import events from 'events';

const connectHandler = () => {
	console.log('connection succesful');
};

const dataHandler = () => {
	console.log('data received succesful');
};

const eventEmitter = new events.EventEmitter(); // Create an eventEmitter object

eventEmitter.on('connection', connectHandler); // Bind the connection event with the handler
eventEmitter.on('data_received', dataHandler); // Bind the data_received event with the handler

eventEmitter.emit('connection'); // Fire the connection event
eventEmitter.emit('data_received'); // Fire the data_received event

console.log('program ended');
