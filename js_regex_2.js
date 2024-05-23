// substring
export function example01() {
	console.log('\n\n title 01');
	console.log("/hello/.test('helloWorld')", /hello/.test('helloWorld')); // literal character
	console.log("/\u00E9/.test('café')", /\u00E9/.test('café')); // unicode character
}

// character class
export function example02() {
	console.log('\n\n title 02');
	console.log("/[024]/.test('0X2X4')", /[024]/.test('0X2X4'));
	console.log("/[024]/.test('0X2')", /[024]/.test('0X2'));
	console.log("/[a-z]/.test('cat')", /[a-z]/.test('cat'));
	console.log("/[A-Z]/.test('CAT')", /[A-Z]/.test('CAT'));
	console.log("/[0-9]/.test('024')", /[0-9]/.test('024'));
	console.log("/[^0-9]/.test('cat')", /[^0-9]/.test('cat'));
	console.log("/cat[0-9]dog/.test('cat0dog')", /cat[0-9]dog/.test('cat0dog'));
}

// shorthand character class
export function example03() {
	console.log('\n\n title 03');
	console.log("/\\d/.test('024')", /\d/.test('024'));
	console.log("/\\w/.test('024')", /\w/.test('024'));
	console.log("/\\w/.test('cat')", /\w/.test('cat'));
	console.log("/\\s/.test(' ')", /\s/.test(' '));
	console.log("/\\s/.test('\n')", /\s/.test('\n'));
	console.log("/\\D/.test('cat')", /\D/.test('cat'));
	console.log("/\\W/.test('!@#')", /\W/.test('!@#'));
	console.log("/\\S/.test('024')", /\S/.test('024'));

	console.log("/\\s/.test('')", /\s/.test('')); /* false */
	console.log("/\\S/.test('')", /\S/.test('')); /* false */
}

// quantifier
export function example04() {
	console.log('\n\n title 04');
	console.log("/a*/.test('')", /a*/.test(''));
	console.log("/b+/.test('b')", /b+/.test('b'));
	console.log("/(cat)+/.test('catXcat')", /(cat)+/.test('catXcat'));
	console.log("/d?/.test('')", /d?/.test(''));
	console.log("/e?/.test('e')", /e?/.test('e'));
	console.log("/f{3}/.test('fff')", /f{3}/.test('fff'));
	console.log("/g{2,}/.test('gg')", /g{2,}/.test('gg'));
	console.log("/h{1,3}/.test('h')", /h{1,3}/.test('h'));
	console.log("/i{1,3}/.test('iXiXi')", /i{1,3}/.test('iXiXi'));
}

// alternation, wildcard, escaping
export function example05() {
	console.log('\n\n title 05');
	console.log("/cat|dog/.test('catXdog')", /cat|dog/.test('catXdog')); // alternation
	console.log("/cat.dog/.test('catXdog')", /cat.dog/.test('catXdog')); // wildcard
	console.log("/cat\\.dog/.test('cat.dog')", /cat\.dog/.test('cat.dog')); // escaping
}

// anchor
export function example06() {
	console.log('\n\n title 06');
	console.log("/^cat/.test('catXdog')", /^cat/.test('catXdog'));
	console.log("/dog$/.test('catXdog')", /dog$/.test('catXdog'));
	console.log("/^\\d+$/.test('024')", /^\d+$/.test('024'));
	console.log("/^\\w+$/.test('catX024')", /^\w+$/.test('catX024'));
	console.log("/^\\s+$/.test(' \n')", /^\s+$/.test(' \n'));
	console.log("/^\\D+$/.test('cat')", /^\D+$/.test('cat'));
	console.log("/^\\W+$/.test('!@#')", /^\W+$/.test('!@#'));
	console.log("/^\\S+$/.test('catX024')", /^\S+$/.test('catX024'));
}

// assertion
export function example07() {
	console.log('\n\n title 07');
	console.log("/x(?=y)/.test('xy')", /x(?=y)/.test('xy'));
	console.log("/x(?!y)/.test('xz')", /x(?!y)/.test('xz'));
	console.log("(?<=y)x/.test('yx')", /(?<=y)x/.test('yx'));
	console.log("/(?<!y)x/.test('zx')", /(?<!y)x/.test('zx'));
}

