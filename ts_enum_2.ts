enum Arithmatic {
	ADD = 'addition',
	SUB = 'subtraction',
	MUL = 'multiplication',
	DIV = 'dividation'
}

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
		default: {
			const exhaustiveCheck: never = operator;
			console.log('INVALID OPERATOR:', exhaustiveCheck);
		}
	}
}

function EnumArray() {
	function ListOfOperation(): Arithmatic[] {
		return [Arithmatic.ADD, Arithmatic.SUB, Arithmatic.MUL, Arithmatic.DIV];
	}

	const operations: Arithmatic[] = ListOfOperation();
	console.log(operations);
}

Operation(20, 5, Arithmatic.ADD);
Operation(20, 5, Arithmatic.SUB);
Operation(20, 5, Arithmatic.MUL);
Operation(20, 5, Arithmatic.DIV);

EnumArray();
