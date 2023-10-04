const message = 'Enter a positive number:';

let userInput;
do {
	const value = prompt(message);
	userInput = parseInt(value);
} while (isNaN(userInput) || userInput <= 0);
console.log('You entered a valid positive number:', userInput);
