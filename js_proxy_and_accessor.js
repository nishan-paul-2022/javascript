class RandomClass {
	location = 'gotham';

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

function consoleLog(object) {
	console.log(
		`
        object.location / ${object.location}, 
        object.getLocation() / ${object.getLocation()}, 
        object.Location / ${object.Location}
        `
	);
}

function print1(protoObj) {
	const endObj = {
		__proto__: protoObj
	};

	consoleLog(endObj);
	endObj.Location = 'dhaka';
	consoleLog(endObj);
}

function print2(rootObj, protoObj) {
	const endObj = {
		__proto__: protoObj
	};

	endObj.Location = 'dhaka';
	consoleLog(endObj);
	consoleLog(rootObj);
}

function UseCase01() {
	const rootObj = new RandomClass();

	const proxyObj1 = new Proxy(rootObj, {
		get(target, prop) {
			return target[prop];
		}
	});

	const proxyObj2 = new Proxy(rootObj, {
		get(target, prop, receiver) {
			return Reflect.get(target, prop, receiver);
		}
	});

	print1(proxyObj1);
	print1(proxyObj2);
}

function UseCase02() {
	const rootObj1 = new RandomClass();
	const proxyObj1 = new Proxy(rootObj1, {
		get: function (target, property, receiver) {
			return Reflect.get(target, property, receiver);
		},
		set: function (target, property, value) {
			return Reflect.set(target, property, value);
		}
	});

	const rootObj2 = new RandomClass();
	const proxyObj2 = new Proxy(rootObj2, {
		get: function (target, property, receiver) {
			return Reflect.get(target, property, receiver);
		},
		set: function (target, property, value, receiver) {
			return Reflect.set(target, property, value, receiver);
		}
	});

	print2(rootObj1, proxyObj1);
	print2(rootObj2, proxyObj2);
}

UseCase01();
UseCase02();
