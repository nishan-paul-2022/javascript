const dName = __dirname;
const fName = __filename;
console.log(dName);
console.log(fName);
console.log(typeof dName);
console.log(typeof fName);

/* 
//	global variable			 	: __filename (string) | __dirname (string)
	global class 				: Buffer
	global object 				: console, process
	global function (timer) 	:
		setImmediate
		setInterval
		setTimeout
		clearImmediate
		clearInterval
		clearTimeout

	fileName.mjs / ES module
	fileName.cjs / CommonJS module
	can't use __dirname and __filename in ES module */
