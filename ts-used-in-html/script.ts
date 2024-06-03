const message: string = 'Hello, World!';
const h1 = document.createElement('h1');
h1.textContent = message;
document.body.appendChild(h1);
console.log(message);
console.log(h1);
console.log(typeof h1);
