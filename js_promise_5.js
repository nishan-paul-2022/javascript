function ExecutorFunction(myResolve, myReject) {
	const req = new XMLHttpRequest();
	req.open('GET', 'https://reqres.in/');
	req.onload = function () {
		if (req.status === 200) {
			myResolve(req.response);
		} else {
			myReject('File not Found');
		}
	};
	req.send();
}

function myDisplayer1(value) {
	console.log(value);
	return 'helloWorld';
}

function myDisplayer2(value, mine) {
	console.log(value);
	console.log(mine);
	return null;
}

function UseCase01() {
	const myPromise = new Promise(ExecutorFunction);

	const x1 = myPromise.then((value) => {
		myDisplayer1(value);
	});

	x1.then(
		() => {},
		(value) => {
			const mine = 'JOSS';
			myDisplayer2(value, mine);
		}
	);
}

async function UseCase02() {
	const myPromise = new Promise(ExecutorFunction);
	const x2 = myPromise.catch(myDisplayer1).then(myDisplayer1);
	console.log(x2 instanceof Promise);
	const value = await x2;
	console.log(value);
	console.log(x2);
}

function UseCase03() {
	const myPromise = new Promise(ExecutorFunction);
	const x3 = myPromise.then(myDisplayer1).then((value) => {
		console.log(value);
	});
	console.log(x3 instanceof Promise);
}

function PromiseChain() {
	function functionA(failure) {
		function functionB(resolve, _reject) {
			resolve(failure);
		}
		return functionB;
	}

	function functionC(failure) {
		const functionB = functionA(failure);
		const P3 = new Promise(functionB);
		return P3;
	}

	function functionD(success) {
		console.log(success);
	}

	const P2 = new Promise((_resolve, reject) => {
		reject('P2-REJECT');
	});

	P2.catch(functionC).then(functionD);
}

UseCase01();
UseCase02();
UseCase03();
PromiseChain();

/*
- recursive function : function calling function itself

- nested function / closure : function within function 
		# main concept behind closure : child function can access all members of parent function
		:: static member
		:: data encapsulation
		:: predefined beahviour of function
		:: memorization
		:: currying 

- nested function calling : funtion calling function 
		:: callback hell : callback within callback


- individual error handling function for individual promise 
- common error handling function for individual promise
- collective error handling function for all promises */
