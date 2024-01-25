/* eslint-disable use-isnan */
/* eslint-disable no-constant-condition */
/* eslint-disable eqeqeq */

function ObjectInOperation(regular) {
	console.log('\n\n// regular.constructor :', regular.constructor);

	console.log('regular.toString() :', regular.toString());
	console.log('regular.valueOf() :', regular.valueOf());

	console.log('regular :', regular);
	console.log('regular + string :', regular + ' string');
	console.log('regular + 0 :', regular + 0);
	console.log('regular * 1 :', regular * 1);
	console.log('+regular :', +regular);
	console.log('regular == "Math.PI" :', regular == 'Math.PI');
	console.log('regular == Math.PI :', regular == Math.PI);
	console.log('regular == true :', regular == true);
}

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

function ReturnFalseWhileChecking() {
	console.log('\n\n- Return False While Checking');
	console.log('"" ? Boolean("") == true :', '' ? true : false);
	console.log('0 ? Boolean(0) == true :', 0 ? true : false);
	console.log('NaN ? Boolean(NaN) == true :', NaN ? true : false);
	console.log('null ? Boolean(null) == true :', null ? true : false);
	console.log(
		'undefined ? Boolean(undefined) == true :',
		undefined ? true : false
	);
}

function ReturnTrueWhileChecking() {
	console.log('\n\n- Return True While Checking');
	console.log('"a" ? Boolean("a") == true :', 'a' ? true : false);
	console.log('1 ? Boolean(1) == true :', 1 ? true : false);
	console.log('-1 ? Boolean(-1) == true :', -1 ? true : false);
	console.log('[] ? Boolean([]) == true :', [] ? true : false);
	console.log('[1, 2] ? Boolean([]) == true :', [] ? true : false);
	console.log('{} ? Boolean({}) == true :', {} ? true : false);
}

function NaNComparison() {
	console.log('\n\n- Comparison By Nan');
	console.log('NaN == "" :', NaN == '');
	console.log('NaN == "NaN" :', NaN == 'NaN');
	console.log('NaN == 0 :', NaN == 0);
	console.log('NaN == NaN :', NaN == NaN);
	console.log('NaN == true :', NaN == true);
	console.log('NaN == false :', NaN == false);
	console.log('NaN == [] :', NaN == []);
}

function NullComparison() {
	console.log('\n\n- Comparison By null');
	console.log('null == "" :', null == '');
	console.log('null == "null" :', null == 'null');
	console.log('null == 0 :', null == 0);
	console.log('null == NaN :', null == NaN);
	console.log('null == true ', null == true);
	console.log('null == false ', null == false);
	console.log('null == [] :', null == []);
	console.log('null == null :', null == null);
}

function UndefinedComparison() {
	console.log('\n\n- Comparison By undefined');
	console.log('undefined == "" :', undefined === '');
	console.log('undefined == "undefined" :', undefined === 'undefined');
	console.log('undefined == 0 :', undefined == 0);
	console.log('undefined == NaN :', undefined == NaN);
	console.log('undefined == true :', undefined == true);
	console.log('undefined == false :', undefined == false);
	console.log('undefined == [] :', undefined == []);
	console.log('undefined == null :', undefined == null);
	console.log('undefined == undefined :', undefined == undefined);
}

function StringAndArrayComparison() {
	console.log('\n\n- string and array comparison');
	console.log('"" == [] / "" == "" :', '' == []);
	console.log('"" == [0] / "" == "0" :', '' == [0]);
	console.log('"0" == [] / "0" == "" :', '0' == []);
	console.log('"0" == [0] / "0" == "0" :', '0' == [0]);
	console.log('"5" == [5] / 5 == 5 :', '5' == [5]);
	console.log('"1,2" == [1, 2] / "1,2" == "1,2" :', '1,2' == [1, 2]);
}

