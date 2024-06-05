import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import formidable from 'formidable';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir);
}

const server = http.createServer((req, res) => {
	if (req.url === '/' && req.method === 'GET') {
		fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
			if (err) {
				res.writeHead(500);
				res.end('Error loading index.html');
				return;
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(data);
		});
	} else if (req.url === '/style.css' && req.method === 'GET') {
		fs.readFile(path.join(__dirname, 'style.css'), (err, data) => {
			if (err) {
				res.writeHead(500);
				res.end('Error loading style.css');
				return;
			}
			res.writeHead(200, { 'Content-Type': 'text/css' });
			res.end(data);
		});
	} else if (req.url === '/script.js' && req.method === 'GET') {
		fs.readFile(path.join(__dirname, 'script.js'), (err, data) => {
			if (err) {
				res.writeHead(500);
				res.end('Error loading script.js');
				return;
			}
			res.writeHead(200, { 'Content-Type': 'application/javascript' });
			res.end(data);
		});
	} else if (req.url === '/upload' && req.method === 'POST') {
		const form = formidable({
			uploadDir: uploadDir,
			keepExtensions: true,
			multiples: false
		});

		form.parse(req, (err, fields, files) => {
			if (err) {
				res.writeHead(500);
				res.end('Error uploading file');
				return;
			}

			const file = files.file;
			if (!file) {
				res.writeHead(400);
				res.end('No file uploaded');
				return;
			}

			const oldPath = file.filepath;
			const newPath = path.join(uploadDir, file.originalFilename);
			fs.rename(oldPath, newPath, (err) => {
				if (err) {
					res.writeHead(500);
					res.end('Error saving file');
					return;
				}
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(
					JSON.stringify({ message: 'File uploaded successfully' })
				);
			});
		});
	} else if (req.url === '/files' && req.method === 'GET') {
		fs.readdir(uploadDir, (err, files) => {
			if (err) {
				res.writeHead(500);
				res.end('Error reading files');
				return;
			}
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(files));
		});
	} else if (req.url.startsWith('/uploads/') && req.method === 'GET') {
		const filePath = path.join(__dirname, req.url);
		fs.readFile(filePath, (err, data) => {
			if (err) {
				res.writeHead(404);
				res.end('File not found');
				return;
			}
			res.writeHead(200);
			res.end(data);
		});
	} else if (req.url.startsWith('/view') && req.method === 'GET') {
		const query = new URL(req.url, `http://${req.headers.host}`)
			.searchParams;
		const fileName = query.get('file');
		const filePath = path.join(uploadDir, fileName);
		fs.readFile(filePath, 'utf8', (err, data) => {
			if (err) {
				res.writeHead(500);
				res.end('Error reading file');
				return;
			}
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end(data);
		});
	} else {
		res.writeHead(404);
		res.end('Not Found');
	}
});

server.listen(3010, () => {
	console.log('Server listening on port 3000');
});
