class RandomClass {
	location = 'Gotham';

	getLocation() {
		return this.location;
	}

	get Location() {
		return this.location;
	}

	set Location(newLocation) {
		this.location = newLocation;
	}
}

function log(object) {
	console.log(
		`
        object.location / ${object.location}, 
        object.getLocation() / ${object.getLocation()}, 
        object.Location / ${object.Location}
        `
	);
}

function print1(proto) {
	const end = {
		__proto__: proto
	};

	log(end);
	end.Location = 'Dhaka';
	log(end);
}

function print2(root, proto) {
	const end = {
		__proto__: proto
	};

	end.Location = 'Dhaka';
	log(end);
	log(root);
}

function Usecase01() {
	const root = new RandomClass();

	const proxy1 = new Proxy(root, {
		get(target, prop) {
			return target[prop];
		}
	});

	const proxy2 = new Proxy(root, {
		get(target, prop, receiver) {
			return Reflect.get(target, prop, receiver);
		}
	});

	print1(proxy1);
	print1(proxy2);
}

function Usecase02() {
	const root1 = new RandomClass();
	const proxy1 = new Proxy(root1, {
		get: function (target, property, receiver) {
			return Reflect.get(target, property, receiver);
		},
		set: function (target, property, value) {
			return Reflect.set(target, property, value);
		}
	});

	const root2 = new RandomClass();
	const proxy2 = new Proxy(root2, {
		get: function (target, property, receiver) {
			return Reflect.get(target, property, receiver);
		},
		set: function (target, property, value, receiver) {
			return Reflect.set(target, property, value, receiver);
		}
	});

	print2(root1, proxy1);
	print2(root2, proxy2);
}

Usecase01();
Usecase02();
