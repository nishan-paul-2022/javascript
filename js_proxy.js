function RootAndProxy1() {
	const rootObj = { a: 1 };
	const proxyObj = new Proxy(rootObj, {});
	proxyObj.a = 100;
	console.log(rootObj.a);
	console.log(rootObj === proxyObj);
}

function RootAndProxy2() {
	const rootObj = {
		a: 1,
		print() {
			console.log(this.a);
		}
	};
	const proxyObj = new Proxy(rootObj, {});
	proxyObj.print();
}

function RootAndProxy3() {
	const rootObj = {
		a: 1,
		print() {
			console.log(this.a);
		}
	};
	const proxyObj = new Proxy(rootObj, {
		get(target, prop) {
			return target[prop];
		}
	});
	proxyObj.print();
}

RootAndProxy1();
RootAndProxy2();
RootAndProxy3();
