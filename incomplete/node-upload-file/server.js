import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import formidable from 'formidable';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, 'uploads');

const init = async () => {
	try {
		await fs.access(uploadDir);
	} catch {
		await fs.mkdir(uploadDir);
	}
};

const handleReadFile = async (filePath, contentType, res) => {
	try {
		const data = await fs.readFile(filePath);
		res.writeHead(200, { 'Content-Type': contentType });
		res.end(data);
	} catch (error) {
		console.error(`Error loading ${path.basename(filePath)}: ${error}`);
		res.writeHead(500);
		res.end(`Error loading ${path.basename(filePath)}`);
	}
};

const handleUploadFiles = (req, res) => {
	const form = formidable({
		uploadDir: uploadDir,
		keepExtensions: true,
		multiples: true
	});

	form.parse(req, (error, fields, files) => {
		if (error) {
			res.writeHead(500);
			res.end(JSON.stringify({ error: 'Error uploading file' }));
			return;
		}

		files.fileInput.forEach(async (file) => {
			if (!file) {
				res.writeHead(400);
				res.end(JSON.stringify({ error: 'No file uploaded' }));
				return;
			}

			const oldPath = file.filepath;
			const originalFilename = file.originalFilename;

			if (!oldPath || !originalFilename) {
				console.error(
					`File upload error: missing file path or original filename: ${file}`
				);
				res.writeHead(500);
				res.end(JSON.stringify({ error: 'File upload error' }));
				return;
			}

			const newFileName = `${path.basename(
				originalFilename,
				path.extname(originalFilename)
			)}_${new Date().toISOString().replace(/[:.]/g, '_')}${path.extname(
				originalFilename
			)}`;
			const newPath = path.join(uploadDir, newFileName);

			try {
				const name = fields.name[0];
				await fs.rename(oldPath, newPath);
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(
					JSON.stringify({
						message: `hello ${name}! File uploaded successfully`
					})
				);
			} catch (error) {
				console.error(`Error renaming file: ${error}`);
				res.writeHead(500);
				res.end(JSON.stringify({ error: 'Error saving file' }));
			}
		});
	});
};

const handleListFiles = async (res) => {
	try {
		const fileNames = await fs.readdir(uploadDir);
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ fileNames }));
	} catch (error) {
		res.writeHead(500);
		res.end(JSON.stringify({ error: 'Error reading files' }));
	}
};

const handleViewFile = async (filePath, res) => {
	try {
		const data = await fs.readFile(filePath, 'utf8');
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end(JSON.stringify({ data }));
	} catch (error) {
		res.writeHead(500);
		res.end(JSON.stringify({ error: 'Error reading file' }));
	}
};

const handleDeleteFile = async (fileName, res) => {
	try {
		await fs.unlink(path.join(uploadDir, fileName));
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ message: 'File deleted successfully' }));
	} catch (error) {
		res.writeHead(500);
		res.end(JSON.stringify({ error: 'Error deleting file' }));
	}
};

const server = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url, true);
	const pathname = parsedUrl.pathname;

	if (pathname === '/' && req.method === 'GET') {
		handleReadFile(path.join(__dirname, 'index.html'), 'text/html', res);
	} else if (pathname === '/style.css' && req.method === 'GET') {
		handleReadFile(path.join(__dirname, 'style.css'), 'text/css', res);
	} else if (pathname === '/script.js' && req.method === 'GET') {
		handleReadFile(
			path.join(__dirname, 'script.js'),
			'application/javascript',
			res
		);
	} else if (pathname === '/upload' && req.method === 'POST') {
		handleUploadFiles(req, res);
	} else if (pathname === '/files' && req.method === 'GET') {
		handleListFiles(res);
	} else if (pathname.startsWith('/uploads/') && req.method === 'GET') {
		handleReadFile(
			path.join(__dirname, pathname),
			'application/octet-stream',
			res
		);
	} else if (pathname.startsWith('/view') && req.method === 'GET') {
		const fileName = parsedUrl.query.file;
		const filePath = path.join(uploadDir, fileName);
		handleViewFile(filePath, res);
	} else if (pathname.startsWith('/delete') && req.method === 'DELETE') {
		const fileName = parsedUrl.query.file;
		handleDeleteFile(fileName, res);
	} else {
		res.writeHead(404);
		res.end('Not Found');
	}
});

init()
	.then(() => {
		server.listen(3010, () => {
			console.log('Server listening on port 3010');
		});
	})
	.catch((error) => {
		console.error('Error during initialization:', error);
	});
