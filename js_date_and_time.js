function print(value) {
	console.log(value);
}

function printDate(value) {
	console.log(new Date(value));
}

function HowToStoreDataInDB() {
	const today = new Date();
	const currDate = today.toLocaleDateString();
	const currMonth = today.toLocaleDateString('default', { month: 'long' });
	print(today);
	print(currDate);
	print(currMonth);
}

function GetMethod() {
	const d = new Date();
	print(d.getFullYear());
	print(d.getMonth() + 1);
	print(d.getDate());
	print(d.getHours());
	print(d.getMinutes());
	print(d.getSeconds());
	print(d.getMilliseconds());
	print(d.getDay());
	print(d.getTime());
	print(d.getTimezoneOffset()); // (UTC - BD STANDARD TIME) in minute
}

function GetUTCMethod() {
	const d = new Date();
	print(d.getUTCFullYear());
	print(d.getUTCMonth() + 1);
	print(d.getUTCDate());
	print(d.getUTCHours());
	print(d.getUTCMinutes());
	print(d.getUTCSeconds());
	print(d.getUTCMilliseconds());
	print(d.getUTCDay());
}

function CreateDate() {
	print(new Date('October 13, 2014 11:13:00'));
	print(new Date('October 13, 2014 11:13:00Z'));
	print(new Date('2022-03-25'));
	print(new Date(2018, 11, 24, 10, 33, 30, 0));
	print(new Date(2018, 3, 24, 10, 33, 30));
	print(new Date(2018, 3, 24, 10, 33));
	print(new Date(2018, 3, 24, 10));
	print(new Date(2018, 3, 24));
	print(new Date(2018, 3));
	print(new Date(2018));
	print(new Date(99, 11, 24));
	print(new Date(9, 11, 24));
	print(new Date(86400000));
	print(new Date(-86400000));
}

function DateFormat() {
	// international time
	print(new Date('2015-03-25'));
	print(new Date('2015-03'));
	print(new Date('2015'));

	// local time
	print(new Date('03/25/2015'));
	print(new Date('Mar 25 2015'));
	print(new Date('25 Mar 2015'));
	print(new Date('25 March 2015'));
	print(new Date('25, MARCH, 2015'));
}

function ConvertDate() {
	const d = new Date();
	print(d.toString());
	print(d.toDateString());
	print(d.toUTCString());
	print(d.toISOString());
}

function StaticMethod() {
	print(Date.now());
	print(Date.parse('March 21, 2012'));
}

function SetMethod() {
	const d = new Date(); // current date in UTC
	printDate(d.setFullYear(2021));
	printDate(d.setFullYear(2020, 5, 10));
	printDate(d.setMonth(7));
	printDate(d.setDate(3));
	printDate(d.setHours(10));
	printDate(d.setMinutes(5));
	printDate(d.setSeconds(10));
	printDate(d.setMilliseconds(50));
}

HowToStoreDataInDB();
GetMethod();
GetUTCMethod();
CreateDate();
DateFormat();
ConvertDate();
StaticMethod();
SetMethod();

// always store time in millisecond according to international timezone
// Timezone - GMT
// Standard - UTC
// Format - ISO
