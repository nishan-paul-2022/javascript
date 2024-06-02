import { createServer } from 'http';
import { readFile } from 'fs';
import { extname as _extname } from 'path';

const port = 3000;

function getContentType(filePath) {
	const extname = _extname(filePath);
	switch (extname) {
		case '.html':
			return 'text/html';
		case '.js':
			return 'text/javascript';
		default:
			return 'text/plain';
	}
}

const server = createServer((req, res) => {
	// Set the Content-Type header based on the file extension
	const filePath = req.url === '/' ? '/_custom_tooltip.html' : req.url;
	const contentType = getContentType(filePath);
	res.setHeader('Content-Type', contentType);

	// Read the file and serve it as the response
	readFile(__dirname + filePath, (err, data) => {
		if (err) {
			res.writeHead(404);
			res.end('Page not found');
		} else {
			res.writeHead(200);
			res.end(data);
		}
	});
});

server.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
