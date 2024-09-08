class RandomClass {
	#name = 'Daredevil';

	getName() {
		return this.#name;
	}

	get Name() {
		return this.#name;
	}

	set Name(newName) {
		this.#name = newName;
	}
}

function print1(random) {
	try {
		console.log(random.getName());
		console.log(random.Name);
		random.Name = 'Batman';
	} catch (error) {
		console.log(error.message);
	}
}

function print2(map1) {
	try {
		map1.set(2, 'b');
		console.log(map1.get(1));
		console.log(map1.get(2));
	} catch (error) {
		console.log(error.message);
	}
}

function Usecase01() {
	const random = new RandomClass();
	print1(random);
}

function Usecase02() {
	const random = new RandomClass();
	const { getName, Name } = random;
	const getNameBinded = getName.bind(random);

	try {
		console.log(Name);
		console.log(getNameBinded());
		console.log(getName());
	} catch (error) {
		console.log(error.message);
	}
}

function Usecase03() {
	let random = new RandomClass();
	random = new Proxy(random, {});
	print1(random);
}

function Usecase04() {
	let random = new RandomClass();

	random = new Proxy(random, {
		get(target, prop) {
			let value = target[prop];
			value = typeof value === 'function' ? value.bind(target) : value;
			return value;
		},
		set(target, prop, value) {
			target[prop] = value;
			return true;
		}
	});

	print1(random);
}

function Usecase05() {
	const map = new Map([[1, 'a']]);
	print2(map);
}

function Usecase06() {
	let map = new Map([[1, 'a']]);
	map = new Proxy(map, {});
	print2(map);
}

function Usecase07() {
	let map = new Map([[1, 'a']]);

	map = new Proxy(map, {
		get(target, prop) {
			let value = target[prop];
			value = typeof value === 'function' ? value.bind(target) : value;
			return value;
		}
	});

	print2(map);
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();

Usecase05();
Usecase06();
Usecase07();

/*
- map, set, weakmap, weakset, date, promise, and private-member make use of internal-slot
- internal-method uses root-object as context
- internal-slot uses proxy-object as context */