function StringAndObjectComparison() {
	console.log('\n\n- string and object comparison');
	console.log(
		'"[object Object]" == { a: 1 } / "[object Object]" == "[object Object]" :',
		'[object Object]' == { a: 1 }
	);
}

function NumberAndStringComparison() {
	console.log('\n\n- number and string comparison');
	console.log('0 == "" / 0 == 0 :', 0 == '');
	console.log('0 == "0" / 0 == 0 :', 0 == '0');
	console.log('5 == "5" / 5 == 5 :', 5 == '5');
	console.log('5 == " 5 " / 5 == 5 :', 5 == ' 5 ');
	console.log('"" == "0" / "" == "0" :', '' == '0');
}

function NumberAndBooleanComparison() {
	console.log('\n\n- number and boolean comparison');
	console.log('0 == false / 0 == 0 :', 0 == false);
	console.log('1 == true / 1 == 1 :', 1 == true);
	console.log('2 == true / 2 == 1 :', 2 == true);
	console.log('2 == false / 2 == 0 :', 2 == false);
}

function NumberAndArrayComparison() {
	console.log('\n\n- number and array comparison');
	console.log('0 == [] / 0 == 0 :', [] == 0);
	console.log('0 == [0] / 0 == 0 :', [] == 0);
	console.log('5 == [5] / 5 == 5 :', [5] == 5);
	console.log('5 == [1, 5] / 5 == NaN :', [1, 5] == 5);
	console.log('[] == [0] / [] == [0] :', [] == [0]);
}

function NumberAndObjectComparison() {
	console.log('\n\n- number and object comparison');
	console.log('1 == {} / NaN == 1 :', 1 == {});
	console.log('0 == {} / NaN == 0 :', 0 == {});
}

function StringAndBooleanComparison() {
	console.log('\n\n- string and boolean comparison');
	console.log('"" == false / 0 == 0 :', '' == false);
	console.log('"0" == false / 0 == 0 :', '0' == false);
	console.log('"1" == true / 1 == 1 :', '1' == true);
	console.log('" 1 " == true / 1 == 1 :', ' 1 ' == true);
	console.log('"a1" == true / NaN == 1 :', 'a1' == true);
	console.log('"a1" == false / NaN == 0 :', 'a1' == false);
	console.log('"true" == true / NaN == 1 :', 'true' == true);
}

function ArrayAndBooleanComparison() {
	console.log('\n\n- array and boolean comparison');
	console.log('[] == false / 0 == 0 :', [] == false);
	console.log('[0] == false / 0 == 0 :', [0] == false);
	console.log('[1] == true / 1 == 1 :', [1] == true);
	console.log('[2] == true / 2 == 1 :', [2] == true);
	console.log('[2] == false / 2 == 0 :', [2] == false);
	console.log('[1, 2] == true / NaN == 1 :', [1, 2] == true);
	console.log('[1, 2] == false / NaN == 0 :', [1, 2] == false);
}

function ObjectAndBooleanComparison() {
	console.log('\n\n- object and boolean comparison');
	console.log('{} == true / NaN == 1 :', {} == true);
	console.log('{} == false / NaN == 0 :', {} == false);
}

function ObjectInOperationDefault() {
	console.log('\n\n- Default Conversion');

	const string1 = 'Math.PI';
	const number1 = Math.PI;
	const boolean1 = true;
	const array1 = [1, 2, 3];
	const regular1 = { a: 1, b: 2 };

	ObjectInOperation(string1);
	ObjectInOperation(number1);
	ObjectInOperation(boolean1);
	ObjectInOperation(array1);
	ObjectInOperation(regular1);
}

function ObjectInInOperationCustomized() {
	console.log('\n\n- Customized Conversion');

	const regular1 = {
		toString: function () {
			return 'Math.PI';
		},

		valueOf: function () {
			return Math.PI;
		}
	};

	const regular2 = {
		[Symbol.toPrimitive]: function (hint) {
			if (hint === 'string') {
				return 'Math.PI';
			} else if (hint === 'number') {
				return Math.PI;
			} else {
				return true;
			}
		}
	};

	ObjectInOperation(regular1);
	ObjectInOperation(regular2);
}

