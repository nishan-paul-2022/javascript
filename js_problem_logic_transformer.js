const weirdExpressions = [
	'a othoba b',
	'b ebong c othoba d',
	'ebong ebong othoba othoba ebong',
	'((ebong) othoba ebong) ebong othoba',
	'(ebong othoba (ebong ebong ((othoba)othoba(ebong))))',
	'ebong'
];

function processExpression(expression) {
	const tokens = expression.split(/([\s()])/).filter((token) => {
		return token !== '';
	});

	let isPreviousTokenLogicOp = true;

	const processedTokens = tokens.map((token) => {
		const isLogicOp = token === 'ebong' || token === 'othoba';
		const isWhitespaceOrParen =
			token === ' ' || token === '(' || token === ')';
		const isVariable = !isLogicOp && !isWhitespaceOrParen;

		if (isWhitespaceOrParen) {
			return token;
		} else if (isVariable) {
			isPreviousTokenLogicOp = false;
			return token;
		} else if (isLogicOp && isPreviousTokenLogicOp) {
			isPreviousTokenLogicOp = false;
			return token;
		} else if (isLogicOp && !isPreviousTokenLogicOp) {
			isPreviousTokenLogicOp = true;
			return token === 'ebong' ? '&&' : '||';
		}
	});

	return processedTokens.join('');
}

for (const expression of weirdExpressions) {
	const processedExpression = processExpression(expression);
	console.log(processedExpression);
}
