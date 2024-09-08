function Usecase01() {
	const animal = {
		stomach: [],
		eat(food) {
			this.stomach.push(food);
		}
	};

	const lion = {
		__proto__: animal
	};

	const tiger = {
		__proto__: animal
	};

	lion.eat('almond milk');
	console.log(lion.stomach);

	tiger.eat('red meat');
	console.log(tiger.stomach);
}

function Usecase02() {
	const animal = {
		stomach: [],
		eat(food) {
			this.stomach = [food];
		}
	};

	const lion = {
		__proto__: animal
	};

	const tiger = {
		__proto__: animal
	};

	lion.eat('almond milk');
	console.log(lion.stomach);

	tiger.eat('red meat');
	console.log(tiger.stomach);
}

function Usecase03() {
	const animal = {
		eat(food) {
			this.stomach = food;
		}
	};

	const lion = {
		__proto__: animal
	};

	const tiger = {
		__proto__: animal
	};

	lion.eat('almond milk');
	console.log(lion.stomach);

	tiger.eat('red meat');
	console.log(tiger.stomach);
}

function Usecase04() {
	const animal = {
		eat(food) {
			this.stomach.push(food);
		}
	};

	const lion = {
		stomach: [],
		__proto__: animal
	};

	const tiger = {
		stomach: [],
		__proto__: animal
	};

	lion.eat('almond milk');
	console.log(lion.stomach);

	tiger.eat('red meat');
	console.log(tiger.stomach);
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();
