// if-else
function FlowIf() {
	const value: number = 10;

	if (value > 0) {
		console.log(`${value} is positive`);
	} else if (value < 0) {
		console.log(`${value} is negative`);
	} else {
		console.log(`${value} is zero`);
	}
}

// while
function FlowWhile() {
	let count = 0;

	while (count < 5) {
		console.log(`while loop count: ${count}`);
		count++;
	}
}

// do-while
function FlowDoWhile() {
	let count = 0;

	do {
		console.log(`do-while loop count: ${count}`);
		count++;
	} while (count < 5);
}

// for
function FlowFor() {
	for (let i = 0; i < 5; i++) {
		console.log(`for loop count: ${i}`);
	}
}

// switch
function FlowSwitch() {
	const day: number = 3;

	switch (day) {
		case 0:
			console.log('Sunday');
			break;
		case 1:
			console.log('Monday');
			break;
		case 2:
			console.log('Tuesday');
			break;
		case 3:
			console.log('Wednesday');
			break;
		case 4:
			console.log('Thursday');
			break;
		case 5:
			console.log('Friday');
			break;
		case 6:
			console.log('Saturday');
			break;
		default:
			console.log('Invalid day');
	}
}

// break and continue
function FlowBreak() {
	for (let i = 0; i < 10; i++) {
		if (i === 2) {
			continue; // skip rest of the loop when i is 2
		}
		if (i === 5) {
			break; // exit the loop when i is 5
		}
		console.log(`break and continue example: ${i}`);
	}
}

FlowIf();
FlowWhile();
FlowDoWhile();
FlowFor();
FlowSwitch();
FlowBreak();
