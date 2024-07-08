type alphanumeric = number[] | number | string;

function add(x: number[], y: number[]): number[];
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: alphanumeric, y: alphanumeric): alphanumeric {
	let z: alphanumeric;

	if (Array.isArray(x) && Array.isArray(y)) {
		z = x.concat(y);
	} else if (typeof x === 'number' && typeof y === 'number') {
		z = x + y;
	} else {
		z = `${x} and ${y}`;
	}

	console.log(z);
	return z;
}

function mul(x: number, y: number): number;
function mul(x: number, y: number, z: number): number;
function mul(x: number, y: number, z?: number): number {
	let value: number;

	if (z) {
		value = x * y * z;
	} else {
		value = x * y;
	}

	console.log(value);
	return value;
}

class Counter {
	count: number = 0;

	Count(): void;
	Count(n: number): void;
	Count(n?: number): void {
		let value: number = ++this.count;
		let caption: string = '';

		if (n) {
			value = n;
		}

		for (let i = 0; i < value; i++) {
			caption += i + ' ';
		}

		console.log(caption);
	}
}

add(10, 20);
add('10', '20');
// add(10, '20'); // invalid

mul(10, 20);
mul(10, 20, 30);

const counter = new Counter();
counter.Count();
counter.Count(10);
counter.Count();
counter.Count();

/*
Sometimes, function-overload and function-with-optional-parameter can be used interchangeably.
So, when to use what? 
When fucntional behaviour is significantly dependent on number of parameter, we need to use function overloading. 
Otehrwise, function-with-optional-parameter can do the job.

Required parameter always comes before optional parameter.

There can be at most one rest parameter in a function signature and rest parameter can't be optional. */
