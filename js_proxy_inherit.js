class RandomClass {
	location = 'newYork';

	getLocation() {
		return this.location;
	}

	get Location() {
		return this.location;
	}
}

function print(objectInherit) {
	const object = {
		location: 'gotham',
		__proto__: objectInherit
	};

	console.log(
		`
        object.location / ${object.location}, 
        object.getLocation() / ${object.getLocation()}, 
        object.Location / ${object.Location}
        `
	);
}

function UseCase01() {
	const object1 = new RandomClass();

	const object2 = new Proxy(object1, {});

	const object3 = new Proxy(object1, {
		get(target, prop) {
			return target[prop];
		},
		apply(target, _thisValue) {
			target();
		}
	});

	const object4 = new Proxy(object1, {
		get(target, prop, receiver) {
			return Reflect.get(target, prop, receiver);
		}
	});

	print(object1);
	print(object2);
	print(object3);
	print(object4);
}

UseCase01();
