/* eslint-disable @typescript-eslint/no-unused-vars */

const ins01 = {
	a: Math.PI,
	b: true,
	c: 'batman',
	d: {
		e: 1,
		f: 2
	}
} as const; // root level constant

const ins02 = Object.freeze(
	// top level constant
	{
		a: Math.PI,
		b: true,
		c: 'batman',
		d: {
			e: 1,
			f: 2
		}
	}
);

// ins01.d.e = 100; // invalid
ins02.d.e = 100; // valid

// const can be used with literal only
