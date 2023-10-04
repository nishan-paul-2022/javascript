/* eslint-disable no-unreachable */

labelName: {
	console.log(1);
	console.log(2);
	break labelName;
	console.log(3);
	console.log(4);
	console.log(5);
}

// break : exits loop / switch
// continue : skips loop iteration
