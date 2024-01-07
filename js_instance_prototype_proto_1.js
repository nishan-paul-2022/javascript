function RandomFunction() {}
class RandomClass {}

const string1 = '';
const string2 = new String('');
const number1 = 12;
const number2 = new Number(12);
const boolean1 = true;
const boolean2 = new Boolean(true);
const bigint1 = 123n;
const bigint2 = BigInt(123);
const symbol1 = Symbol();
const symbol2 = Symbol.for();
const function1 = () => {};
const function2 = new Function();
const array1 = [1, 2, 3, 4];
const array2 = new Array(1);
const regex1 = /pattern/gi;
const regex2 = new RegExp('pattern', 'gi');
const date1 = Date(12);
const date2 = new Date(12);
const regular1 = {};
const regular2 = new Object();

const functionObject = new RandomFunction();
const classObject = new RandomClass();

const variableList = [
	['functionObject', functionObject],
	['classObject', classObject],
	['string1', string1],
	['string2', string2],
	['regular1', regular1],
	['regular2', regular2]
];

const functionList = [
	['Function', Function],
	['RandomFunction', RandomFunction],
	['RandomClass', RandomClass],
	['String', String],
	['Object', Object]
];

const prototypeList = [
	['Function.prototype', Function.prototype],
	['RandomFunction.prototype', RandomFunction.prototype],
	['RandomClass.prototype', RandomClass.prototype],
	['String.prototype', String.prototype],
	['Object.prototype', Object.prototype]
];

function GetFunctionName(content) {
	for (const [name, element] of functionList) {
		if (content === element) {
			return name;
		}
	}
}

function GetPrototypeName(content) {
	for (const [name, element] of prototypeList) {
		if (content === element) {
			return name;
		}
	}
}

function GetObjectMembers(content) {
	const array1 = Object.getOwnPropertyNames(content);
	const array2 = Object.getOwnPropertySymbols(content);
	return array1.concat(array2);
}

function GetContentDetails(contentList) {
	for (const [name, i] of contentList) {
		console.log('--------------------------------------------------');
		console.log(`name of i : `, name);
		console.log('type of i :', typeof i);
		console.log('constructor of i :', GetFunctionName(i.constructor));
		console.log('members of i :', GetObjectMembers(i));
		console.log('name of i.__proto__ :', GetPrototypeName(i.__proto__));
		console.log('name of i.prototype :', GetPrototypeName(i.prototype));
	}
}

// proto-chain of mid-constructor : Function.prototype => Object.prototype
function DefaultFunctionInstance() {
	console.log('String instanceof Function', String instanceof Function);
	console.log('String instanceof Object', String instanceof Object);
	console.log('Object instanceof Function', Object instanceof Function);
	console.log('Object instanceof Object', Object instanceof Object);
	console.log('Function instanceof Function', Function instanceof Function);
	console.log('Function instanceof Object', Function instanceof Object);
}

// instanceof is not applicable here, cause 1st operand is not reference-object
function ValueInstanceFalse() {
	console.log('string1 instanceof String', string1 instanceof String);
	console.log('number1 instanceof Number', number1 instanceof Number);
	console.log('boolean1 instanceof Boolean', boolean1 instanceof Boolean);
	console.log('bigint1 instanceof BigInt', bigint1 instanceof BigInt);
	console.log('bigint2 instanceof BigInt', bigint2 instanceof BigInt);
	console.log('symbol1 instanceof Symbol', symbol1 instanceof Symbol);
	console.log('symbol2 instanceof Symbol', symbol2 instanceof Symbol);
	console.log('date1 instanceof Date', date1 instanceof Date);
	console.log('null instanceof Object', null instanceof Object);
	console.log('undefined instanceof Object', undefined instanceof Object);
}

// proto-chain of end-object : mid-constructor.prototype => Object.prototype
// proto-chain of regular-object : Object.prototype
function ValueInstanceTrue() {
	console.log('string2 instanceof Object', string2 instanceof Object);
	console.log('string2 instanceof String', string2 instanceof String);
	console.log('number2 instanceof Number', number2 instanceof Number);
	console.log('boolean2 instanceof Boolean', boolean2 instanceof Boolean);
	console.log('date2 instanceof Date', date2 instanceof Date);
	console.log('function1 instanceof Function', function1 instanceof Function);
	console.log('function2 instanceof Function', function2 instanceof Function);
	console.log('array1 instanceof Array', array1 instanceof Array);
	console.log('array2 instanceof Array', array2 instanceof Array);
	console.log('regex1 instanceof RegExp', regex1 instanceof RegExp);
	console.log('regex2 instanceof RegExp', regex2 instanceof RegExp);
	console.log('regular1 instanceof Object', regular1 instanceof Object);
	console.log('regular2 instanceof Object', regular2 instanceof Object);
}

// proto-chain of RandomFunction : Function.prototype => Object.prototype
function RandomFunctionChain() {
	console.log(
		'Object.getPrototypeOf(RandomFunction) === Function.prototype',
		Object.getPrototypeOf(RandomFunction) === Function.prototype
	);
	console.log(
		'Object.getPrototypeOf(Function.prototype) === Object.prototype',
		Object.getPrototypeOf(Function.prototype) === Object.prototype
	);

	console.log(
		'RandomFunction instanceof Function',
		RandomFunction instanceof Function
	);
	console.log(
		'RandomFunction instanceof Object',
		RandomFunction instanceof Object
	);
}

