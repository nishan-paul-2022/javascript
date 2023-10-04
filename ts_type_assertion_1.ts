/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

function UseCase01() {
	const someValue: any = 'Hello, TypeScript!';
	const strLength: number = (someValue as string).length;
}

function UseCase02() {
	const element = document.getElementById('myElement') as HTMLInputElement;
	element.value = 'HelloWorld';
}

function UseCase03() {
	const x: any = 'Hello';
	const y: number = (x as string).length;
}

function UseCase04() {
	const maybeString: string | undefined = 'WinterSoldier';
	const definitelyString: string = maybeString as string;
}

function UseCase05() {
	type F = (data: string) => void;
	const callback: F = ((data) => {
		console.log(data);
	}) as F;
}

function UseCase06() {
	const value: string | number = 'Hello';
	if (typeof value === 'string') {
		const strLength: number = (value as string).length;
	}
}

function UseCase07() {
	interface MyType {
		name: string;
		age: number;
	}

	const data: any = { name: 'John', age: 30 };
	const myObj = data as MyType;
}

function UseCase08() {
	const Colors = {
		RED: Symbol('red'),
		GREEN: 'green',
		BLUE: Math.E
	} as const;
}

UseCase01();
UseCase02();
UseCase03();
UseCase04();
UseCase05();
UseCase06();
UseCase07();
UseCase08();
