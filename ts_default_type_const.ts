// top level constant
function F01() {
	const profile = Object.freeze({
		name: 'paul',
		age: 25,
		height: 5.5,
		weight: '57kg',
		figure: {
			arms: 'good',
			shoulder: 'best',
			back: 'best'
		}
	});

	console.log(profile);
	console.log(Object.isFrozen(profile));
	// profile.weight = '70kg'; /* read-only property */
	profile.figure.arms = 'best';
}

// root level constant
function F02() {
	const profile = {
		name: 'paul',
		age: 25,
		height: 5.5,
		weight: '57kg',
		figure: {
			arms: 'good',
			shoulder: 'best',
			back: 'best'
		}
	} as const;

	console.log(profile);
	console.log(Object.isFrozen(profile));
	// profile.weight = '70kg'; /* read-only property */
	// profile.figure.arms = 'v=best'; /* read-only property */
}

F01();
F02();

/* const can be used with literal only */
