import path from 'path';

const file = 'zmax.html';
const fullDir = 'E:/CODE/MERN';
const fullFile = 'E:/CODE/MERN/zmax.html';
const fullFileWithNoise = 'E:/CODE//MERN//zmax.html';
const parse = path.parse(fullFile);

console.log('path.dirname(fullFile)', path.dirname(fullFile));
console.log('path.basename(fullFile)', path.basename(fullFile));
console.log('path.extname(fullFile)', path.extname(fullFile));
console.log('path.parse(fullFile)', parse);
console.log('path.format(parse)', path.format(parse));

console.log(
	'path.normalize(fullFileWithNoise)',
	path.normalize(fullFileWithNoise)
);

console.log('path.join(fullDir, file)', path.join(fullDir, file));

// relative-directory => absolute-directory
console.log('path.resolve(file)', path.resolve(file));

// absolute-directory => relative-directory
console.log(
	'path.relative(fullDir, fullFile)',
	path.relative(fullDir, fullFile)
);

console.log('path.isAbsolute(file)', path.isAbsolute(file));
console.log('path.isAbsolute(fullDir)', path.isAbsolute(fullDir));
