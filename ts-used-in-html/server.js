import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const fileDirectory = path.dirname(filePath);

const server = http.createServer((req, res) => {
	if (req.method === 'GET' && req.url === '/') {
		const indexHTML = path.join(fileDirectory, 'index.html');
		fs.readFile(indexHTML, (err, data) => {
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
	} else if (req.method === 'GET' && req.url === '/script.js') {
		const scriptJS = path.join(fileDirectory, 'script.js');
		fs.readFile(scriptJS, (err, data) => {
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

server.listen(3004);
