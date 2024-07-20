/* eslint-disable no-fallthrough */

const result = Math.abs(Math.round(1));

function F01() {
	switch (result) {
		case 1:
			console.log('HELLO 1');
		case 2:
			console.log('HELLO 2');
		case 3:
			console.log('HELLO 3');
			break;
		case 4:
			console.log('OK 4');
			break;
		case 5:
			console.log('FINE 5');
			break;
		case 6:
			console.log('WHATSUP 6');
		case 7:
			console.log('WHATSUP 7');
		case 8:
			console.log('WHATSUP 8');
			break;
		case 9:
			console.log('MAX 9');
			break;
		default:
			console.log('DEFAULT 9+');
	}
}

function F02() {
	if (result >= 1 && result <= 3) {
		console.log('value: 1-3');
	} else if (result === 4) {
		console.log('value: 4');
	} else if (result === 5) {
		console.log('value: 5');
	} else if (result >= 6 && result <= 8) {
		console.log('value: 6-8');
	} else if (result === 9) {
		console.log('value: 9');
	} else {
		console.log('value: 9+');
	}
}

F01();
F02();
