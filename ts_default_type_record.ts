// Basic Usage of `Record`
function showPlayerScores() {
	type Scores = Record<string, number>;

	const playerScores: Scores = {
		alice: 10,
		bob: 15,
		charlie: 20
	};

	console.log(playerScores.alice);
	console.log(playerScores.bob);
	console.log(playerScores['charlie']);
}

// Example with Specific Keys
function showRoleDescriptions() {
	type RoleDescriptions = Record<'admin' | 'user' | 'guest', string>;

	const roles: RoleDescriptions = {
		admin: 'Administrator with full access',
		user: 'Regular user with limited access',
		guest: 'Guest with minimal access'
	};

	console.log(roles.admin);
	console.log(roles.user);
	console.log(roles['guest']);
}

// Example with Nested Records
function showTeamScores() {
	type TeamScores = Record<string, Record<string, number>>;

	const teamScores: TeamScores = {
		teamA: {
			alice: 10,
			bob: 15
		},
		teamB: {
			charlie: 20,
			dave: 25
		}
	};

	console.log(teamScores.teamA.alice);
	console.log(teamScores.teamA['bob']);
	console.log(teamScores['teamB'].charlie);
	console.log(teamScores['teamB']['dave']);
}

// Example with Enums
function showRoleCounts() {
	enum Role {
		Admin = 'admin',
		User = 'user',
		Guest = 'guest'
	}

	type RoleCounts = Record<Role, number>;

	const roleCounts: RoleCounts = {
		[Role.Admin]: 1,
		[Role.User]: 5,
		guest: 3
	};

	console.log(roleCounts.admin);
	console.log(roleCounts[Role.User]);
	console.log(roleCounts[Role.Guest]);
}

// Example with Complex Value Types
function showUsers() {
	interface UserDetails {
		age: number;
		email: string;
	}

	type Users = Record<string, UserDetails>;

	const users: Users = {
		alice: { age: 30, email: 'alice@example.com' },
		bob: { age: 25, email: 'bob@example.com' }
	};

	console.log(users.alice.age);
	console.log(users.alice['email']);
	console.log(users['bob'].age);
	console.log(users['bob']['email']);
}

// Example with Empty Object Type
function showEmptyObject() {
	type empty = Record<string, never>;
	const value: empty = {};
	// const value: empty = { name: 'paul' }; // error: type '{ name: string }' is not assignable to type 'Record<string, never>'
	console.log(JSON.stringify(value));
}

showPlayerScores();
showRoleDescriptions();
showTeamScores();
showRoleCounts();
showUsers();
showEmptyObject();
