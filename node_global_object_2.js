/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */

const v1 = 1;
global.v1 = 11;
const v2 = 2;
global.v3 = 33;

const r1 = () => 4;
global.r1 = () => 44;
const r2 = () => 5;
global.r3 = () => 66;

{
	const v1 = 7;
	console.log(`v1: ${v1}, global.v1: ${global.v1}`);

	const r1 = () => 8;
	console.log(`r1(): ${r1()}, global.r1(): ${global.r1?.()}`);
}

console.log(`v1: ${v1}, global.v1: ${global.v1}`);
console.log(`v2: ${v2}, global.v2: ${global.v2}`);
console.log(`v3: ${v3}, global.v3: ${global.v3}`);
console.log(`r1(): ${r1()}, global.r1(): ${global.r1?.()}`);
console.log(`r2(): ${r2()}, global.r2(): ${global.r2?.()}`);
console.log(`r3(): ${r3()}, global.r3(): ${global.r3?.()}`);
