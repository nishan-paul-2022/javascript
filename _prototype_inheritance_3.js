const animal = {
	eats: true
};

function Rabbit(name) {
	this.name = name;
}

Rabbit.prototype = animal;

const rabbit = new Rabbit('White Rabbit'); //  rabbit.__proto__ == animal

console.log(rabbit.eats); // true

const num = [1, 2, 3];
// num.__proto__ = Number.prototype;
console.log(num);
console.log(
	num.reduce((x, y) => {
		return x + y;
	})
);
console.log(num.__proto__);

const obj3 = {
	a: 1,
	b: () => {
		return console.log('OK');
	}
};
const obj4 = { ...obj3 };
obj4.a = 11;
console.log(obj4);
console.log(obj3);

class xyz {
	constructor() {
		this.x = 100;
	}
}
console.log(xyz.prototype.constructor);

const hello = [];
console.log(typeof hello);
