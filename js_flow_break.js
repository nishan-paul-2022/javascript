/* eslint-disable no-unreachable */

function Usecase01() {
	labelName: {
		console.log(1);
		console.log(2);
		break labelName;
		console.log(3);
		console.log(4);
		console.log(5);
	}
}

function Usecase02() {
	for (let i = 0; i <= 10; i++) {
		if (i === 5) {
			break;
		}
		console.log(i);
	}
}

function Usecase03() {
	for (let i = 0; i <= 10; i++) {
		if (i === 5) {
			continue;
		}
		console.log(i);
	}
}

Usecase01();
Usecase02();
Usecase03();

/* 
- break exits loop | switch | scope
- continue ignores iteration in loop */
