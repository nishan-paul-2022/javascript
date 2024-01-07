function* RandomGenerator01() {
	console.log('indicator-start');

	const con1 = yield Math.random();
	console.log('indicator-1:', con1);

	const con2 = yield Math.random();
	console.log('indicator-2:', con2);

	const con3 = yield Math.random();
	console.log('indicator-3:', con3);

	const con4 = yield Math.random();
	console.log('indicator-4:', con4);

	console.log('indicator-end');
	return Math.random();
}

function* RandomGenerator02() {
	yield Math.random();
	yield Math.random();
	yield Math.random();
}

function GeneratorInOut01() {
	console.log('\n - Generator In Out 01 \n');
	const iterator = RandomGenerator01();
	console.log(iterator.next('wasted')); // wasted
	console.log(iterator.next(1));
	console.log(iterator.next(2));
	console.log(iterator.next(3));
	console.log(iterator.next(4));
	console.log(iterator.next('wasted')); // wasted
}

function GeneratorInOut02() {
	console.log('\n - Generator In Out 02 \n');
	const iterator = RandomGenerator02();
	console.log(iterator.next());
	console.log(iterator.return(2));
	console.log(iterator.next());
}

function GeneratorInOut03() {
	console.log('\n - Generator In Out 03 \n');
	const iterator = RandomGenerator02();
	console.log(iterator.next());
	try {
		console.log(iterator.throw(1));
	} catch (error) {
		console.log('error.message :', error);
	}
	console.log(iterator.next());
}

GeneratorInOut01();
GeneratorInOut02();
GeneratorInOut03();
