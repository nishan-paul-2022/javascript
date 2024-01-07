/* eslint-disable no-func-assign */
import util from 'util';

class Class1 {}

class Class2 {
	get [Symbol.toStringTag]() {
		return 'hello';
	}
}

function RandomFuunction() {
	console.log('HelloWorld');
}

// util.format(format, [...args])
function UtilFormat() {
	const formattedString = util.format(
		'Hello, %s! It is %d degrees outside.',
		'Alice',
		25
	);
	console.log(formattedString);
}

// util.inspect(object, [options])
function UtilInspect() {
	const class1 = new Class1();
	const class2 = new Class2();
	const regular1 = Object.create(Object.prototype, {
		[Symbol.toStringTag]: {
			get: () => {
				return 'world';
			}
		}
	});
	const regular2 = {
		get [Symbol.toStringTag]() {
			return 'world';
		}
	};
	const regular3 = { name: 'John', age: 30, city: 'New York' };
	regular3.regular3 = regular3;

	console.log(util.inspect(class1)); // Class1 {}
	console.log(util.inspect(class2)); // Class2 [hello] {}
	console.log(util.inspect(regular1)); // Object [world] {}
	console.log(util.inspect(regular2));
	console.log(util.inspect(regular3));
}

// util.deprecate(fn, message)
function UtilDeprecate() {
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
formatted string = util.format(template string with access specifier, variables)
object constructor with tag name = util.inspect(object)
function with message = util.deprecate(function, message)
*/
