function* EvenNumberGenerator(): Generator<number, void, never> {
	let even = 0;
	while (true) {
		yield even;
		even += 2;
	}
}

function* RandomNumberGenerator(): Generator<number, boolean, number> {
	console.log('indicator-start');
	console.log(yield Math.random());

	const con1 = yield Math.random();
	console.log('indicator-1');
	console.log(con1);

	const con2 = yield Math.random();
	console.log('indicator-2');
	console.log(con2);

	console.log(yield Math.random());

	console.log('indicator-end');

	return true;
}

function UseCase01() {
	const generator = EvenNumberGenerator();
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
}

function UseCase02() {
	// let generator = RandomNumberGenerator();
	// console.log(generator.next(1));
	// console.log(generator.next(2));
	// console.log(generator.next(3));
	// console.log(generator.next(4));
	// console.log(generator.next(5));
	// console.log(generator.next(6));

	const generator1 = RandomNumberGenerator() as Iterable<number>;
	// generator1.next(); // invalid

	for (const value of generator1) {
		console.log(value);
	}
}

UseCase01();
UseCase02();

// const customIterable = {
//     data: [1, 2, 3, 4],

//     [Symbol.iterator]() {
//         const self = this;
//         let currentIndex = 0;

//         return {
//             next() {
//                 if (currentIndex < self.data.length) {
//                     const value = self.data[currentIndex];
//                     currentIndex++;
//                     return { value, done: false };
//                 } else {
//                     return { done: true };
//                 }
//             }
//         };
//     }
// };

// // Using the custom iterable with a for...of loop
// for (const item of customIterable) {
//     console.log(item);
// }

// let iterable = customIterable[Symbol.iterator]();
// console.log(iterable.next());
