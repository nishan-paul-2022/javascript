const engine = {
	predefined() {
		return [1];
	},

	createNewValues(...values) {
		console.log(`called including ${values}`);

		const prevValues = this.predefined();
		const newValues = values.concat(prevValues);

		return newValues;
	}
};

function cachingDecorator(callback) {
	const cache = new Map();

	function random(...values) {
		const key = values.join('');

		if (cache.has(key)) {
			const value = cache.get(key);
			return value;
		}

		const result = callback.apply(this, values); // "this" is passed correctly now
		cache.set(key, result);

		return result;
	}

	return random;
}

function Usecase() {
	engine.createNewValues = cachingDecorator(engine.createNewValues); // now make it cached
	console.log(engine.createNewValues(2)); // do calculate
	console.log(engine.createNewValues(2, 3)); // do calculate
	console.log(engine.createNewValues(2, 3)); // don't calculate (cached)
}

Usecase();
