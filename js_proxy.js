function RootAndProxy1() {
	const root = { a: 1 };
	const proxy = new Proxy(root, {});
	proxy.a = 100;
	console.log(root.a);
	console.log(root === proxy);
}

function RootAndProxy2() {
	const root = {
		a: 1,
		print() {
			console.log(this.a);
		}
	};
	const proxy = new Proxy(root, {});
	proxy.print();
}

function RootAndProxy3() {
	const root = {
		a: 1,
		print() {
			console.log(this.a);
		}
	};
	const proxy = new Proxy(root, {
		get(target, prop) {
			return target[prop];
		}
	});
	proxy.print();
}

RootAndProxy1();
RootAndProxy2();
RootAndProxy3();
