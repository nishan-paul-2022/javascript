function add(x: number, y: number, z?: number): number {
	if (z) {
		return x + y + z;
	} else {
		return x + y;
	}
}

function DaysInMonth(
	year: number = new Date().getFullYear(),
	month: number
): number | void {
	const isValid = (value: number): boolean => {
		return value > 0 && Number.isInteger(value);
	};
	if (!isValid(year) || !isValid(month)) {
		return undefined;
	}

	let days = 31;
	const day30 = [4, 6, 9, 11];
	if (day30.indexOf(month) !== -1) {
		days = 30;
	} else if (month === 2) {
		const by4 = year % 4 === 0;
		const by100 = year % 100 === 0;
		const by400 = year % 400 === 0;
		const isLeap = (by4 && !by100) || by400;
		if (isLeap) {
			days = 29;
		} else {
			days = 28;
		}
	}
	return days;
}

function RestParameter(...values: number[]): void {
	console.log(...values);
}

function MaxPlusMin(x: number, y: number, ...values: number[]): number {
	return Math.max(x, y, ...values) + Math.min(x, y, ...values);
}

console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(DaysInMonth(2020, 1));
console.log(DaysInMonth(2020, 2));
console.log(DaysInMonth(2021, 2));
console.log(DaysInMonth(undefined, 2));
console.log(DaysInMonth(-234, 2));
RestParameter();
RestParameter(1, 2, 3);
console.log(MaxPlusMin(10, 20));
console.log(MaxPlusMin(10, 20, 30, 40, 50));

/* 
Sometimes, function-overload and function-with-optional-parameter can be used interchangeably.
So, when to use what? 
When fucntional behaviour is significantly dependent on number of parameter, we need to use function overloading. 
Otehrwise, function-with-optional-parameter can do the job.
*/

// Required parameter always comes before optional parameter.

// There can be at most one rest parameter in a function signature and rest parameter can't be optional.
