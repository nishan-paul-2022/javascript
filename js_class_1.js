class ExA {
	static count = 0;

	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
		ExA.count++;
	}

	static get Counter() {
		return ExA.count;
	}

	static Hi() {
		console.log('SAY HI FROM ADD()');
	}

	Add() {
		ExA.Hi();

		const sum = this.x + this.y + this.z;
		console.log(sum);

		this.count = 15;

		this.Hello = function () {
			console.log('Hello' + ' ' + this.x);
		};

		this.Rfunction1 = function () {
			console.log('Rfunction1');

			function HomeWork() {
				console.log('Add -> Rfunction -> HomeWork');
			}

			return HomeWork;
		};

		this.Rfunction2 = function () {
			console.log('Rfunction2');
			return this.Hello;
		};
	}

	Extra() {
		console.log('EXTRA');
		this.World = function () {
			console.log('World');

			function OK() {
				this.Add();
			}

			return OK;
		};
	}
}

const exa = new ExA(10, 20, 30);

function StaticExample() {
	console.log('StaticExample');
	ExA.Hi();
	console.log(ExA.count);
	console.log(ExA.Counter);
}

function MethodWithMember() {
	console.log('MethodWithMember');
	// console.log(exa.count);
	// exa.Hello();
	exa.Add();
	exa.Hello();
	console.log(exa.count);
}

function MethodReturnsFunction1() {
	console.log('MethodReturnsFunction');
	const HomeWork = exa.Rfunction1();
	HomeWork();

	const Hello = exa.Rfunction2();
	// Hello();
	Hello.call(exa);
}

function MethodReturnsFunction2() {
	console.log('MethodReturnsFunction2');
	exa.Extra();
	const OK = exa.World();
	// OK();
	OK.call(exa);
}

StaticExample();
MethodWithMember();
MethodReturnsFunction1();
MethodReturnsFunction2();
