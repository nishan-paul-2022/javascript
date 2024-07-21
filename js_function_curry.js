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
			const currentValue = Parent(...argLatest);
			return currentValue;
		}

		const parentLength = argParent.length;
		const engineLength = Engine.length;
		let previousValue;

		if (parentLength >= engineLength) {
			previousValue = Engine(...argParent);
		} else {
			previousValue = Child;
		}

		return previousValue;
	}

	return Parent;
}

// currying function (improvised)
function RootImprovised(Engine, engineLength) {
	function Parent(...argParent) {
		function Child(...argChild) {
			const argLatest = argParent.concat(argChild);
			const currentValue = Parent(...argLatest);
			return currentValue;
		}

		const parentLength = argParent.length;
		let previousValue;

		if (parentLength >= engineLength) {
			previousValue = Engine(...argParent);
		} else {
			previousValue = Child;
		}

		return previousValue;
	}

	return Parent;
}

function F01() {
	const curried = Root(CalculateTotalTax);
	const result = curried(1000)(2, 3, 4)(5, 6, 7, 8)(9, 10, 11)(
		12,
		13,
		14,
		15,
		16
	);
	console.log(result);
}

function F02() {
	const curried = Root(Sum);
	const result = curried(1, 2)(3);
	console.log(result);
}

function F03() {
	const array = [1, 2, 3, 4, 5, 6, 7];
	const n = array.length;
	const curried = RootImprovised(Mul, n);
	const result1 = curried(1, 2)(3, 4)(5, 6, 7);
	const result2 = Mul(...array);
	console.log(result1);
	console.log(result2);
}

F01();
F02();
F03();

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
     - returns return-value */
