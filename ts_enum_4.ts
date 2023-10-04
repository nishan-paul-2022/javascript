/* eslint-disable @typescript-eslint/no-unused-vars */

// Example 7: Enum with Computed Values
function F07() {
	function getSummer(): number {
		return 1;
	}

	enum Season {
		SUMMER = getSummer(),
		SPRING = 1,
		AUTUMN = 4,
		WINTER = 5
	}

	console.log(Season.SUMMER);
	console.log(Season.SPRING);
	console.log(Season.AUTUMN);
	console.log(Season.WINTER);
}

// Example 8: Enum with Symbols
function F08() {
	const symbol = Symbol('red');
	const Colors = {
		RED: symbol,
		GREEN: 'green',
		BLUE: Math.PI
	};

	type Color0 = typeof Colors;
	type Color1 = keyof typeof Colors;
	type Color2 = (typeof Colors)[keyof typeof Colors];

	const color1: Color1 = 'RED';
	const color2: Color1 = 'GREEN';
	const color3: Color1 = 'BLUE';

	const color4: Color2 = symbol;
	const color5: Color2 = Symbol();
	const color6: Color2 = 'green';
	const color7: Color2 = 'red';
	const color8: Color2 = Math.PI;
	const color9: Color2 = Math.E;
}

function F008() {
	enum Colors {
		RED = 27,
		GREEN = 'green',
		BLUE = Math.PI
	}

	type Color0 = typeof Colors;
	const color0: Color0 = Colors;

	type Color1 = keyof typeof Colors;
	const color1: Color1 = 'RED';
	const color2: Color1 = 'GREEN';
	const color3: Color1 = 'BLUE';

	type Color2 = (typeof Colors)[keyof typeof Colors];
	const color6: Color2 = 45;
	const color7: Color2 = Colors.GREEN;
	const color8: Color2 = Math.PI;
	const color9: Color2 = Math.E;
}

// Example 9: Heterogeneous Enums
function F09() {
	enum Status {
		Active = 'ACTIVE',
		Inactive = 0
	}

	const userStatus: Status = Status.Active;
	console.log(userStatus);
	console.log(Status.Inactive);
}

// Example 10: Computed Enum Member Names
function F10() {
	const prefix = 'ITEM_';

	enum Items {
		FIRST = prefix + 'A',
		SECOND = prefix + 'B',
		THIRD = prefix + 'C'
	}

	console.log(Items.FIRST);
	console.log(Items.SECOND);
}

F07();
F08();
F09();
F10();
