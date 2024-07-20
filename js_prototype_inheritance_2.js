function F01() {
	const animal = {
		stomach: [],
		eat(food) {
			this.stomach.push(food);
		}
	};

	const cat = {
		__proto__: animal
	};

	const dog = {
		__proto__: animal
	};

	cat.eat('rice');
	console.log(cat.stomach);

	dog.eat('meat');
	console.log(dog.stomach);
}

function F02() {
	const animal = {
		stomach: [],
		eat(food) {
			this.stomach = [food];
		}
	};

	const cat = {
		__proto__: animal
	};

	const dog = {
		__proto__: animal
	};

	cat.eat('rice');
	console.log(cat.stomach);

	dog.eat('meat');
	console.log(dog.stomach);
}

function F03() {
	const animal = {
		eat(food) {
			this.stomach = food;
		}
	};

	const cat = {
		__proto__: animal
	};

	const dog = {
		__proto__: animal
	};

	cat.eat('rice');
	console.log(cat.stomach);

	dog.eat('meat');
	console.log(dog.stomach);
}

function F04() {
	const animal = {
		eat(food) {
			this.stomach.push(food);
		}
	};

	const cat = {
		stomach: [],
		__proto__: animal
	};

	const dog = {
		stomach: [],
		__proto__: animal
	};

	cat.eat('rice');
	console.log(cat.stomach);

	dog.eat('meat');
	console.log(dog.stomach);
}

F01();
F02();
F03();
F04();
