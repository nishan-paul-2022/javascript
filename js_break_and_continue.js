/* eslint-disable no-unreachable */

labelName: {
	console.log(1);
	console.log(2);
	break labelName;
	console.log(3);
	console.log(4);
	console.log(5);
}

for (let i = 0; i <= 10; i++) {
	if (i === 5) {
		break;
	}
	console.log(i);
}

for (let i = 0; i <= 10; i++) {
	if (i === 5) {
		continue;
	}
	console.log(i);
}

/* 
break : exits loop, switch, and scope
continue : skips iteration in loop */
