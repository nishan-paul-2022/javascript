function Func01() {
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

	cat.eat('a');
	console.log(cat.stomach);
	dog.eat('b');
	console.log(dog.stomach);
}

function Func02() {
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

	cat.eat('a');
	console.log(cat.stomach);
	dog.eat('b');
	console.log(dog.stomach);
}

function Func03() {
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

	cat.eat('a');
	console.log(cat.stomach);
	dog.eat('b');
	console.log(dog.stomach);
}

function Func04() {
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

	cat.eat('a');
	console.log(cat.stomach);
	dog.eat('b');
	console.log(dog.stomach);
}

Func01();
Func02();
Func03();
Func04();
