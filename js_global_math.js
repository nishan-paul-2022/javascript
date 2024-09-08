function MathProperty() {
	console.log('Math Properties:', {
		E: Math.E,
		LN2: Math.LN2,
		LN10: Math.LN10,
		LOG2E: Math.LOG2E,
		LOG10E: Math.LOG10E,
		PI: Math.PI,
		SQRT1_2: Math.SQRT1_2,
		SQRT2: Math.SQRT2
	});
}

function MathMethod() {
	console.log('Math Methods:', {
		Sin: Math.sin(Math.PI / 2),
		Cos: Math.cos(Math.PI),
		Tan: Math.tan(Math.PI / 4),

		Asin: Math.asin(0.5),
		Acos: Math.acos(0.5),
		Atan: Math.atan(1),
		Atan2: Math.atan2(1, 2),

		Sinh: Math.sinh(0),
		Cosh: Math.cosh(0),
		Tanh: Math.tanh(0),

		Asinh: Math.asinh(2),
		Acosh: Math.acosh(2),
		Atanh: Math.atanh(0.5),

		Log: Math.log(0),
		Log1p: Math.log1p(0),
		Log10: Math.log10(100),
		Log2: Math.log2(8),

		Ceil: Math.ceil(4.7),
		Floor: Math.floor(4.7),
		Trunc: Math.trunc(4.9),
		Round: Math.round(3.17),
		Fround: Math.fround(3.14159),

		Abs: Math.abs(-5),
		Sqrt: Math.sqrt(16),
		Cbrt: Math.cbrt(8),
		Exp: Math.exp(1),
		Expm1: Math.expm1(1),
		Clz32: Math.clz32(37),
		Sign: Math.sign(-3),

		Pow: Math.pow(2, 3),
		Imul: Math.imul(2, 4),

		Hypot: Math.hypot(3, 4, 5),
		Max: Math.max(1, 3, 5),
		Min: Math.min(2, 4, 6),

		Random: Math.random()
	});
}

function Random() {
	const random = Math.random(); // 0 to below 10
	const min = 5;
	const max = 15;
	const diff = max - min;
	console.log(Math.floor(random * diff) + min); // min to below max
	console.log(Math.floor(random * (diff + 1)) + min); // min to max
}

MathProperty();
MathMethod();
Random();
