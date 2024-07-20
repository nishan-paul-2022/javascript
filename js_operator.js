/* eslint-disable eqeqeq */

// optional-chaining | ?. | null, undefined
function Example01() {
	class ClassA {}

	const user = {
		ID: 1,
		name: 'John',
		address: {
			details: {
				street: '123 Main St',
				city: 'Dhaka',
				zip: '12345'
			}
		}
	};

	const regular = {
		a: 1
	};

	console.log(ClassA.something?.real);

	console.log(user.address.details.city);
	console.log(user.address.details?.city);
	console.log(user.address.detailss?.city);
	// console.log(user.address.detailss.street);

	console.log(regular.a.b?.c.d.e);
	console.log(regular.a.b?.c?.d.e);
	console.log(regular.a.b?.c?.d?.e);
}

// null-coalescing | ?? | null, undefined
function Example02() {
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

// bitwise-not | ~ | result: -1*(n+1)
function Example03() {
	const a = 3.14;
	const b = Math.floor(a);
	const c = ~~a;

	console.log(~3);
	console.log(~-4);
	console.log(b);
	console.log(c);
	console.log(b == c);
	console.log(b === c);
	console.log(Math.floor(3.56));
	console.log(Math.trunc(3.56));
	console.log(Math.trunc(0.56));
}

// falsy values | false, 0, '', null, undefined, NaN
function Example04() {
	const falsy = [false, 0, '', null, undefined, NaN];
	for (const i of falsy) {
		if (i) {
			console.log('true');
		} else {
			console.log('false');
		}
	}
	console.log('' || 'hello');
}

Example01();
Example02();
Example03();
Example04();

/* 
- postfix 
- prefix 
- not 
- unary 
- arithmatic 
- shift 
- relational 
- comparison
- bitwise 
- logical 
- conditional 
- assignment 

arguments await	
boolean break	
case catch class const continue
default delete	do
else export extends	
false finally for function
if import in instanceof 
let	
new null 
return	
static super switch	
this throw true try	typeof	
void
while 
yield

eval with var debugger goto 

private	protected public 
interface implements 
enum 
package	*/
