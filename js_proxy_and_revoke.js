function logProxy(regular) {
	console.log('\n - log proxy');
	try {
		console.log('regular :', regular);
		console.log('regular.data :', regular.data);
		console.log("'data' in regular :", 'data' in regular);
		console.log('5 in regular :', 5 in regular);
		for (const i in regular) {
			console.log(i, ':', regular[i]);
		}
	} catch (error) {
		console.log(error.message);
	}
}

function Usecase01() {
	let regular = {
		data: 'HelloWorld'
	};
	const proxyRe = Proxy.revocable(regular, {});
	regular = proxyRe.proxy;
	logProxy(regular);
	proxyRe.revoke();
	logProxy(regular);
}

function Usecase02() {
	let regular = {
		start: 1,
		end: 10,
		data: 'HelloWorld'
	};
	const proxyRe = Proxy.revocable(regular, {
		has(target, prop) {
			return prop >= target.start && prop <= target.end;
		}
	});
	regular = proxyRe.proxy;
	logProxy(regular);
	proxyRe.revoke();
	logProxy(regular);
}

Usecase01();
Usecase02();

/*
- Proxy.revocable(target, handler) 
- proxyRe.proxy 
- proxyRe.revoke() */
