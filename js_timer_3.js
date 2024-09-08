function displayNotification(message) {
	console.log('New Message: ', message);
}

let immediateId;

function handleNewMessage(message) {
	// If an immediate callback is already scheduled, cancel it
	if (immediateId) {
		clearImmediate(immediateId);
	}

	// Schedule a new immediate callback to display the notification after a brief delay
	immediateId = setImmediate(() => {
		displayNotification(message);
		immediateId = null; // Reset immediateId after the callback executes
	});
}

// Simulate receiving new messages
handleNewMessage('Hello, User1!'); // This notification will be displayed immediately
handleNewMessage('Hi, User2!'); // This notification will overwrite the previous one
handleNewMessage('Hey, User3!'); // This notification will overwrite the previous one

// The final notification will be "Hey, User1!" because it overwrites the previous messages
