function F03(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.AnyRandomNumber = () => {
		console.log(Math.random());
	};
}

F03.prototype.hello = function () {
	console.log('hello');
};

function F01() {
	Array.prototype.x = 10;
	const arr = [1, 2, 3];
	console.log(arr.x);
}

function F02() {
	const arr = [1, 2, 3];
	console.log(arr.x);
}

F01();
F02();

const f03 = new F03(1, 2, 3);
f03.hello();
f03.AnyRandomNumber();
