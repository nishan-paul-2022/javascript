import path from 'path';

const fileName = 'zmax.html';
const fullDir = 'E:/CODE/MERN';
const fullFile = 'E:/CODE/MERN/zmax.html';
const fullFileWithNoise = 'E:/CODE//MERN//zmax.html';

const fileObject = path.parse(fullFile);
const fileString = path.format(fileObject);
console.log('path.parse(fullFile)', fileObject);
console.log('path.format(fileObject)', fileString);

console.log('path.dirname(fullFile)', path.dirname(fullFile));
console.log('path.basename(fullFile)', path.basename(fullFile));
console.log('path.extname(fullFile)', path.extname(fullFile));

console.log(
	'path.normalize(fullFileWithNoise)',
	path.normalize(fullFileWithNoise)
);

console.log('path.join(fullDir, fileName)', path.join(fullDir, fileName));

// relative directory -> absolute directory
console.log('path.resolve(fileName)', path.resolve(fileName));

// absolute directory -> relativedirectory
console.log(
	'path.relative(fullDir, fullFile)',
	path.relative(fullDir, fullFile)
);

console.log('path.isAbsolute(fileName)', path.isAbsolute(fileName));
console.log('path.isAbsolute(fullDir)', path.isAbsolute(fullDir));
