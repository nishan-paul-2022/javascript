/* eslint-disable @typescript-eslint/no-namespace */

enum Fruit {
	APPLE = 1,
	ORANGE = 2,
	BANANA = 3
}

namespace Fruit {
	export function getKeyByValue(value: number): string | undefined {
		return Object.keys(Fruit).find((key) => {
			return Fruit[key as keyof typeof Fruit] === value;
		});
	}
}

// Example 13: Enum with Reverse Mapping
function F13() {
	console.log(Fruit.getKeyByValue(2));
}

F13();
