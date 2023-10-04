const range = {
	from: 1,
	to: 5,

	// [Symbol.iterator]() { // (1)
	//     return {
	//         current: this.from,
	//         last: this.to,

	//         next() { // (2)
	//             if (this.current <= this.last) {
	//                 return { done: false, value: this.current++ };
	//             } else {
	//                 return { done: true };
	//             }
	//         }
	//     };
	// },

	*[Symbol.iterator]() {
		// (1)
		let current = this.from;
		for (let i = this.from; i <= this.to; i++) {
			yield current++;
		}
	},

	[Symbol.asyncIterator]() {
		// (1)
		return {
			current: this.from,
			last: this.to,

			async next() {
				// (2)

				// note: we can use "await" inside the async next:
				await new Promise((resolve) => {
					return setTimeout(resolve, 1000);
				}); // (3)

				if (this.current <= this.last) {
					return { done: false, value: this.current++ };
				} else {
					return { done: true };
				}
			}
		};
	}
};

(async () => {
	for await (const value of range) {
		// (4)
		console.log(value); // 1,2,3,4,5
	}

	for (const value of range) {
		// (4)
		console.log(value); // 1,2,3,4,5
	}
})();

console.log({ ...range });
