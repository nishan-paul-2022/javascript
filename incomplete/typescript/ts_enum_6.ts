/* eslint-disable @typescript-eslint/no-namespace */

enum MathOperator {
	ADD = '+',
	SUBTRACT = '-',
	MULTIPLY = '*',
	DIVIDE = '/'
}

namespace MathCalculator {
	export function calculate(
		operator: MathOperator,
		a: number,
		b: number
	): number {
		switch (operator) {
			case MathOperator.ADD:
				return a + b;
			case MathOperator.SUBTRACT:
				return a - b;
			case MathOperator.MULTIPLY:
				return a * b;
			case MathOperator.DIVIDE:
				return a / b;
			default:
				throw new Error('Invalid operator');
		}
	}
}

// Example 12: Enum with Enum Values as Parameters
function F12() {
	console.log(MathCalculator.calculate(MathOperator.ADD, 5, 3));
	console.log(MathCalculator.calculate(MathOperator.MULTIPLY, 4, 5));
}

F12();
