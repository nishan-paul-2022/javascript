import fs from 'fs';
import fsPromise from 'fs/promises';
import util from 'util';

function CallbackBasedFunction(arg1, arg2, callback) {
	if (arg1 && arg2) {
		callback(null, 'success');
	} else {
		callback('failure');
	}
}

function PromiseBasedFunction(arg1, arg2) {
	const promise = new Promise((setResolve, setReject) => {
		if (arg1 && arg2) {
			setResolve('success');
		} else {
			setReject('failure');
		}
	});
	return promise;
}

function CallbackExecute(callbackified) {
	callbackified('zmax.html', 'utf-8', (error, data) => {
		if (error) {
			console.error(error);
		} else {
			console.log(data);
		}
	});
}

function PromiseExecute1(promisifiedFunction) {
	promisifiedFunction('zmax.html', 'utf-8')
		.then((resolve) => {
			console.log(resolve);
		})
		.catch((reject) => {
			console.log(reject);
		});
}

async function PromiseExecute2(promisifiedFunction) {
	try {
		const resolve = await promisifiedFunction('zmax.html', 'utf-8');
		console.log(resolve);
	} catch (reject) {
		console.log(reject);
	}
}

const promise1 = util.promisify(CallbackBasedFunction);
const promise2 = util.promisify(fs.readFile);
const callback1 = util.callbackify(PromiseBasedFunction);
const callback2 = util.callbackify(fsPromise.readFile);
const promise3 = util.promisify(callback1);
const promise4 = util.promisify(callback2);
const callback3 = util.callbackify(promise1);
const callback4 = util.callbackify(promise2);

CallbackExecute(CallbackBasedFunction);
CallbackExecute(fs.readFile);
CallbackExecute(callback1);
CallbackExecute(callback2);
CallbackExecute(callback3);
CallbackExecute(callback4);

PromiseExecute1(PromiseBasedFunction);
PromiseExecute1(fsPromise.readFile);
PromiseExecute1(promise1);
PromiseExecute1(promise2);
PromiseExecute1(promise3);
PromiseExecute1(promise4);

await PromiseExecute2(PromiseBasedFunction);
await PromiseExecute2(fsPromise.readFile);
await PromiseExecute2(promise1);
await PromiseExecute2(promise2);
await PromiseExecute2(promise3);
await PromiseExecute2(promise4);
