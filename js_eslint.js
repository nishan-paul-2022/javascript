/* eslint-disable */

// @typescript-eslint/no-unused-vars: "error"
function F01() {
	const unusedVar = 'Hello';
}

// no-undef: "error"
function F02() {
	function useFoo() {
		foo();
	}

	useFoo();
}

// no-empty: "error"
function F03() {
	try {
		// as comment is here, so no-empty
	} catch (error) { }
}

// no-var: "ignore"
function F04() {
	var oldVar = 'Hello';
	console.log(oldVar);
}

// prefer-arrow-callback: "ignore"
function F05() {
	function fetchData(callback) {
		setTimeout(() => {
			callback();
		}, 1000);
	}

	fetchData(function () {
		console.log('HelloWorld');
	});
}

// eqeqeq: "ignore"
function F06() {
	const x = 10;
	if (x == 10) {
		// Code here
	}
}

// curly: "ignore"
function F07() {
	const condition = true;
	if (condition) console.log('No curly braces');
}

// prefer-const: "ignore"
function F08() {
	let x = 5;
	console.log(x);
}

// arrow-body-style: "ignore"
function F09() {
	const add = (a, b) => a + b;;
	console.log(add(10, 20));
}

// no-extra-bind: "ignore"
function F10() {
	const boundGetName = function () {
		return 'ESLint';
	}.bind({ name: 'ESLint' });

	console.log(boundGetName());
}

// no-use-before-define: "ignore"
function F11() {
	function useFoo() {
		foo();
	}

	function foo() {
		console.log('HelloWorld');
	}

	useFoo();
}

F01();
F02();
F03();
F04();
F05();
F06();
F07();
F08();
F09();
F10();
F11();

// eslint rule violation examples */
