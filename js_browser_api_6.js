let count = 0;

function Counter() {
	count++;
	postMessage(count);
	setTimeout(Counter, 1000);
}

Counter();