// modifier
export function example08() {
	console.log('\n\n title 08');

	// case-insensitive flag
	console.log('\n case-insensitive flag :');
	console.log("/cat/.test('CAT')", /cat/.test('CAT'), '\n'); /* false */
	console.log("/cat/i.test('CAT')", /cat/i.test('CAT'), '\n');

	// global flag
	console.log('\n global flag :');
	console.log("'catXcat'.match(/cat/)", 'catXcat'.match(/cat/), '\n');
	console.log("'catXcat'.match(/cat/g)", 'catXcat'.match(/cat/g)), '\n';

	// global and multilne flag
	console.log('\n global and multilne flag :');
	console.log(
		"'Line A Line B\nLine 3 Line 4\nLine 5 Line 6'.match(/Line d+/)",
		'Line A Line B\nLine 3 Line 4\nLine 5 Line 6'.match(/Line \d+/),
		'\n'
	);

	console.log(
		"'Line A Line B\nLine 3 Line 4\nLine 5 Line 6'.match(/Line d+/g)",
		'Line A Line B\nLine 3 Line 4\nLine 5 Line 6'.match(/Line \d+/g),
		'\n'
	);

	console.log(
		"'Line A Line B\nLine 3 Line 4\nLine 5 Line 6'.match(/Line d+/m)",
		'Line A Line B\nLine 3 Line 4\nLine 5 Line 6'.match(/Line \d+/m),
		'\n'
	);

	console.log(
		"'Line A Line B\nLine 3 Line 4\nLine 5 Line 6'.match(/Line d+/gm)",
		'Line A Line B\nLine 3 Line 4\nLine 5 Line 6'.match(/Line \d+/gm),
		'\n'
	);

	// dot-all flag
	console.log('\n dot-all flag :');
	console.log(
		"/cat.dog/.test('cat\\ndog')",
		/cat.dog/.test('cat\ndog'),
		'\n'
	); /* false */

	console.log(
		"/cat.dog/s.test('cat\\ndog')",
		/cat.dog/s.test('cat\ndog'),
		'\n'
	);

	console.log(
		"/cat.dog/s.test('catdog')",
		/cat.dog/s.test('catdog'),
		'\n'
	); /* false */

	// sticky flag
	console.log('\n sticky flag :');
	const text = 'catXcat';
	const regex = /cat/y;
	console.log("'catXcat'.match(/cat/y)", text.match(regex), '\n');
	console.log("'catXcat'.match(/cat/y)", text.match(regex), '\n');

	// description flag [ matches substrings that starts/ends with aa/bb ]
	console.log(
		'\n// description flag [ matches substrings that starts/ends with aa/bb ]'
	);
	console.log(
		"'aaaabb'.match(/(aa)(bb)/d)",
		'aaaabb'.match(/(aa)(bb)/d),
		'\n'
	);
}

// capturing, non-capturing
export function example09() {
	console.log('\n\n title 09');

	console.log(
		"/price is (\\$\\d+\\.\\d+)/.exec('The price is $10.99')",
		/price is (\$\d+\.\d+)/.exec('The price is $10.99')
	); // capturing
	console.log(
		"/price is (?:\\$\\d+\\.\\d+)/.exec('The price is $10.99')",
		/price is (?:\$\d+\.\d+)/.exec('The price is $10.99')
	); // non-capturing

	console.log(
		"/https?://(www.)?([a-zA-Z0-9]+.[a-zA-Z]{2,})(/w*)?/.exec('https://www.example.com/page')",
		/https?:\/\/(www\.)?([a-zA-Z0-9]+\.[a-zA-Z]{2,})(\/\w*)?/.exec(
			'https://www.example.com/page'
		)
	); // capturing
	console.log(
		"/https?://(?:www.)?([a-zA-Z0-9]+.[a-zA-Z]{2,})(/w*)?/.exec('https://www.example.com/page')",
		/https?:\/\/(?:www\.)?([a-zA-Z0-9]+\.[a-zA-Z]{2,})(\/\w*)?/.exec(
			'https://www.example.com/page'
		)
	); // non-capturing
}

// letter L
export function example10() {
	console.log('\n\n title 10');
	console.log("/\\p{Ll}/u.test('a')", /\p{Ll}/u.test('a')); // lowercase
	console.log("/\\p{Lu}/u.test('Z')", /\p{Lu}/u.test('Z')); // uppercase
	console.log("/\\p{Lt}/u.test('ǅ')", /\p{Lt}/u.test('ǅ')); // titlecase
	console.log("/\\p{Lm}/u.test('ˆ')", /\p{Lm}/u.test('ˆ')); // modifier
	console.log("/\\p{Lo}/u.test('©')", /\p{Lo}/u.test('©')); // other
}

// number N
export function example11() {
	console.log('\n\n title 11');
	console.log("/\\p{Nd}/u.test('7')", /\p{Nd}/u.test('7')); // decimal number
	console.log("/\\p{Nl}/u.test('Ⅳ')", /\p{Nl}/u.test('Ⅳ')); // letter number
	console.log("/\\p{No}/u.test('½')", /\p{No}/u.test('½')); // other number
}

// punctuation P
export function example12() {
	console.log('\n\n title 12');
	console.log("/\\p{Pc}/u.test('_')", /\p{Pc}/u.test('_')); // connector
	console.log("/\\p{Pd}/u.test('-')", /\p{Pd}/u.test('-')); // dash
	console.log("/\\p{Pi}/u.test('‘')", /\p{Pi}/u.test('‘')); // initial quote
	console.log("/\\p{Pf}/u.test('’')", /\p{Pf}/u.test('’')); // final quote
	console.log("/\\p{Ps}/u.test('(')", /\p{Ps}/u.test('(')); // open punctuation
	console.log("/\\p{Pe}/u.test(')')", /\p{Pe}/u.test(')')); // close punctuation
	console.log("/\\p{Po}/u.test('@')", /\p{Po}/u.test('@')); // other punctuation
}

