// slice()
function UseCase01() {
	const str1 = 'Hello, World!';
	const slicedStr = str1.slice(0, 5);
	console.log(slicedStr); // Output: Hello
}

// concat()
function UseCase02() {
	const str2 = 'Hello';
	const str3 = 'World';
	const concatenatedStr = str2.concat(', ', str3, '!');
	console.log(concatenatedStr); // Output: Hello, World!
}

// indexOf()
function UseCase03() {
	const str4 = 'This is a test string.';
	const indexOfTest = str4.indexOf('test');
	console.log(indexOfTest); // Output: 10
}

// lastIndexOf()
function UseCase04() {
	const str5 = 'This is a test string. This is another test string.';
	const lastIndexOfTest = str5.lastIndexOf('test');
	console.log(lastIndexOfTest); // Output: 35
}

// includes()
function UseCase05() {
	const str6 = 'Hello, World!';
	const includesWorld = str6.includes('World');
	console.log(includesWorld); // Output: true
}

// split()
function UseCase06() {
	const str7 = 'apple,banana,cherry';
	const fruitsArray = str7.split(',');
	console.log(fruitsArray); // Output: ['apple', 'banana', 'cherry']
}

// substr()
function UseCase07() {
	const str8 = 'Hello, World!';
	const substrStr = str8.substr(7, 5);
	console.log(substrStr); // Output: World
}

// substring()
function UseCase08() {
	const str9 = 'Hello, World!';
	const substringStr = str9.substring(7, 12);
	console.log(substringStr); // Output: World
}

// trim()
function UseCase09() {
	const str10 = '   Hello, World!   ';
	const trimmedStr = str10.trim();
	console.log(trimmedStr); // Output: 'Hello, World!'
}

// padStart() and padEnd()
function UseCase10() {
	const str11 = '42';
	const paddedStrStart = str11.padStart(5, '0');
	const paddedStrEnd = str11.padEnd(5, '0');
	console.log(paddedStrStart); // Output: '00042'
	console.log(paddedStrEnd); // Output: '42000'
}

// toUpperCase() and toLowerCase()
function UseCase11() {
	const str12 = 'Hello, World!';
	const upperCaseStr = str12.toUpperCase();
	const lowerCaseStr = str12.toLowerCase();
	console.log(upperCaseStr); // Output: 'HELLO, WORLD!'
	console.log(lowerCaseStr); // Output: 'hello, world!'
}

// startsWith() and endsWith()
function UseCase12() {
	const str13 = 'Hello, World!';
	const startsWithHello = str13.startsWith('Hello');
	const endsWithWorld = str13.endsWith('World');
	console.log(startsWithHello); // Output: true
	console.log(endsWithWorld); // Output: true
}

// charAt() and charCodeAt()
function UseCase14() {
	const str14 = 'Hello, World!';
	const charAtIndex2 = str14.charAt(2);
	const charCodeAtIndex2 = str14.charCodeAt(2);
	console.log(charAtIndex2); // Output: 'l'
	console.log(charCodeAtIndex2); // Output: 108
}

// search(), match(), matchAll(), replace(), replaceAll()
function UseCase15() {
	const str15 = 'The quick brown fox jumps over the lazy dog.';
	const searchResult = str15.search(/fox/);
	const matchResult = str15.match(/o/g);
	const matchAllResult = [...str15.matchAll(/o/)];
	const replacedStr = str15.replace('fox', 'cat');
	const replacedAllStr = str15.replaceAll('o', 'x');
	console.log(searchResult); // Output: 16
	console.log(matchResult); // Output: ['o', 'o', 'o']
	console.log(matchAllResult); // Output: [['o', index: 4, input: 'The quick brown fox jumps over the lazy dog.', groups: undefined], ['o', index: 40, input: 'The quick brown fox jumps over the lazy dog.', groups: undefined]]
	console.log(replacedStr); // Output: 'The quick brown cat jumps over the lazy dog.'
	console.log(replacedAllStr); // Output: 'The quick brxwn fxx jumps xver the lazy dxg.'
}

function UseCase16() {
	let str = 'hello';
	console.log(str[0]);

	str[0] = 'i';
	console.log(str[0]);

	const number = [1, 2, 3, 4, 5];
	number[0] = 11;
	console.log(number[0]);

	str = 'ok';
	console.log(str);
}

function UseCase17() {
	const str = 'string';
	console.log(str[0]);
	console.log(str['1']);
}

UseCase01();
UseCase02();
UseCase03();
UseCase04();
UseCase05();
UseCase06();
UseCase07();
UseCase08();
UseCase09();
UseCase10();
UseCase11();
UseCase12();
UseCase14();
UseCase15();
UseCase16();
UseCase17();
