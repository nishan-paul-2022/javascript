function createPromise(value) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(value);
		}, 1000);
	});
}

const regular1 = {
	start: 0,
	end: 5,
	count: 0,
	[Symbol.iterator]: function () {
		return {
			next: () => {
				regular1.count++;
				if (regular1.count > regular1.end) {
					regular1.count = regular1.start;
					return { value: undefined, done: true };
				} else {
					return {
						value: createPromise(regular1.count),
						done: false
					};
				}
			}
		};
	}
};

const regular2 = {
	start: 0,
	end: 5,
	count: 0,
	[Symbol.asyncIterator]: function () {
		return {
			next: () => {
				regular2.count++;
				if (regular2.count > regular2.end) {
					regular2.count = regular2.start;
					return createPromise({ value: undefined, done: true });
				} else {
					return createPromise({
						value: regular2.count,
						done: false
					});
				}
			}
		};
	}
};

const regular3 = {
	start: 0,
	end: 5,
	count: 0,
	[Symbol.iterator]: function () {
		return {
			next: () => {
				regular3.count++;
				if (regular3.count > regular3.end) {
					regular3.count = regular3.start;
					return { value: undefined, done: true };
				} else {
					return {
						value: createPromise(regular3.count),
						done: false
					};
				}
			}
		};
	},
	[Symbol.asyncIterator]: function () {
		return {
			next: () => {
				regular3.count++;
				if (regular3.count > regular3.end) {
					regular3.count = regular3.start;
					return createPromise({ value: undefined, done: true });
				} else {
					return createPromise({
						value: regular3.count,
						done: false
					});
				}
			}
		};
	}
};

const regular4 = {
	start: 0,
	end: 5,
	[Symbol.iterator]: function* () {
		for (let i = regular4.start + 1; i <= regular4.end; i++) {
			yield createPromise(i);
		}
	}
};

const regular5 = {
	start: 0,
	end: 5,
	[Symbol.asyncIterator]: function* () {
		for (let i = regular5.start + 1; i <= regular5.end; i++) {
			yield createPromise(i);
		}
	}
};

const regular6 = {
	start: 0,
	end: 5,
	[Symbol.iterator]: function* () {
		for (let i = regular4.start + 1; i <= regular4.end; i++) {
			yield createPromise(i);
		}
	},
	[Symbol.asyncIterator]: function* () {
		for (let i = regular5.start + 1; i <= regular5.end; i++) {
			yield createPromise(i);
		}
	}
};

async function LoopSync(regular) {
	try {
		for (const i of regular) {
			console.log(await i);
		}
	} catch (error) {
		console.log(error.message);
	}
}

async function LoopAsync(regular) {
	for await (const i of regular) {
		console.log(i);
	}
}

async function LoopAsyncGenerator(regular) {
	for await (const i of regular) {
		console.log(await i);
	}
}

await LoopSync(regular1);
await LoopAsync(regular1);

await LoopSync(regular2);
await LoopAsync(regular2);

await LoopSync(regular3);
await LoopAsync(regular3);

await LoopSync(regular4);
await LoopAsync(regular4);

await LoopSync(regular5);
await LoopAsyncGenerator(regular5);

await LoopSync(regular6);
await LoopAsyncGenerator(regular6);

/*
# regular-object
# iterable-object [ Symbol.iterator / Symbol.asyncIterator ]
# iterator [ next ]
# value-object
# value

- regular[Symbol.iterator]().next().value
- await regular[Symbol.iterator]().next().value
- (await regular[Symbol.asyncIterator]().next()).value

returnValueOfGenerator is iterator and iterable-object

const returnValueOfGenerator = {
	next: function () {
		return this[Symbol.itetrator]().next();
	},
	[Symbol.itetrator]: () => {
		return {
			next: () => {
				const ans = { value: 1, done: false };
				return ans;
			}
		};
	}
};
*/
