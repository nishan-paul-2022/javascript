import { createServer } from 'http';
import { readFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const port = 3002;
const filePath = fileURLToPath(import.meta.url);
const fileDirectory = path.dirname(filePath);

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
	} else if (req.method === 'GET' && req.url === '/module.js') {
		// Serve the module.js file
		readFile(path.join(fileDirectory, 'module.js'), (err, data) => {
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
		res.end(
			JSON.stringify({
				error: 'Page not found'
			})
		);
	}
});

server.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
