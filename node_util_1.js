/* eslint-disable no-func-assign */
import util from 'util';

function UtilFormat() {
	const formattedString = util.format(
		'Hello, %s! It is %d degrees outside.',
		'Alice',
		25
	);
	console.log(formattedString);
}

function UtilInspect() {
	const object1 = [1, 2, 3];
	const object2 = { name: 'John', age: 30, city: 'New York' };

	console.log(util.inspect(object1));
	console.log(util.inspect(object2));

	object1[Symbol.toStringTag] = '1';
	object2[Symbol.toStringTag] = '2';

	console.log(util.inspect(object1));
	console.log(util.inspect(object2));

	const object3 = new (class Class {
		name = 'Batman';
		get [Symbol.toStringTag]() {
			return this.name;
		}
	})();

	const object4 = Object.create(Object.prototype, {
		name: { value: 'Ironman' },
		[Symbol.toStringTag]: {
			get: () => {
				return 'this.name';
			}
		}
	});

	console.log(util.inspect(object3));
	console.log(util.inspect(object4));
}

function UtilDeprecate() {
	function RandomFuunction() {
		console.log('HelloWorld');
	}

	RandomFuunction = util.deprecate(
		RandomFuunction,
		'This function has been deprecated and will be removed in the future.'
	);

	RandomFuunction();
}

UtilFormat();
UtilInspect();
UtilDeprecate();

/*
formatted string = util.format(string with access specifier, variables)
object constructor with tag name = utilutil.inspect(object)
function with message = util.deprecate(function, message) */
