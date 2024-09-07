/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */

const v1 = 1;
global.v1 = 2;
const v2 = 3;
global.v3 = 4;

const r1 = () => 5;
global.r1 = () => 6;
const r2 = () => 7;
global.r3 = () => 8;

function random() {
	const v1 = 9;
	console.log(`v1: ${v1}, global.v1: ${global.v1}`);

	const r1 = () => 10;
	console.log(`r1(): ${r1()}, global.r1(): ${global.r1?.()}`);
}

random();

console.log(`v1: ${v1}, global.v1: ${global.v1}`);
console.log(`v2: ${v2}, global.v2: ${global.v2}`);
console.log(`v3: ${v3}, global.v3: ${global.v3}`);
console.log(`r1(): ${r1()}, global.r1(): ${global.r1?.()}`);
console.log(`r2(): ${r2()}, global.r2(): ${global.r2?.()}`);
console.log(`r3(): ${r3()}, global.r3(): ${global.r3?.()}`);
