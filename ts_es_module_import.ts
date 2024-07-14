import calculate, { NameA, NameB, div } from './ts_es_module_defined.js';
import calculate2, * as arithmatic from './ts_es_module_defined.js';
import calculate3, {
	NameA as NameA3,
	NameB as NameB3,
	div as div3
} from './ts_es_module_defined.js';

function F01() {
	NameA.add(5, 3);
	NameB.sub(5, 3);
	NameB.mul(5, 3);
	div(5, 3);
	calculate(5, 3);
}

function F02() {
	arithmatic.NameA.add(5, 3);
	arithmatic.NameB.sub(5, 3);
	arithmatic.NameB.mul(5, 3);
	arithmatic.div(5, 3);
	calculate2(5, 3);
}

function F03() {
	NameA3.add(5, 3);
	NameB3.sub(5, 3);
	NameB3.mul(5, 3);
	div3(5, 3);
	calculate3(5, 3);
}

async function F04() {
	const module = await import('./ts_es_module_defined.js');
	module.NameA.add(5, 3);
	module.NameB.sub(5, 3);
	module.NameB.mul(5, 3);
	module.div(5, 3);
	module.default(5, 3);
	// module.calculate(5, 3); /* invalid */
}

F01();
F02();
F03();
await F04();
