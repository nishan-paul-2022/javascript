import zlib from 'zlib';
import fs from 'fs';

function Zip() {
	const gzip = zlib.createGzip();
	const inFile = fs.createReadStream('./sample.txt');
	const outFile = fs.createWriteStream('./sample.txt.gz');
	inFile.pipe(gzip).pipe(outFile);
}

function UnZip() {
	const unzip = zlib.createUnzip();
	const inFile = fs.createReadStream('./sample.txt.gz');
	const outFile = fs.createWriteStream('./sample.txt');
	inFile.pipe(unzip).pipe(outFile);
}

Zip();
UnZip();

/*	
zip = zlib.createGzip()
unzip = zlib.createUnzip()

file1 = fs.createReadStream(fileName1)
file2 = fs.writeReadStream(fileName2)

file1.pipe(zip).pipe(file2)
file1.pipe(unzip).pipe(file2) */
