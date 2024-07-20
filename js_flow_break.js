/* eslint-disable no-unreachable */

function F01() {
	labelName: {
		console.log(1);
		console.log(2);
		break labelName;
		console.log(3);
		console.log(4);
		console.log(5);
	}
}

function F02() {
	for (let i = 0; i <= 10; i++) {
		if (i === 5) {
			break;
		}
		console.log(i);
	}
}

function F03() {
	for (let i = 0; i <= 10; i++) {
		if (i === 5) {
			continue;
		}
		console.log(i);
	}
}

F01();
F02();
F03();

/* 
- break exits loop | switch | scope
- continue ignores iteration in loop */
