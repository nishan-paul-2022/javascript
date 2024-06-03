import http from 'http';
import pkg from 'pg';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Pool } = pkg;
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'node_to_do_list',
	password: 'nishan',
	port: 5432
});

const server = http.createServer(async (req, res) => {
	const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
	const pathname = parsedUrl.pathname;

	if (
		req.method === 'GET' &&
		(pathname === '/public/style.css' || pathname === '/public/script.js')
	) {
		const filePath = path.join(__dirname, pathname);
		try {
			const data = await fs.readFile(filePath);
			const ext = path.extname(filePath);
			const contentType =
				ext === '.css' ? 'text/css' : 'application/javascript';
			res.writeHead(200, { 'Content-Type': contentType });
			res.end(data);
		} catch (err) {
			console.error(`Error reading file ${filePath}:`, err);
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Not Found');
		}
	} else if (req.method === 'GET' && pathname === '/') {
		try {
			const data = await fs.readFile('./public/index.html');
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(data);
		} catch (err) {
			console.error('Error reading index.html:', err);
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end('Server error');
		}
	} else if (req.method === 'GET' && pathname === '/todos') {
		try {
			const result = await pool.query(
				'SELECT * FROM to_do_list ORDER BY id'
			);
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(result.rows));
		} catch (err) {
			console.error('Database error:', err);
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end('Database error');
		}
	} else if (req.method === 'POST' && pathname === '/todos') {
		let body = '';
		req.on('data', (chunk) => {
			body += chunk.toString();
		});
		req.on('end', async () => {
			const { task } = JSON.parse(body);
			try {
				const result = await pool.query(
					'INSERT INTO to_do_list(task) VALUES ($1) RETURNING *',
					[task]
				);
				res.writeHead(201, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify(result.rows[0]));
			} catch (err) {
				console.error('Database error:', err);
				res.writeHead(500, { 'Content-Type': 'text/plain' });
				res.end('Database error');
			}
		});
	} else if (req.method === 'PUT' && pathname.startsWith('/todos/')) {
		const id = pathname.split('/')[2];
		let body = '';
		req.on('data', (chunk) => {
			body += chunk.toString();
		});
		req.on('end', async () => {
			const { task, completed } = JSON.parse(body);
			try {
				await pool.query(
					'UPDATE to_do_list SET task = $1, completed = $2 WHERE id = $3',
					[task, completed, id]
				);
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify({ message: 'Todo updated' }));
			} catch (err) {
				console.error('Database error:', err);
				res.writeHead(500, { 'Content-Type': 'text/plain' });
				res.end('Database error');
			}
		});
	} else if (req.method === 'DELETE' && pathname.startsWith('/todos/')) {
		const id = pathname.split('/')[2];
		try {
			await pool.query('DELETE FROM to_do_list WHERE id = $1', [id]);
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ message: 'Todo deleted' }));
		} catch (err) {
			console.error('Database error:', err);
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end('Database error');
		}
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Not Found');
	}
});

server.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
