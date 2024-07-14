/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/no-namespace */

enum Color {
	Red,
	Green,
	Blue
}

namespace Color {
	export function showColor(value: Color) {
		switch (value) {
			case Color.Red:
				console.log('RED');
				break;
			case Color.Green:
				console.log('GREEN');
				break;
			default:
				console.log('BLUE');
		}
	}
}

namespace Color {
	function random() {
		console.log(Math.random());
	}

	export function isTeamLeadLoading() {
		random();
		console.log('YES');
	}
}

console.log(Color);
const value: Color = Color.Red;
Color.showColor(value);
Color.isTeamLeadLoading();
// Color.random(); /* invalid */

/*
In TypeScript, namespaces support declaration merging, 
meaning that multiple declarations with the same name will be merged into a single namespace. 
This feature can be particularly useful when we want to extend existing namespaces or add related functionality incrementally. 
However, using default exports with namespaces, or inside namespace is not supported. */
