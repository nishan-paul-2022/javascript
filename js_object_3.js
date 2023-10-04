const object = {
	i: 1,
	j: 2,
	k: 3,
	Fn: function () {
		console.log('FN');
	}
};

function ForOfLoop() {
	for (const key in object) {
		console.log(`${key}: ${object[key]}`);
	}

	const keys = Object.keys(object);

	for (let idx = 0; idx < keys.length; idx++) {
		const key = keys[idx];
		console.log(`${key}: ${object[key]}`);
	}

	for (const key of keys) {
		console.log(`${key}: ${object[key]}`);
	}
}

function Destructuring() {
	const { i, j, k, Fn } = object;
	console.log(i);
	console.log(j);
	console.log(k);
	console.log(Fn);

	const { i: ii, j: jj, k: kk, Fn: Fnn } = object;
	console.log(ii);
	console.log(jj);
	console.log(kk);
	console.log(Fnn);

	const p = 10;
	const q = 3.1416;
	const r = 'hello';
	const Sn = () => {
		return console.log('SN');
	};
	const object1 = { p: p, q: q, r: r, Sn: Sn };
	const object2 = { p, q, r, Sn }; // shorthand member name

	console.log(object1.p);
	console.log(object1.q);
	console.log(object1.r);
	console.log(object1.Sn);

	console.log(object2.p);
	console.log(object2.q);
	console.log(object2.r);
	console.log(object2.Sn);
}

function CheckKey() {
	const x = { a: 1, b: 2, c: 3 };
	console.log('a' in x);
}

ForOfLoop();
Destructuring();
CheckKey();

// key-value pair
// Id[key] = value | regular assign
// Id = { key: value } | colon assign
// for (value of iterator)
// for (key in object)
