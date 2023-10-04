/* eslint-disable eqeqeq */

const uid1 = Symbol();
console.log(uid1);

const uid2 = Symbol('name');
console.log(uid2);
console.log(uid2.description);
console.log(uid2.toString());

const uid3 = Symbol('name');
console.log(uid2 == uid3);
console.log(uid2 === uid3);

// let localSymbol = Symbol("hello");
// let globalSymbol = Symbol.for("hello");
// console.log(Symbol.keyFor(localSymbol));
// console.log(Symbol.keyFor(globalSymbol));

// object property key : string and symbol
