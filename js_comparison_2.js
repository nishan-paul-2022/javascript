function ObjectInOperation(regular) {
	console.log('regular.constructor :', regular.constructor);

	console.log('regular :', regular);
	console.log('regular.toString() :', regular.toString());
	console.log('regular.valueOf() :', regular.valueOf());

	console.log('regular + hello :', regular + ' hello');
	console.log('regular + 0 :', regular + 0);
	console.log('regular * 1 :', regular * 1);
	console.log('+regular :', +regular);
}

const string1 = 'Math.PI';
const number1 = Math.PI;
const boolean1 = true;
const array1 = [1, 2, 3];
const regular1 = { a: 1, b: 2 };

const regular2 = {
	toString: function () {
		return 'Math.PI';
	},

	valueOf: function () {
		return Math.PI;
	}
};

const regular3 = {
	[Symbol.toPrimitive]: function (hint) {
		if (hint === 'string') {
			return 'Math.PI';
		} else if (hint === 'number') {
			return Math.PI;
		} else {
			return true;
		}
	}
};

ObjectInOperation(string1);
ObjectInOperation(number1);
ObjectInOperation(boolean1);
ObjectInOperation(array1);
ObjectInOperation(regular1);
ObjectInOperation(regular2);
ObjectInOperation(regular3);
