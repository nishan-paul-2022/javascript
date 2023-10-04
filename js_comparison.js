/* eslint-disable use-isnan */
/* eslint-disable eqeqeq */

console.log(5 % 2);
console.log(5 ** 2);
const x = undefined;
const y = 10;
const z = x ?? y;
console.log(z);

const i = 1;
const j = new Number(1);
console.log(i == j);
console.log(i === j);
if (NaN) {
	console.log(true);
} else {
	console.log(false);
}

const nn = NaN;
console.log(isNaN(nn));

const m = {
	k1: 1,
	k2: 2
};
const n = {
	k1: 1,
	k2: 2
};
console.log(m == n);

// type coercion will happen for any kind of comparison except strict equality operator ===
console.log(`null == undefined : ${null == undefined}`);
console.log(`5 == "5" : ${5 == '5'}`);
console.log(`0 == "" : ${0 == ''}`);
console.log(`"" == false : ${'' == false}`);
console.log(`NaN == false : ${NaN == false}`);
console.log(`2 == true : ${2 == true}`);
console.log(`"" == [] : ${'' == []}`);
console.log(`false == [] : ${false == []}`);
console.log(`0 == [] : ${0 == []}`);
console.log(`null == 0 : ${null == 0}`);
console.log(`null == [] : ${null == []}`);
console.log(`null == false : ${null == false}`);

// no type coercion
console.log(`5 === "5" : ${5 === '5'}`); //

/*
	- arithmatic operator
	- assign operator 
	- ternary operator ?
	- nullish coalescing operator ??
	- logical operator 
	- bitwise operator
	- comparison operator

	- dot notation using member as identifier
	- bracket notation using member as string variable
*/
