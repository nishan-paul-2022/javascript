function log(value) {
	console.log(value);
}

function logDate(value) {
	console.log(new Date(value));
}

function HowToStoreDataInDB() {
	const today = new Date();
	const currDate = today.toLocaleDateString();
	const currMonth = today.toLocaleDateString('default', { month: 'long' });
	log(today);
	log(currDate);
	log(currMonth);
}

function GetMethod() {
	const d = new Date();
	log(d.getFullYear());
	log(d.getMonth() + 1);
	log(d.getDate());
	log(d.getHours());
	log(d.getMinutes());
	log(d.getSeconds());
	log(d.getMilliseconds());
	log(d.getDay());
	log(d.getTime());
	log(d.getTimezoneOffset()); // (UTC - BD STANDARD TIME) in minute
}

function GetUTCMethod() {
	const d = new Date();
	log(d.getUTCFullYear());
	log(d.getUTCMonth() + 1);
	log(d.getUTCDate());
	log(d.getUTCHours());
	log(d.getUTCMinutes());
	log(d.getUTCSeconds());
	log(d.getUTCMilliseconds());
	log(d.getUTCDay());
}

function CreateDate() {
	log(new Date('October 13, 2014 11:13:00'));
	log(new Date('October 13, 2014 11:13:00Z'));
	log(new Date('2022-03-25'));
	log(new Date(2018, 11, 24, 10, 33, 30, 0));
	log(new Date(2018, 3, 24, 10, 33, 30));
	log(new Date(2018, 3, 24, 10, 33));
	log(new Date(2018, 3, 24, 10));
	log(new Date(2018, 3, 24));
	log(new Date(2018, 3));
	log(new Date(2018));
	log(new Date(99, 11, 24));
	log(new Date(9, 11, 24));
	log(new Date(86400000));
	log(new Date(-86400000));
}

function DateFormat() {
	// international time
	log(new Date('2015-03-25'));
	log(new Date('2015-03'));
	log(new Date('2015'));

	// local time
	log(new Date('03/25/2015'));
	log(new Date('Mar 25 2015'));
	log(new Date('25 Mar 2015'));
	log(new Date('25 March 2015'));
	log(new Date('25, MARCH, 2015'));
}

function ConvertDate() {
	const d = new Date();
	log(d.toString());
	log(d.toDateString());
	log(d.toUTCString());
	log(d.toISOString());
}

function StaticMethod() {
	log(Date.now());
	log(Date.parse('March 21, 2012'));
}

function SetMethod() {
	const d = new Date(); // current date in UTC
	logDate(d.setFullYear(2021));
	logDate(d.setFullYear(2020, 5, 10));
	logDate(d.setMonth(7));
	logDate(d.setDate(3));
	logDate(d.setHours(10));
	logDate(d.setMinutes(5));
	logDate(d.setSeconds(10));
	logDate(d.setMilliseconds(50));
}

HowToStoreDataInDB();
GetMethod();
GetUTCMethod();
CreateDate();
DateFormat();
ConvertDate();
StaticMethod();
SetMethod();

/* 
always store time in millisecond according to international timezone
Timezone - GMT
Standard - UTC
Format - ISO */
