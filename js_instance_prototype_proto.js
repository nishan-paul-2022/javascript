class Animal {}
class Dog {}
class Cat extends Animal {}

class Grand {}
class Parent extends Grand {}
class Child extends Parent {}

function RandomFunction() {}

const string1 = '';
const number1 = 12;
const boolean1 = true;
const bigint1 = 123n;
const symbol1 = Symbol();
const function1 = () => {};
const array1 = [1, 2, 3, 4];
const regex1 = /pattern/gi;
const date1 = Date(12);
const regular1 = {};

const string2 = new String('');
const number2 = new Number(12);
const boolean2 = new Boolean(true);
const bigint2 = BigInt(123);
const symbol2 = Symbol.for();
const function2 = new Function();
const array2 = new Array(1);
const regex2 = new RegExp('pattern', 'gi');
const date2 = new Date(12);
const regular2 = new Object();

const functionObject = new RandomFunction();
const child = new Child();

const prototypeList = [
	['Function.prototype', Function.prototype],
	['RandomFunction.prototype', RandomFunction.prototype],
	['Child.prototype', Child.prototype],
	['Parent.prototype', Parent.prototype],
	['Grand.prototype', Grand.prototype],
	['String.prototype', String.prototype],
	['Object.prototype', Object.prototype]
];

const variableList = [
	['Function', Function],
	['RandomFunction', RandomFunction],
	['Child', Child],
	['Parent', Parent],
	['Grand', Grand],
	['String', String],
	['Object', Object],
	['functionObject', functionObject],
	['child', child],
	['string1', string1],
	['string2', string2],
	['regular1', regular1],
	['regular2', regular2]
];

function GetContentName(content) {
	for (const [name, prototype] of prototypeList) {
		if (content === prototype) {
			return name;
		}
	}
}

function GetContentMembers(content) {
	const array1 = Object.getOwnPropertyNames(content);
	const array2 = Object.getOwnPropertySymbols(content);
	return array1.concat(array2);
}

function GetContentDetails(contentList) {
	for (const [name, v] of contentList) {
		console.log('--------------------------------------------');
		console.log(`${name} / ${v} :`);
		console.log('type of v :', typeof v);
		console.log('constructor of v :', v.constructor);
		console.log('constructor of v.__proto__ :', v.__proto__?.constructor);
		console.log('constructor of v.prototype :', v.prototype?.constructor);
		console.log('name of v.__proto__ :', GetContentName(v.__proto__));
		console.log('name of v.prototype :', GetContentName(v.prototype));
		console.log('mebers of v :', GetContentMembers(v));
	}
}

// proto-chain of mid-constructor : Function.prototype => Object.prototype
function InstanceOf01() {
	console.log('--------------------------------------------');
	console.log('Array instanceof Function', Array instanceof Function);
	console.log('Array instanceof Object', Array instanceof Object);
	console.log('Object instanceof Function', Object instanceof Function);
	console.log('Object instanceof Object', Object instanceof Object);
	console.log('Function instanceof Function', Function instanceof Function);
	console.log('Function instanceof Object', Function instanceof Object);
	console.log('undefined instanceof Object', undefined instanceof Object);
	console.log('null instanceof Object', null instanceof Object);
}

// proto-chain of end-object : mid-constructor.prototype => Object.prototype
function InstanceOf02() {
	console.log('--------------------------------------------');
	console.log('string1 instanceof Object', string1 instanceof Object);
	console.log('string1 instanceof String', string1 instanceof String);
	console.log('number1 instanceof Number', number1 instanceof Number);
	console.log('boolean1 instanceof Boolean', boolean1 instanceof Boolean);
	console.log('bigint1 instanceof BigInt', bigint1 instanceof BigInt);
	console.log('symbol instanceof Symbol', symbol1 instanceof Symbol);
	console.log('function1 instanceof Function', function1 instanceof Function);
	console.log('array1 instanceof Array', array1 instanceof Array);
	console.log('regex1 instanceof RegExp', regex1 instanceof RegExp);
	console.log('date1 instanceof Date', date1 instanceof String);
	console.log('regular1 instanceof Object', regular1 instanceof Object);
}

// proto-chain of end-object : mid-constructor.prototype => Object.prototype
function InstanceOf03() {
	console.log('--------------------------------------------');
	console.log('string2 instanceof Object', string2 instanceof Object);
	console.log('string2 instanceof String', string2 instanceof String);
	console.log('number2 instanceof Number', number2 instanceof Number);
	console.log('boolean2 instanceof Boolean', boolean2 instanceof Boolean);
	console.log('bigint2 instanceof BigInt', bigint2 instanceof BigInt);
	console.log('symbol2 instanceof Symbol', symbol2 instanceof Symbol);
	console.log('function2 instanceof Function', function2 instanceof Function);
	console.log('array2 instanceof Array', array2 instanceof Array);
	console.log('regex2 instanceof RegExp', regex2 instanceof RegExp);
	console.log('date2 instanceof Date', date2 instanceof Date);
	console.log('regular2 instanceof Object', regular2 instanceof Object);
}

