import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { port, ServerRunning } from './server_module.js';

// url | file path | directory
const filePath = fileURLToPath(import.meta.url);
const fileDirectory = path.dirname(filePath);

const server = http.createServer((req, res) => {
	if (req.method === 'GET' && req.url === '/') {
		// Serve the index.html file
		fs.readFile(path.join(fileDirectory, 'index.html'), (err, data) => {
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
		fs.readFile(path.join(fileDirectory, 'style.css'), (err, data) => {
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
		fs.readFile(path.join(fileDirectory, 'script.js'), (err, data) => {
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
	} else if (req.method === 'GET' && req.url === '/module_1.js') {
		// Serve the module_1.js file
		fs.readFile(path.join(fileDirectory, 'module_1.js'), (err, data) => {
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
	} else if (req.method === 'GET' && req.url === '/module_2.js') {
		// Serve the module_2.js file
		fs.readFile(path.join(fileDirectory, 'module_2.js'), (err, data) => {
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

server.listen(port, ServerRunning);
