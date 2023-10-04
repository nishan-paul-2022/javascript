// Example 14: Enum with String Literal Values
function F14() {
	type Status = 'ACTIVE' | 'INACTIVE' | 'PENDING';
	const userStatus: Status = 'ACTIVE';
	console.log(userStatus);
}

// Example 15: Enum with Bit Flags
function F15() {
	enum Permission {
		READ = 1 << 0,
		WRITE = 1 << 1,
		EXECUTE = 1 << 2
	}

	const userPermission: Permission = Permission.READ | Permission.WRITE;
	console.log(userPermission & Permission.READ);
	console.log(userPermission & Permission.EXECUTE);
}

F14();
F15();