// proto-chain of RandomClass : Function.prototype => Object.prototype
function RandomClassChain() {
	console.log(
		'Object.getPrototypeOf(RandomClass) === Function.prototype',
		Object.getPrototypeOf(RandomClass) === Function.prototype
	);
	console.log(
		'Object.getPrototypeOf(Function.prototype) === Object.prototype',
		Object.getPrototypeOf(Function.prototype) === Object.prototype
	);

	console.log(
		'RandomClass instanceof Function',
		RandomClass instanceof Function
	);
	console.log('RandomClass instanceof Object', RandomClass instanceof Object);
}

// proto-chain of functionObject : RandomFunction.prototype => Object.prototype
function FunctionObjectChain() {
	console.log(
		'Object.getPrototypeOf(functionObject) === RandomFunction.prototype',
		Object.getPrototypeOf(functionObject) === RandomFunction.prototype
	);
	console.log(
		'Object.getPrototypeOf(RandomFunction.prototype) === Object.prototype',
		Object.getPrototypeOf(RandomFunction.prototype) === Object.prototype
	);

	console.log(
		'functionObject instanceof RandomFunction',
		functionObject instanceof RandomFunction
	);
	console.log(
		'functionObject instanceof Object',
		functionObject instanceof Object
	);
}

// proto-chain of classObject : RandomClass.prototype => Object.prototype
function ClassObjectChain() {
	console.log(
		'Object.getPrototypeOf(classObject) === RandomClass.prototype',
		Object.getPrototypeOf(classObject) === RandomClass.prototype
	);
	console.log(
		'Object.getPrototypeOf(RandomClass.prototype) === Object.prototype',
		Object.getPrototypeOf(RandomClass.prototype) === Object.prototype
	);

	console.log(
		'classObject instanceof RandomClass',
		classObject instanceof RandomClass
	);
	console.log('classObject instanceof Object', classObject instanceof Object);
}

GetContentDetails(variableList);
GetContentDetails(functionList);
GetContentDetails(prototypeList);

DefaultFunctionInstance(); // Function.prototype => Object.prototype
ValueInstanceFalse(); // mid-constructor.prototype => Object.prototype
ValueInstanceTrue(); // mid-constructor.prototype => Object.prototype

RandomFunctionChain(); // Function.prototype => Object.prototype
RandomClassChain(); // Function.prototype => Object.prototype

FunctionObjectChain(); // RandomFunction.prototype => Object.prototype
ClassObjectChain(); // RandomClass.prototype => Object.prototype

/*
    # CATEGORY OF OBJECT 

        @meta-constructor           : Function 

        @mid-constructor 
        regular-constructor         : Object
        special-constructor			: String, Number, Boolean, BigInt, Symbol, Array, RegExp, Date ...
        defined-constructor    		: class, function ...

        @end-object 
        regular-object              : [ using regular-constructor ]
        special-object          	: [ using special-constructor ]
        defined-object         		: [ using defined-constructor ]

    # prototype [ prototype of child ]  
        - auto-set using built-in regular-object 
		- read-only, so manual-set is invalid
        - Object.prototype is an exception, cause __proto__ is null

    # __proto__ [ prototype of own ]
        - auto-set using constructor.prototype
		- not read-only, so manual-set is valid
        - manual-set can be done using any object

    # prototype, __proto__ and __proto__ chain [ by default ]

        @meta-constructor
        prototype   : Function.prototype
        __proto__   : Function.prototype
        chain       : Function.prototype => Object.prototype

        @mid-constructor 
        prototype   : mid-constructor.prototype 
        __proto__   : Function.prototype
        chain       : Function.prototype => Object.prototype

        @end-object 
        __proto__   : mid-constructor.prototype
        chain       : mid-constructor.prototype => Object.prototype

    # Class1 extends Class2  
		1. Class1.__proto__ = Class2 
		2. Class1.prototype.__proto__ = Class2.prototype
		3. Object.defineProperties(Class1.prototype, Object.getOwnPropertyDescriptors(new Class2()))

    # constructor property    : which constructor can contain / create the container object
    # typeof operator         : string, number, boolean, bigint, symbol, undefined (primitive) | function, object (reference)
    # instanceof operator     : proto-chain => constructor-chain [ 1st operand is reference and 2nd operand is constructor ]

    # FOOTNOTE
		- Function.constructor === Function
		- Function.prototype === Function.__proto__
        - constructor.prototype.__proto__ === Object.prototype 
		- Object.prototype.__proto__ === null
		- in case of inheritance, __proto__ chain forms and end of chain is always Object.prototype
        - Object.prototype is the root of everything and Function is the creator of everything
		- Object.prototype 		: constructor, toString, valueOf [ object ]
		- Function.prototype	: name, length, prototype, call, apply, bind [ constructor ]
		- built-in members are non-enumerable
*/
