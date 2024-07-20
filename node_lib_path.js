import path from 'path';

const fileName = 'fileName.extension';
const fullDir = 'folder1/folder2/folder3';
const fullFile = 'folder1/folder3/folder3/fileName.extension';
const fullFileWithNoise = 'folder1/folder2/folder3//fileName.extension';

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

// relative directory => absolute directory
console.log('path.resolve(fileName)', path.resolve(fileName));

// absolute directory => relative directory
console.log(
	'path.relative(fullDir, fullFile)',
	path.relative(fullDir, fullFile)
);

console.log('path.isAbsolute(fileName)', path.isAbsolute(fileName));
console.log('path.isAbsolute(fullDir)', path.isAbsolute(fullDir));
