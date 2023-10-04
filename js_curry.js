function CalculateTotalTax(
	amount,
	incomeTax,
	VAT,
	supplementaryDuty,
	customsDuty,
	exciseDuty,
	corporateTax,
	withholdingTax,
	capitalGainsTax,
	turnoverTax,
	importDuty,
	exportDuty,
	propertyTax,
	dividendTax,
	royaltyTax,
	stampDuty
) {
	let totalTax = 0;
	const args = [
		incomeTax,
		VAT,
		supplementaryDuty,
		customsDuty,
		exciseDuty,
		corporateTax,
		withholdingTax,
		capitalGainsTax,
		turnoverTax,
		importDuty,
		exportDuty,
		propertyTax,
		dividendTax,
		royaltyTax,
		stampDuty
	];
	for (const tax of args) {
		totalTax += (amount * tax) / 100;
	}
	return totalTax;
}

function Sum(x, y, z) {
	return x + y + z;
}

function Mul(...values) {
	let total = 1;
	for (const i of values) {
		total *= i;
	}
	return total;
}

// currying function
function Root(Engine) {
	function Parent(...argParent) {
		function Child(...argChild) {
			const argLatest = argParent.concat(argChild);
			const cValue = Parent(...argLatest);
			return cValue;
		}

		const nParent = argParent.length;
		const nEngine = Engine.length;
		let pValue;

		if (nParent >= nEngine) {
			pValue = Engine(...argParent);
		} else {
			pValue = Child;
		}

		return pValue;
	}

	return Parent;
}

// currying function (improvised)
function RootImprovised(Engine, nEngine) {
	function Parent(...argParent) {
		function Child(...argChild) {
			const argLatest = argParent.concat(argChild);
			const cValue = Parent(...argLatest);
			return cValue;
		}

		const nParent = argParent.length;
		let pValue;

		if (nParent >= nEngine) {
			pValue = Engine(...argParent);
		} else {
			pValue = Child;
		}

		return pValue;
	}

	return Parent;
}

function Fn() {
	const cCalculateTotalTax = Root(CalculateTotalTax);
	const result = cCalculateTotalTax(1000)(2, 3, 4)(5, 6, 7, 8)(9, 10, 11)(
		12,
		13,
		14,
		15,
		16
	);
	console.log(result);
}

function Gn() {
	const cSum = Root(Sum);
	const result = cSum(1, 2)(3);
	console.log(result);
}

function Hn() {
	const arrValues = [1, 2, 3, 4, 5, 6, 7];
	const n = arrValues.length;
	const cMul = RootImprovised(Mul, n);
	const result1 = cMul(1, 2)(3, 4)(5, 6, 7);
	const result2 = Mul(...arrValues);
	console.log(result1);
	console.log(result2);
}

Fn();
Gn();
Hn();

/* 
main-function : engine [ has argument set ]
root-function : root [ has engine as arguement ]
     - lets parent memorize engine
parent-function : parent [ has argument set ]
     - lets child memorize arguments
     - invokes engine and returns result | returns child
child-function : child [ has argument set ]
     - merge child arguments with parent arguments
     - invokes parent with merged arguments and stores return-value
     - returns return-value 
*/
