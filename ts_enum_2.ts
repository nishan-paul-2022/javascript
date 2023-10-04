/* eslint-disable @typescript-eslint/no-namespace */

enum Arithmatic {
	ADD = 'addition',
	SUB = 'subtraction',
	MUL = 'multiplication',
	DIV = 'dividation'
}

namespace Arithmatic {
	export function Operation(
		operand1: number,
		operand2: number,
		operator: Arithmatic
	): void {
		switch (operator) {
			case Arithmatic.ADD:
				console.log(operand1 + operand2);
				break;
			case Arithmatic.SUB:
				console.log(operand1 - operand2);
				break;
			case Arithmatic.MUL:
				console.log(operand1 * operand2);
				break;
			case Arithmatic.DIV:
				console.log(operand1 / operand2);
				break;
			default:
				console.log('INVALID OPERATOR');
		}
	}

	export function AllOperations(): Arithmatic[] {
		return [Arithmatic.ADD, Arithmatic.SUB, Arithmatic.MUL, Arithmatic.DIV];
	}
}

const spreadWithEnum = { ...Arithmatic };
console.log(spreadWithEnum);

Arithmatic.Operation(20, 5, Arithmatic.ADD);
Arithmatic.Operation(20, 5, Arithmatic.SUB);
Arithmatic.Operation(20, 5, Arithmatic.MUL);
Arithmatic.Operation(20, 5, Arithmatic.DIV);

console.log(Arithmatic.AllOperations());
