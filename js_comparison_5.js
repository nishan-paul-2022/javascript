/* eslint-disable eqeqeq */

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
	console.log('"" == "0" / "" == "0" :', '' === '0');
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

StringAndArrayComparison();
StringAndObjectComparison();

NumberAndStringComparison();
NumberAndBooleanComparison();
NumberAndArrayComparison();
NumberAndObjectComparison();

StringAndBooleanComparison();
ArrayAndBooleanComparison();
ObjectAndBooleanComparison();
