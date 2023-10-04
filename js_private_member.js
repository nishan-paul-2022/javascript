class PrivateMember {
	#name;
	#age;
	#height;

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
		this.#FullBio();
	}
}

const privateMember = new PrivateMember(27, 5.5);
privateMember.FullName = 'Jhon Wick';
privateMember.FullBio();

// this['#memberName'] | invalid
