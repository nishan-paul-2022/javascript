function Example() {
	let regular = {
		username: 'paul',
		_password: 'HelloWorld'
	};

	for (const i in regular) {
		const isOwn = Object.prototype.hasOwnProperty.call(regular, i);
		const isPrivate = i.startsWith('_');
		if (isOwn && isPrivate) {
			Object.defineProperties(regular, {
				[i]: {
					enumerable: false
				}
			});
		}
	}

	regular = new Proxy(regular, {
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
		Object.defineProperties(regular, {
			_password: {
				value: 'i-am-vengeance'
			}
		});
		regular._password = 'fear-is-a-tool';
		console.log(regular._password);
		delete regular._password;
	} catch (error) {
		console.log(error.message);
	}

	console.log(regular);
}

Example();
