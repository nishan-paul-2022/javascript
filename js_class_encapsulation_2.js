class UserProfile {
	#name;
	#age;
	#height;
	#weight;
	#ID = Math.E;

	constructor(name, age, height, weight) {
		this.#name = name;
		this.#age = age;
		this.#height = height;
		this.#weight = weight;
	}

	set currentAge(age) {
		this.#age = age;
	}

	get currentAge() {
		return this.#age;
	}

	set currentWeight(weight) {
		this.#weight = weight;
	}

	get currentWeight() {
		return this.#weight;
	}

	fullBio() {
		console.log(
			this.#ID,
			this.#name,
			this.#age,
			this.#height,
			this.#weight
		);
	}
}

function F01() {
	const user = new UserProfile('Logan', 27, 5.5, 57);
	user.currentAge = 35;
	console.log(user.currentAge);
	user.fullBio();
}

function F02() {
	const user = new UserProfile('Logan', 27, 5.5, 57);
	user.currentWeight = 70;
	console.log(user.currentWeight);
	user.fullBio();
}

F01();
F02();
