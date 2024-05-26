import fs from 'fs';
import crypto from 'crypto';

function BufferExample01() {
	const buffer1 = Buffer.from('helloWorld');
	console.log(buffer1);
	console.log(buffer1.length);
	console.log(buffer1.toString('utf8'));
	console.log(buffer1.toString('utf8', 5));
	console.log(buffer1.toString('utf8', 0, 5));
}

function BufferExample02() {
	const buffer1 = Buffer.from([
		0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x57, 0x6f, 0x72, 0x6c, 0x64
	]);
	console.log(buffer1);
	console.log(buffer1.length);
	console.log(buffer1.toString('utf8'));
}

function BufferExample03() {
	const buffer1 = Buffer.from('hello');
	const buffer2 = Buffer.from('World');
	const buffer3 = Buffer.concat([buffer1, buffer2]);
	console.log(buffer3);
	console.log(buffer3.length);
	console.log(buffer3.toString('utf8'));
}

function BufferExample04() {
	const buffer1 = Buffer.alloc(10);
	const buffer2 = buffer1;
	const buffer3 = Buffer.from(buffer1);
	buffer1.write('0123456789', 5, 10);
	console.log(buffer1.toString('utf8'));
	console.log(buffer2.toString('utf8'));
	console.log(buffer3.toString('utf8'));
}

function BufferExample05() {
	const buffer1 = Buffer.from('hello');
	const buffer2 = Math.PI;
	console.log(Buffer.isBuffer(buffer1));
	console.log(Buffer.isBuffer(buffer2));
}

function BufferExample06() {
	fs.readFile('zmax.avif', (error, data) => {
		if (error) {
			throw error;
		}
		console.log(data);
		console.log(data.length);
		console.log(Buffer.isBuffer(data));
	});
}

function BufferExample07() {
	const buffer1 = crypto.randomBytes(10);
	const buffer2 = Buffer.alloc(10, 'hello');
	const buffer3 = Buffer.alloc(10, 0x68);
	const buffer4 = Buffer.alloc(10);
	buffer4.fill(0x68);
	console.log(buffer1.length);
	console.log(buffer2.length);
	console.log(buffer1.toString('utf8'));
	console.log(buffer2.toString('utf8'));
	console.log(buffer3.toString('utf8'));
	console.log(buffer4.toString('utf8'));
}

BufferExample01();
BufferExample02();
BufferExample03();
BufferExample04();
BufferExample05();
BufferExample06();
BufferExample07();

/*
regular array 		: array of value 
buffer array 		: array of unicode in hex 
size of character 	: 1 byte 

Buffer.from()
Buffer.concat()
Buffer.alloc()
Buffer.isBuffer()

buffer.write()
buffer.fill()
buffer.toString()
buffer.length */
