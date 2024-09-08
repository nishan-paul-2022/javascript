function FunctionObject(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
}

function Usecase01() {
	Function.prototype.functionMember = (origin) => {
		console.log(origin, ': Function.prototype.functionMember');
	};
	Array.functionMember('Array');
}

function Usecase02() {
	Function.prototype.functionMember = (origin) => {
		console.log(origin, ': Function.prototype.functionMember');
	};
	FunctionObject.functionMember('FunctionObject');
}

function Usecase03() {
	Array.prototype.arrayMember = (origin) => {
		console.log(origin, ': Array.prototype.arrayMember');
	};
	const arrayObject = [1, 2, 3];
	arrayObject.arrayMember('arrayObject');
}

function Usecase04() {
	FunctionObject.prototype.functionObjectMember = function (origin) {
		console.log(origin, ': FunctionObject.prototype.functionObjectMember');
	};
	const userDefinedObject = new FunctionObject(10, 20, 30);
	userDefinedObject.functionObjectMember('userDefinedObject');
}

function Usecase05() {
	const functionObject = function () {};
	console.log(Object.getOwnPropertyDescriptor(functionObject, 'prototype'));
	console.log(Object.getOwnPropertyDescriptor(Function, 'prototype'));
	console.log(Object.getOwnPropertyDescriptor(Array, 'prototype'));
}

Usecase01();
Usecase02();
Usecase03();
Usecase04();
Usecase05();
