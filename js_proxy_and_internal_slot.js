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

function print1(randomObj) {
	try {
		console.log(randomObj.getName());
		console.log(randomObj.Name);
		randomObj.Name = 'Batman';
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

function UseCase01() {
	console.log('\n - Usecase 01');
	const randomObj = new RandomClass();
	print1(randomObj);
}

function UseCase02() {
	console.log('\n - Usecase 02');
	const randomObj = new RandomClass();
	const { getName, Name } = randomObj;
	const getNameBinded = getName.bind(randomObj);

	try {
		console.log(Name);
		console.log(getNameBinded());
		console.log(getName());
	} catch (error) {
		console.log(error.message);
	}
}

function UseCase03() {
	console.log('\n - Usecase 03');
	let randomObj = new RandomClass();
	randomObj = new Proxy(randomObj, {});
	print1(randomObj);
}

function UseCase04() {
	console.log('\n - Usecase 04');
	let randomObj = new RandomClass();

	randomObj = new Proxy(randomObj, {
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

	print1(randomObj);
}

function UseCase05() {
	console.log('\n - Usecase 05');
	const map1 = new Map([[1, 'a']]);
	print2(map1);
}

function UseCase06() {
	console.log('\n - Usecase 06');
	let map1 = new Map([[1, 'a']]);
	map1 = new Proxy(map1, {});
	print2(map1);
}

function UseCase07() {
	console.log('\n - Usecase 07');
	let map1 = new Map([[1, 'a']]);

	map1 = new Proxy(map1, {
		get(target, prop) {
			let value = target[prop];
			value = typeof value === 'function' ? value.bind(target) : value;
			return value;
		}
	});

	print2(map1);
}

UseCase01();
UseCase02();
UseCase03();
UseCase04();
UseCase05();
UseCase06();
UseCase07();

/*
- map, set, weakmap, weakset, date, promise, private-member make use of internal-slot
- internal-method uses root-object as context
- internal-slot uses proxy-object as context
*/
