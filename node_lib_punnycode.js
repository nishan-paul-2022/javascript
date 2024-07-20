import punycode from 'punycode.js';

console.log('punycode.encode("☃-⌘")', punycode.encode('☃-⌘'));
console.log('punycode.decode("maana-pta")', punycode.decode('maana-pta'));
console.log('punycode.toASCII("mañana.com")', punycode.toASCII('mañana.com'));
console.log(
	'punycode.toUnicode("xn--maana-pta.com")',
	punycode.toUnicode('xn--maana-pta.com')
);
