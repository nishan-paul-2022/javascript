import mul, { N01, N02 } from './ts_module_a.js';
import multi, * as arithmatic from './ts_module_a.js';
import multiply, { N01 as n01, N02 as n02 } from './ts_module_a.js';

function F01() {
	mul(5, 3);
	N01.add(5, 3);
	N02.sub(5, 3);
	N02.div(5, 3);
}

function F02() {
	multi(5, 3);
	arithmatic.N01.add(5, 3);
	arithmatic.N02.sub(5, 3);
	arithmatic.N02.div(5, 3);
}

function F03() {
	multiply(5, 3);
	n01.add(5, 3);
	n02.sub(5, 3);
	n02.div(5, 3);
}

async function F04() {
	const module = await import('./ts_module_a.js');
	module.default(5, 3);
	module.N01.add(5, 3);
	module.N02.sub(5, 3);
	module.N02.div(5, 3);
}

F01();
F02();
F03();
await F04();
