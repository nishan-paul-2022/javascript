// destructuring with alias and default value
function Usecase01() {
	const object = { ID: 1, name: 'paul', city: 'Dhaka' };

	const {
		ID,
		name: fullName,
		city: state = 'Hawaii',
		address = '3/4'
	} = object;

	console.log(ID);
	console.log(fullName);
	console.log(state);
	console.log(address);
}

function Usecase02() {
	const object = { i: undefined, j: null };
	const { i: undef, j: nul } = object;
	console.log(undef);
	console.log(nul);
}

function Usecase03() {
	const object = {
		a: 1,
		b: 2,
		__proto__: {
			c: 3,
			d: 4,
			__proto__: {
				e: 5,
				f: 6
			}
		}
	};

	const { a, b, c, d, e, f } = object;
	console.log(a, b, c, d, e, f);
}

function Usecase04() {
	const object = {
		a: 1,
		b: {
			c: 3,
			d: {
				e: 6
			}
		}
	};

	function random({
		b: {
			d: { e: value }
		}
	}) {
		console.log(value);
	}
	random(object);

	const {
		b: {
			d: { e: value }
		}
	} = object;
	console.log(value);

	const { b: batman } = object;
	console.log(batman.d.e);
}

// computed property name : using literal as peoperty name
function Usecase05() {
	const key = 'success';
	const isBatman = 'is-Batman';

	const object = {
		name: 'Batman',
		key: 'Superman',
		[key]: 'Ironmen',
		isBatman: 'Spiderman',
		[isBatman]: () => {
			console.log('Antman');
		}
	};

	console.log(object.name, object['name']);
	console.log(object.key, object['key']);
	console.log(object[key]);
	console.log(object.isBatman, object['isBatman']);
	object[isBatman]();

	const {
		name: Batman,
		key: Superman,
		[key]: Ironman,
		isBatman: Spiderman,
		[isBatman]: Antman
	} = object;

	console.log(Batman);
	console.log(Superman);
	console.log(Ironman);
	console.log(Spiderman);
	Antman();
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();
Usecase05();
