/* eslint-disable use-isnan */
/* eslint-disable eqeqeq */
/* eslint-disable no-constant-condition */

/* falsy / nullish value : false, 0, '', null, undefined, NaN */
function FalsyComparison01() {
	const falsy = [null, undefined, NaN, '', 0, false];
	for (const i of falsy) {
		if (i) {
			console.log(`${i} :`, true);
		} else {
			console.log(`${i} :`, false);
		}
	}
	console.log('' || 'hello');
}

function FalsyComparison02() {
	console.log('"" ? Boolean("") == true :', '' ? true : false);
	console.log('0 ? Boolean(0) == true :', 0 ? true : false);
	console.log('NaN ? Boolean(NaN) == true :', NaN ? true : false);
	console.log('null ? Boolean(null) == true :', null ? true : false);
	console.log(
		'undefined ? Boolean(undefined) == true :',
		undefined ? true : false
	);
}

function NotFalsyComparison02() {
	console.log('"a" ? Boolean("a") == true :', 'a' ? true : false);
	console.log('1 ? Boolean(1) == true :', 1 ? true : false);
	console.log('-1 ? Boolean(-1) == true :', -1 ? true : false);
	console.log('[] ? Boolean([]) == true :', [] ? true : false);
	console.log('[1, 2] ? Boolean([]) == true :', [] ? true : false);
	console.log('{} ? Boolean({}) == true :', {} ? true : false);
}

function NaNComparison() {
	console.log('NaN == "" :', NaN == '');
	console.log('NaN == "NaN" :', NaN == 'NaN');
	console.log('NaN == 0 :', NaN == 0);
	console.log('NaN == NaN :', NaN == NaN);
	console.log('NaN == true :', NaN == true);
	console.log('NaN == false :', NaN == false);
	console.log('NaN == [] :', NaN == []);
}

function NullComparison() {
	console.log('null == "" :', null == '');
	console.log('null == "null" :', null == 'null');
	console.log('null == 0 :', null == 0);
	console.log('null == NaN :', null == NaN);
	console.log('null == true ', null == true);
	console.log('null == false ', null == false);
	console.log('null == [] :', null == []);
	console.log('null == null :', null === null);
}

function UndefinedComparison() {
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

FalsyComparison01();
FalsyComparison02();
NotFalsyComparison02();

NaNComparison();
NullComparison();
UndefinedComparison();

/*
	2 kinds of variable : let and const
		: variable -> pointer -> memory address -> value
		: we can change pointer for let variable (reassign)
		: we can't change pointer for const variable (no reassign)

	2 kinds of object :
		: primitive object [ frozen | using value ]
		: reference object [ not frozen | using pointer ]
	
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