// mark M
export function example13() {
	console.log('\n\n title 13');
	console.log("/\\p{Mc}/u.test('́')", /\p{Mc}/u.test('́')); // spacing combining
	console.log("/\\p{Me}/u.test('⃝')", /\p{Me}/u.test('⃝')); // enclosing
	console.log("/\\p{Mn}/u.test('̂')", /\p{Mn}/u.test('̂')); // non-spacing
}

// symbol S
export function example14() {
	console.log('\n\n title 14');
	console.log("/\\p{Sc}/u.test('¥')", /\p{Sc}/u.test('¥')); // currency
	console.log("/\\p{Sk}/u.test('^')", /\p{Sk}/u.test('^')); // modifier
	console.log("/\\p{Sm}/u.test('+')", /\p{Sm}/u.test('+')); // math
	console.log("/\\p{So}/u.test('©')", /\p{So}/u.test('©')); // other symbol
}

// separator Z
export function example15() {
	console.log('\n\n title 15');
	console.log("/\\p{Zl}/u.test('\u2028')", /\p{Zl}/u.test('\u2028')); // line
	console.log("/\\p{Zp}/u.test('\u2029')", /\p{Zp}/u.test('\u2029')); // paragraph
	console.log("/\\p{Zs}/u.test(' ')", /\p{Zs}/u.test(' ')); // space
}

// other C
export function example16() {
	console.log('\n\n title 16');
	console.log("/\\p{Cc}/u.test('\u0001')", /\p{Cc}/u.test('\u0001')); // control
	console.log("/\\p{Cf}/u.test('\u200B')", /\p{Cf}/u.test('\u200B')); // format
	console.log("/\\p{Cn}/u.test('\u{10FFFF}')", /\p{Cn}/u.test('\u{10FFFF}')); // not assigned
	console.log("/\\p{Co}/u.test('\uE000')", /\p{Co}/u.test('\uE000')); // private use
	console.log("/\\p{Cs}/u.test('\uD800')", /\p{Cs}/u.test('\uD800')); // surrogate
}

// alphabetic: Alpha, script: Script=language-name, hexadecimal: Hex_Digit
export function example17() {
	console.log('\n\n title 17');

	console.log("/\\p{Alpha}/u.test('A')", /\p{Alpha}/u.test('A')); // alphabetic

	console.log(
		"/\\p{Script=Arabic}/u.test('مرحبا بك في العالم')",
		/\p{Script=Arabic}/u.test('مرحبا بك في العالم')
	); // script

	console.log("/\\p{Hex_Digit}/u.test('a')", /\p{Hex_Digit}/u.test('a')); // hexadecimal
}

// word boundary
export function example18() {
	console.log('\n\n title 18');
	console.log(
		"'🌍 Hello, 🌏 World!'.match(/\\b\\p{L}+\\b/gu)",
		'🌍 Hello, 🌏 World!'.match(/\b\p{L}+\b/gu)
	);
	console.log(
		"'This is an island, is not it?'.match(/\\bis\\b/g)",
		'This is an island, is not it?'.match(/\bis\b/g)
	);
}

// $&: inserts the whole match
export function example19() {
	console.log('\n\n title 19');
	console.log(
		"'Hello, world!'.replace(/world/, '$& - Universe')",
		'Hello, world!'.replace(/world/, '$& - Universe')
	);
}

// $`: inserts a part of the string before the match
export function example20() {
	console.log('\n\n title 20');
	console.log(
		"'Hello, world!'.replace(/world/, '$`- Universe')",
		'Hello, world!'.replace(/world/, '$`- Universe')
	);
}

// $': inserts a part of the string after the match
export function example21() {
	console.log('\n\n title 21');
	console.log(
		"'Hello, world!'.replace(/world/, '- Universe$'')",
		'Hello, world!'.replace(/world/, "- Universe$'")
	);
}

// $n: if n is a 1-2 digit number, then it inserts the contents of n-th parentheses, more about it in the chapter Capturing groups
export function example22() {
	console.log('\n\n title 22');
	console.log(
		"'John, Doe'.replace(/(John), (Doe)/, '$2, $1')",
		'John, Doe'.replace(/(John), (Doe)/, '$2, $1')
	);
}

// $<name>: inserts the contents of the parentheses with the given name, more about it in the chapter Capturing groups
export function example23() {
	console.log('\n\n title 23');
	console.log(
		"'John, Doe'.replace(/(?<firstName>John), (?<lastName>Doe)/, '$<lastName>, $<firstName>')",
		'John, Doe'.replace(
			/(?<firstName>John), (?<lastName>Doe)/,
			'$<lastName>, $<firstName>'
		)
	);
}

// \$: replaces character $
export function example24() {
	console.log('\n\n title 24');
	console.log(
		"'This costs $100'.replace(/\\$/, '£')",
		'This costs $100'.replace(/\$/, '£')
	);
}
