function delay(callback, ms) {
	const delayedCallback = (argList) => {
		setTimeout(() => {
			callback(...argList);
		}, ms);
	};
	return delayedCallback;
}

function UseCase01() {
	const regular1 = {
		location: 'dhaka',
		method: function (firstName, lastName) {
			console.log(
				`Hello, ${firstName} ${lastName} from ${this.location}`
			);
		}
	};

	const method = regular1.method;
	const methodBinded = method.bind(regular1);
	const methodDelayed = delay(methodBinded, 3000);
	const methodProxified1 = new Proxy(methodBinded, {
		apply: (target, _thisValue, argList) => {
			setTimeout(() => {
				target(...argList);
			}, 3000);
		}
	});
	const methodProxified2 = new Proxy(method, {
		apply: (target, thisValue, argList) => {
			setTimeout(() => {
				target.call(thisValue, ...argList);
			}, 3000);
		}
	});
	const methodProxified3 = methodProxified2.bind(regular1);

	methodBinded('Jhon', 'Wick');
	methodDelayed('Bruce', 'Wayne');
	methodProxified1('Paul', 'Walker');
	methodProxified2.call(regular1, 'Tom', 'Cruise');
	methodProxified3('King', 'SRK');
}

UseCase01();
