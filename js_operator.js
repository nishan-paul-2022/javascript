/* eslint-disable eqeqeq */

function Func01() {
	class ClassA {}
	console.log(ClassA.something?.real);

	const user = {
		id: 1,
		name: 'John',
		address: {
			details: {
				street: '123 Main St',
				city: 'Dhaka',
				zip: '12345'
			}
		}
	};

	console.log(user.address.details.city);
	console.log(user.address.details?.city);
	console.log(user.address.detailss?.city);
	// console.log(user.address.detailss.street);
}

// null coalescing operator ??
function Func02() {
	const client = undefined;
	const developer = null;
	const manager = Math.E;
	const ans1 = client ?? 'U/N';
	const ans2 = developer ?? 'U/N';
	const ans3 = manager ?? 'U/N';
	console.log(ans1);
	console.log(ans2);
	console.log(ans3);
}

function Func03() {
	// result will be: -1 * (n+1)
	console.log(~3);
	console.log(~-4);

	const a = 3.14;
	const b = Math.floor(a);
	const c = ~~a;
	console.log(b);
	console.log(c);
	console.log(b == c);
	console.log(b === c);
	console.log(Math.floor(3.56));
	console.log(Math.trunc(3.56));
	console.log(Math.trunc(0.56));
}

Func01();
Func02();
Func03();

/*
optional chaining operator ?.
?. to safely access member
property chain | method chain | mixed chain
chain of node 
except the last node (its' return value can vary), every node must return object to continue the chain reaction
if not, then by using ?. we can set the end result of this chain reaction as undefined
*/
