function DaysInMonth(
	month: number,
	year: number = new Date().getFullYear()
): number | void {
	const flag1: boolean = Number.isInteger(month) && 1 <= month && month <= 12;
	const flag2: boolean = Number.isInteger(year) && year > 0;

	if (flag1 && flag2) {
		let days = 31;
		const months = [4, 6, 9, 11];

		if (months.indexOf(month) !== -1) {
			days = 30;
		} else if (month === 2) {
			const by4 = year % 4 === 0;
			const by100 = year % 100 === 0;
			const by400 = year % 400 === 0;
			const isLeap = (by4 && !by100) || by400;
			days = isLeap ? 29 : 28;
		}

		console.log(month, year, days);
		return days;
	} else {
		console.log('undefined');
	}
}

function MaxPlusMin(...values: number[]): number {
	const sum: number = Math.max(...values) + Math.min(...values);
	console.log(sum);
	return sum;
}

DaysInMonth(2, 2021);
DaysInMonth(2);
MaxPlusMin(10, 20, 30);
MaxPlusMin(10, 20, 30, 40, 50);

/*
function declaration :
	- function signature 
	- function implementation

parameter :
	- required parameter 
	- optional parameter 
	- default parameter 
	- rest parameter */
