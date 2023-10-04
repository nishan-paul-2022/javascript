import { createServer } from 'http';
import { readFile, appendFile, writeFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const port = 3001;
const filePath = fileURLToPath(import.meta.url);
const fileDirectory = path.dirname(filePath);
const dataText = path.join(fileDirectory, 'data.txt');

const server = createServer((req, res) => {
	if (req.method === 'GET' && req.url === '/') {
		// Serve the index.html file
		readFile(path.join(fileDirectory, 'index.html'), (err, data) => {
			if (err) {
				res.writeHead(500);
				res.end('Error reading the file');
			} else {
				res.writeHead(200, {
					'Content-Type': 'text/html'
				});
				res.end(data);
			}
		});
	} else if (req.method === 'POST' && req.url === '/create') {
		// Create text in the file
		let body = '';
		req.on('data', (chunk) => {
			body += chunk;
		});
		req.on('end', () => {
			const text = body.trim();
			appendFile(dataText, text + '\n', (err) => {
				if (err) {
					res.writeHead(500);
					res.end('Error creating text');
				} else {
					res.writeHead(200);
					res.end('Text created successfully');
				}
			});
		});
	} else if (req.method === 'GET' && req.url === '/read') {
		// Read text from the file
		readFile(dataText, 'utf8', (err, data) => {
			if (err) {
				res.writeHead(500);
				res.end('Error reading text');
			} else {
				const texts = data.trim().split('\n');
				res.writeHead(200, {
					'Content-Type': 'application/json'
				});
				res.end(JSON.stringify(texts));
			}
		});
	} else if (req.method === 'PUT' && req.url === '/update') {
		// Update text in the file
		let body = '';
		req.on('data', (chunk) => {
			body += chunk;
		});
		req.on('end', () => {
			const { index, text } = JSON.parse(body);
			readFile(dataText, 'utf8', (err, data) => {
				if (err) {
					res.writeHead(500);
					res.end('Error updating text');
				} else {
					const texts = data.trim().split('\n');
					if (index >= 0 && index < texts.length) {
						texts[index] = text;
						writeFile(dataText, texts.join('\n') + '\n', (err) => {
							if (err) {
								res.writeHead(500);
								res.end('Error updating text');
							} else {
								res.writeHead(200);
								res.end('Text updated successfully');
							}
						});
					} else {
						res.writeHead(404);
						res.end(JSON.stringify({ error: 'Text not found' }));
					}
				}
			});
		});
	} else if (req.method === 'DELETE' && req.url === '/delete') {
		// Delete text from the file
		let body = '';
		req.on('data', (chunk) => {
			body += chunk;
		});
		req.on('end', () => {
			const { index } = JSON.parse(body);
			readFile(dataText, 'utf8', (err, data) => {
				if (err) {
					res.writeHead(500);
					res.end('Error deleting text');
				} else {
					const texts = data.trim().split('\n');
					if (index >= 0 && index < texts.length) {
						texts.splice(index, 1);
						writeFile(dataText, texts.join('\n') + '\n', (err) => {
							if (err) {
								res.writeHead(500);
								res.end('Error deleting text');
							} else {
								res.writeHead(200);
								res.end('Text deleted successfully');
							}
						});
					} else {
						res.writeHead(404);
						res.end(JSON.stringify({ error: 'Text not found' }));
					}
				}
			});
		});
	} else if (req.method === 'GET' && req.url === '/style.css') {
		// Serve the style.css file
		readFile(path.join(fileDirectory, 'style.css'), (err, data) => {
			if (err) {
				res.writeHead(404);
				res.end('File not found');
			} else {
				res.writeHead(200, {
					'Content-Type': 'text/css'
				});
				res.end(data);
			}
		});
	} else if (req.method === 'GET' && req.url === '/script.js') {
		// Serve the script.js file
		readFile(path.join(fileDirectory, 'script.js'), (err, data) => {
			if (err) {
				res.writeHead(404);
				res.end('File not found');
			} else {
				res.writeHead(200, {
					'Content-Type': 'application/javascript; charset=utf-8'
				});
				res.end(data);
			}
		});
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({ error: 'Page not found' }));
	}
});

server.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
