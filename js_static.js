class C01 {
	static counter = 0;
	counter = 10;

	NonStaticCounter() {
		console.log(this.counter);
	}

	static Counter() {
		console.log(C01.counter++);
	}

	static GetCounter() {
		console.log('Value of Counter:', this.counter);
	}
}

function F01() {
	const c01 = new C01();
	C01.Counter();
	C01.Counter();
	C01.GetCounter();
	c01.NonStaticCounter();
	C01.Counter();
}

F01();
