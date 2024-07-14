/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/no-namespace */

namespace Profile {
	function random(value: number) {
		console.log(value * Math.random());
	}

	export function showVengence(value: number) {
		random(value);
	}

	export function isFullstackDeveloperLoading() {
		console.log('YES');
	}
}

enum Color {
	Red,
	Green
}

enum Color {
	Blue = 3
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
	export function isTeamLeadLoading() {
		console.log('YES');
	}
}

interface Body {
	age: number;
}

interface Body {
	height: number;
}

namespace Body {
	export function showBody(value: Body) {
		console.log(value.age, value.height);
	}
}

namespace Body {
	export function isDevopsLosing() {
		console.log('YES');
	}
}

function Usecase01() {
	const value: number = 10;
	console.log(Profile);
	Profile.showVengence(value);
	Profile.isFullstackDeveloperLoading();
	// Profile.random(); /* invalid */
}

function Usecase02() {
	const value: Color = Color.Red;
	console.log(Color);
	Color.showColor(value);
	Color.isTeamLeadLoading();
}

function Usecase03() {
	const value: Body = { age: 26, height: 5.5 };
	console.log(Body);
	Body.showBody(value);
	Body.isDevopsLosing();
}

Usecase01();
Usecase02();
Usecase03();

/*
- declaration merging is supported by interface, enum, namespace, enum-namespace, interface-namespace
- using default exports with namespaces, or inside namespace is not supported. */
