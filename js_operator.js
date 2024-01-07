/* eslint-disable eqeqeq */

/*
- prefix
- postfix 
- not 
- unary 
- arithmatic 
- shift 
- relational 
- comparison 
- bitwise 
- logical 
- conditional
- assignment */

function Example01() {
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

function Example03() {
	// result: -1 * (n+1)
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

function Example04() {
	const regular1 = {
		a: 1
	};

	console.log(regular1.a.b?.c.d.e);
	console.log(regular1.a.b?.c?.d.e);
	console.log(regular1.a.b?.c?.d?.e);
}

Example01();
Example02();
Example03();
Example04();

/* 
- expression-group, member-access, function-call, optional-chaining, object-create 
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
