import calculate, { NameA, NameB, div } from './ts_module_1.ts';
import analysis, * as arithmatic from './ts_module_1.ts';
import calculation, {
	NameA as NameX,
	NameB as NameY,
	div as division
} from './ts_module_1.ts';

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
	analysis(5, 3);
}

function F03() {
	NameX.add(5, 3);
	NameY.sub(5, 3);
	NameY.mul(5, 3);
	division(5, 3);
	calculation(5, 3);
}

async function F04() {
	const module = await import('./ts_module_1.ts');
	module.NameA.add(5, 3);
	module.NameB.sub(5, 3);
	module.NameB.mul(5, 3);
	module.div(5, 3);
	module.default(5, 3); // module.calculate(5, 3); /* invalid */
}

F01();
F02();
F03();
await F04();
