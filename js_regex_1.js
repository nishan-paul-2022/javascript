function match1(text, regex) {
	const result = text.match(regex);
	console.log(result);
}

function match2(text, regex) {
	const result = text.matchAll(regex);
	for (const i of result) {
		console.log(i);
	}
}

function match3(text, regex) {
	let result;
	while ((result = regex.exec(text)) !== null) {
		console.log(result);
	}
}

function search(text, regex) {
	const idx = text.search(regex);
	console.log(idx);
}

function replace(text, regex) {
	const newText = text.replace(regex, 'dogs');
	console.log(newText);
}

const text = 'I love cats. Cats are easy to love. Cats are very popular.';

const pattern = 'Cats';
const flag = 'gi';

const regex1 = /Cats/;
const regex2 = /Cats/i;
const regex3 = /Cats/gi;
const regex4 = new RegExp(pattern, flag);

match1(text, regex1);
match1(text, regex2);
match1(text, regex3);
match1(text, regex4);

match2(text, regex4);

match3(text, regex4);

search(text, regex4);

replace(text, regex4);
