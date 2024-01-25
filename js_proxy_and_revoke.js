function printProxy(regular) {
	console.log('\n - print proxy');
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

function UseCase01() {
	console.log('\n use case 01 :');
	let regular = {
		data: 'helloWorld'
	};
	const proxyRe = Proxy.revocable(regular, {});
	regular = proxyRe.proxy;
	printProxy(regular);
	proxyRe.revoke();
	printProxy(regular);
}

function UseCase02() {
	console.log('\n use case 02 :');
	let regular = {
		start: 1,
		end: 10,
		data: 'helloWorld'
	};
	const proxyRe = Proxy.revocable(regular, {
		has(target, prop) {
			return prop >= target.start && prop <= target.end;
		}
	});
	regular = proxyRe.proxy;
	printProxy(regular);
	proxyRe.revoke();
	printProxy(regular);
}

UseCase01();
UseCase02();

/*
- Proxy.revocable(target, handler) 
- proxyRe.proxy 
- proxyRe.revoke() */
