function UseCase01() {
	let regular1 = {
		username: 'paul',
		_password: 'helloWorld'
	};

	for (const i in regular1) {
		const isOwn = Object.prototype.hasOwnProperty.call(regular1, i);
		const isPrivate = i.startsWith('_');
		if (isOwn && isPrivate) {
			Object.defineProperties(regular1, {
				[i]: {
					enumerable: false
				}
			});
		}
	}

	regular1 = new Proxy(regular1, {
		ownKeys: (target) => {
			const arr1 = Object.getOwnPropertyNames(target).filter((prop) => {
				const isPrivate = prop.startsWith('_');
				return !isPrivate;
			});
			const arr2 = Object.getOwnPropertySymbols(target);
			return arr1.concat(arr2);
		},
		get: (target, prop) => {
			const isPrivate = prop.startsWith('_');
			if (!isPrivate) {
				return target[prop];
			}
		},
		set: (target, prop, value) => {
			const isPrivate = prop.startsWith('_');
			if (!isPrivate) {
				target[prop] = value;
				return true;
			} else {
				return false;
			}
		},
		deleteProperty: (target, prop) => {
			const isPrivate = prop.startsWith('_');
			if (!isPrivate) {
				delete target[prop];
				return true;
			} else {
				return false;
			}
		},
		defineProperty: (target, prop, descriptor) => {
			const isPrivate = prop.startsWith('_');
			if (!isPrivate) {
				Object.defineProperties(target, {
					prop: descriptor
				});
				return true;
			} else {
				return false;
			}
		}
	});

	try {
		Object.defineProperties(regular1, {
			_password: {
				value: 'vengeance'
			}
		});
		regular1._password = 'fearIsATool';
		console.log(regular1._password);
		delete regular1._password;
	} catch (error) {
		console.log(error.message);
	}

	print(regular1);
}

UseCase01();
