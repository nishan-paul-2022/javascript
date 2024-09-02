class MemberOfClass {
	count = 0;
	static count = 0;

	#ID = 1604085;
	static #NewID = 1162036;

	name = 'paul';

	constructor(height, weight) {
		this.height = height;
		this.weight = weight;
		this.count++;
		MemberOfClass.count++;
	}

	#value() {
		console.log(this.count);
		console.log(this.#ID);
	}

	static #asset() {
		console.log(this.count);
		console.log(this.#NewID);
	}

	value() {
		this.#value();
	}

	static value() {
		this.#asset();
	}

	get counter() {
		return this.count;
	}

	set counter(count) {
		this.count = count;
	}

	static get counter() {
		return this.count;
	}

	static set counter(count) {
		this.count = count;
	}

	method01() {
		console.log('method-01');

		this.age = 27;

		this.method02 = function () {
			console.log('method-02');
		};

		this.method03 = function () {
			console.log('method-03');

			function random() {
				console.log('random');
			}

			return random;
		};

		this.method04 = function () {
			console.log('method-04');
			return this.method02;
		};
	}
}

const instance = new MemberOfClass(5.5, 65);

MemberOfClass.counter = 10;
console.log(MemberOfClass.counter);
console.log(MemberOfClass.count);
MemberOfClass.value();

instance.counter = 11;
console.log(instance.counter);
console.log(instance.count);
instance.value();

instance.method01();
instance.method02();
const func01 = instance.method03();
const func02 = instance.method04();
func01();
func02();

console.log(instance.name);
console.log(instance.height);
console.log(instance.weight);
console.log(instance.age);
