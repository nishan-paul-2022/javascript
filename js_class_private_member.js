class PrivateMember {
	#name;
	#age;
	#height;
	anything = Math.E;

	constructor(age, height) {
		this.#age = age;
		this.#height = height;
	}

	set FullName(name) {
		this.#name = name;
	}

	get FullName() {
		return this.#name;
	}

	#FullBio() {
		console.log(this.#name);
		console.log(this.#age);
		console.log(this.#height);
	}

	FullBio() {
		console.log(this['anything']);
		this.#FullBio();
	}
}

const privateMember = new PrivateMember(27, 5.5);
privateMember.FullName = 'Jhon Wick';
privateMember.FullBio();

// this['#memberName'] | invalid
