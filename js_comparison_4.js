function StringToNumber() {
	console.log('\n\n- string => number');
	console.log('Number("") :', Number(''));
	console.log('Number("1") :', Number('1'));
	console.log('Number("NaN") :', Number('NaN'));
	console.log('Number("a1b2") :', Number('a1b2'));
}

function StringToBoolean() {
	console.log('\n\n- string => boolean');
	console.log('Boolean("") :', Boolean(''));
	console.log('Boolean("0") :', Boolean('0'));
	console.log('Boolean("true") :', Boolean('true'));
	console.log('Boolean("false") :', Boolean('false'));
	console.log('Boolean("a1b2") :', Boolean('a1b2'));
}

function NumberToString() {
	console.log('\n\n- number => string');
	console.log('String(1) :', String(1));
	console.log('String(NaN) :', String(NaN));
}

function NumberToBoolean() {
	console.log('\n\n- number => boolean');
	console.log('Boolean(0) :', Boolean(0));
	console.log('Boolean(NaN) :', Boolean(NaN));
	console.log('Boolean(1) :', Boolean(1));
	console.log('Boolean(2) :', Boolean(2));
}

function BooleanToString() {
	console.log('\n\n- boolean => string');
	console.log('String(true) :', String(true));
	console.log('String(false) :', String(false));
}

function BooleanToNumber() {
	console.log('\n\n- boolean => number');
	console.log('Number(true) :', Number(true));
	console.log('Number(false) :', Number(false));
}

function ArrayToString() {
	console.log('\n\n- array => string');
	console.log('String([]) :', String([]));
	console.log('String([1]) :', String([1]));
	console.log('String([1, 2]) :', String([1, 2]));
	console.log('String(["a"]) :', String(['a']));
}

function ArrayToNumber() {
	console.log('\n\n- array => number');
	console.log('Number([]) :', Number([]));
	console.log('Number([1]) :', Number([1]));
	console.log('Number([1, 2]) :', Number([1, 2]));
	console.log('Number(["a"]) :', Number(['a']));
}

function ArrayToBoolean() {
	console.log('\n\n- array => boolean');
	console.log('Boolean([]) :', Boolean([]));
	console.log('Boolean([1]) :', Boolean([1]));
	console.log('Boolean([1, 2]) :', Boolean([1, 2]));
	console.log('Boolean(["a"]) :', Boolean(['a']));
}

function ObjectToString() {
	console.log('\n\n- object => string');
	console.log('String(null) :', String(null));
	console.log('String(undefined) :', String(undefined));
	console.log('String({}) :', String({}));
	console.log('String({ a: 1 }) :', String({ a: 1 }));
}

function ObjectToNumber() {
	console.log('\n\n- object => number');
	console.log('Number(null) :', Number(null));
	console.log('Number(undefined) :', Number(undefined));
	console.log('Number({}) :', Number({}));
	console.log('Number({ a: 1 }) :', Number({ a: 1 }));
}

function ObjectToBoolean() {
	console.log('\n\n- object => boolean');
	console.log('Boolean(null) :', Boolean(null));
	console.log('Boolean(undefined) :', Boolean(undefined));
	console.log('Boolean({}) :', Boolean({}));
	console.log('Boolean({ a: 1 }) :', Boolean({ a: 1 }));
}

StringToNumber();
StringToBoolean();

NumberToString();
NumberToBoolean();

BooleanToString();
BooleanToNumber();

ArrayToString();
ArrayToNumber();
ArrayToBoolean();

ObjectToString();
ObjectToNumber();
ObjectToBoolean();
