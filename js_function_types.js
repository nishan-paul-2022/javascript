function func(callback) {
	callback(14);
}

const func01 = (x) => {
	return console.log(x);
};
const func02 = function (x) {
	console.log(x);
};
const func03 = function func(x) {
	console.log(x);
};

func01(10); // arrow function expression
func02(11); // anonymous function expression
func03(12); // named function expression
func(func03);

/* 
    function : function signature and function implementation

    - function expression / not reusable 
        :: anonymous function expression 
        :: arrow function expression 
        :: named function expression 

    - function declaration / reusable 
        :: regular function 
        :: constructor function 
        :: constructor 
        :: static / non-static method 
        :: static / non-static accessor (getter / setter) 
        :: function variable 
        :: function object 

    @ recursive function : function calling function itself

    @ nested function / closure : function within function 
        # main concept behind closure : child function can access all members of parent function
        :: static member
        :: data encapsulation
        :: predefined beahviour of function
        :: memorization
        :: currying 

    @ nested function-calling : funtion calling function 
        :: callback hell : callback within callback
*/