function BooleanConversionInExpression() {
	const v = [undefined, null, false, ''];
	for (const i of v) {
		if (!i) {
			console.log('helloWorld');
		}
	}
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

ReturnFalseWhileChecking();
ReturnTrueWhileChecking();

NaNComparison();
NullComparison();
UndefinedComparison();

StringAndArrayComparison();
StringAndObjectComparison();

NumberAndStringComparison();
NumberAndBooleanComparison();
NumberAndArrayComparison();
NumberAndObjectComparison();

StringAndBooleanComparison();
ArrayAndBooleanComparison();
ObjectAndBooleanComparison();

ObjectInOperationDefault();
ObjectInInOperationCustomized();

BooleanConversionInExpression();

/*
	@ comparison
		# (x != true) and (x == false) : not-equivalent
		# (x !== true) and (x === false) : not-equivalent

	@ loose-comparison
		# operand1-type and operand2-type / value1 and value2
		# operand1-string and operand2-array / operand1-string and operand2-string / value1 and value2
		# operand1-string and operand2-object / operand1-string and operand2-string / value1 and value2
		# operand1-type1 and operand2-type2	/ operand1-number and operand2-number / value1 and value2

	@ strict-comparison
		# operand1 and operand2 / [ type1 and type2 ] and [ value1 and value2 ]

	@ conversion : string => number 
		# '' => 0
		# 'number' => number
		# non-numeric-and-non-empty string => NaN

	@ conversion : string => boolean 
		# '' => false
		# non-empty-string => true 

	@ conversion : number => string 
		# number => 'number'

	@ conversion : number => boolean 
		# 0 => false
		# NaN => false
		# any-other-number => true 

	@ conversion : boolean => string
		# true => 'true'
		# false => 'false'

	@ conversion : boolean => number 
		# true => 1
		# false => 0

	@ conversion : array => string
		# [] => ''
		# [e1] => 'e1'
		# [e1, e2] => 'e1,e2'

	@ conversion : array => number 
		# [] => 0
		# [number] => number
		# any-other-array => NaN

	@ conversion : array => boolean 
		# any-array => true

	@ conversion : object => string
		# null => null
		# undefined => undefined 
		# any-other-object => [object Object]

	@ conversion : object => number 
		# null => 0
		# any-other-object => NaN

	@ conversion : object => boolean 
		# null => false 
		# undefined => false
		# any-other-object => true

	@ conversion : NaN, null, and undefined
		# NaN isn't equivalent with anyone
		# null isn't equivalent with anyone except null and undefined
		# undefined isn't equivalent with anyone except null and undefined

	@ conversion : condition checking
		# !(x && y) and (!x || !y) are equivalent 
		# in a logical expression, every argument must be boolean
		# if only x / !x is given in a condition checking, it is converted into following logical expression : 
			- x => Boolean(x) == true
			- !x => !Boolean(x) == true

	@ conversion : object in operation 
		# number1 + number2 / no-conversion => add
		# number1 + boolean2 / number-conversion => add
		# type1 + type2 / string-conversion => concat
		# any-type-with-any-other-operator / number-conversion => any-other-operator

	@ conversion : toString(), valueOf(), Symbol.toPrimitive(hint)
		# every object has default toString() and valueOf() [ can be re-defined ]
		# object can have a new method called Symbol.toPrimitive(hint) to override toString() and valueOf()
		# toString() is invoked for alert
		# re-defined valueOf() is invoked for every operation, comparison
		# Symbol.toPrimitive(hint) is invoked for every operation, comparison, alert
		# Symbol.toPrimitive(hint) returns on basis of hint and hint varies on basis of operation, comparison, alert
			- add-operator 			: default
			- any-other-operator 	: number
			- comparison 			: default
			- alert 				: string
*/