// proto-chain of dog : Dog.prototype => Animal.prototype => Object.prototype
function InstanceOf04() {
	console.log('--------------------------------------------');
	Reflect.setPrototypeOf(Dog.prototype, Animal.prototype);

	const dog = new Dog();

	console.log(
		'Reflect.getPrototypeOf(Dog.prototype) === Animal.prototype :',
		Reflect.getPrototypeOf(Dog.prototype) === Animal.prototype
	);

	console.log(
		'Reflect.getPrototypeOf(dog) === Dog.prototyp :',
		Reflect.getPrototypeOf(dog) === Dog.prototype
	);

	console.log('dog instanceof Dog :', dog instanceof Dog);
	console.log('dog instanceof Animal :', dog instanceof Animal);
	console.log('dog instanceof Object :', dog instanceof Object);
}

// proto-chain of cat : Cat.prototype => Animal.prototype => Object.prototype
function InstanceOf05() {
	console.log('--------------------------------------------');
	const cat = new Cat();

	console.log(
		'Reflect.getPrototypeOf(Cat.prototype) === Animal.prototype :',
		Reflect.getPrototypeOf(Cat.prototype) === Animal.prototype
	);

	console.log(
		'Reflect.getPrototypeOf(cat) === Cat.prototyp :',
		Reflect.getPrototypeOf(cat) === Cat.prototype
	);

	console.log('cat instanceof Cat :', cat instanceof Cat);
	console.log('cat instanceof Animal :', cat instanceof Animal);
	console.log('cat instanceof Object :', cat instanceof Object);
}

// proto-chain of child : Child.prototype => Parent.prototype => Grand.prototype => Object.prototype
function InstanceOf06() {
	console.log('--------------------------------------------');
	console.log(
		'Object.getPrototypeOf(child) === Child.prototype',
		Object.getPrototypeOf(child) === Child.prototype
	);
	console.log(
		'Object.getPrototypeOf(Child.prototype) === Parent.prototype',
		Object.getPrototypeOf(Child.prototype) === Parent.prototype
	);
	console.log(
		'Object.getPrototypeOf(Parent.prototype) === Grand.prototype',
		Object.getPrototypeOf(Parent.prototype) === Grand.prototype
	);
	console.log(
		'Object.getPrototypeOf(Grand.prototype) === Object.prototype',
		Object.getPrototypeOf(Grand.prototype) === Object.prototype
	);

	console.log('child instanceof Child', child instanceof Child);
	console.log('child instanceof Parent', child instanceof Parent);
	console.log('child instanceof Grand', child instanceof Grand);
	console.log('child instanceof Object', child instanceof Object);
}

// proto-chain of Child : Function.prototype => Object.prototype
function InstanceOf07() {
	console.log('--------------------------------------------');
	console.log(
		'Object.getPrototypeOf(Child) === Function.prototype',
		Object.getPrototypeOf(Child) === Function.prototype
	);
	console.log(
		'Object.getPrototypeOf(Function.prototype) === Object.prototype',
		Object.getPrototypeOf(Function.prototype) === Object.prototype
	);

	console.log('Child instanceof Function', Child instanceof Function);
	console.log('Child instanceof Object', Child instanceof Object);
}

// proto-chain of functionObject : RandomFunction.prototype => Object.prototype
function InstanceOf08() {
	console.log('--------------------------------------------');
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

// proto-chain of RandomFunction : Function.prototype => Object.prototype
function InstanceOf09() {
	console.log('--------------------------------------------');
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

GetContentDetails(variableList);
GetContentDetails(prototypeList);
InstanceOf01();
InstanceOf02();
InstanceOf03();
InstanceOf04();
InstanceOf05();
InstanceOf06();
InstanceOf07();
InstanceOf08();
InstanceOf09();

/*
    # CATEGORY OF OFOBJECT IN JS

        @meta-constructor           : Function 

        @mid-constructor -
        root-constructor            : Object
        built-in-constructor        : String, Number, Boolean, BigInt, Symbol, Array, RegExp, Date ...
        user-defined-constructor    : class, function ...

        @end-object -
        regular-object              : [ using Object ]
        specialized-object          : [ using built-in-constructor ]
        user-defined-object         : [ using user-defined-constructor ]

    # prototype [ prototype of child ]  
        - auto set and read-only 
        - prototype is built-in regular-object (except Object.prototype)

    # __proto__ [ prototype of own ]
        - auto set using mid-constructor.prototype or Function.prototype
        - can be also manually set using any object
        - __proto__ is built-in regular-object (by default)

    # prototype and __proto__ of object (by default)

        @meta-constructor
        __proto__   : Function.prototype
        prototype   : Function.prototype
        chain       : Object.prototype

        @mid-constructor 
        __proto__   : Function.prototype
        prototype   : mid-constructor.prototype 
        chain       : Function.prototype => Object.prototype

        @end-object 
        __proto__   : mid-constructor.prototype
        chain       : mid-constructor.prototype => Object.prototype

    # Class1 extends Class2 / Class1.prototype.__proto__ = Class2.prototype

    # constructor property    : which constructor can be used to create that object 
    # typeof operator         : string, number, boolean1, undefined, bigint, symbol (primitive) | object (reference)
    # instanceof operator     : proto-chain => constructor-chain (only works for reference)

    # FOOTNOTE
        ^ __proto__ of regular-object is Object.prototype
        ^ Object.__proto__ === Function.prototype
        ^ Function.prototype === Function.__proto__
        ^ end of __proto__ chain is always Object.prototype, so it is the root of everything (not constructor)
        ^ __proto__ of Object.prototype is null
*/
