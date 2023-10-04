/* eslint-disable no-fallthrough */

const x = 10,
	y = 20,
	z = 30;
const u = 0;
const result = (x + y) / z + u;

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
		console.log('DEFAULT 9');
	default:
		console.log('DEFAULT 9+ OR NEGATIVE');
}
