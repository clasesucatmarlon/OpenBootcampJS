// FUNCIONES CON COMMONJS

// function add (a, b) {
//     return a + b;
// };

// function product (a, b) {
//     return a * b;
// };

// function pow (a, b) {
//     return a ** b;
// };

// /**
//  * Function for calculated the factorial
//  * @param {value} number for calculated factorial 
//  * @returns the factorial of one number 
//  */
// function factorial (value) {
//     var fact = 1;
//     for (let index = 2; index <= value; index++) {
//         fact *= index;
//     };
//     return fact;
// };

// module.exports = {
//     add,
//     product,
//     pow,
//     factorial
// };

// FUNCIONES CON ES6
export function add (a, b) {
    return a + b;
};

export function product (a, b) {
    return a * b;
};

export function pow (a, b) {
    return a ** b;
};

/**
 * Function for calculated the factorial
 * @param {value} number for calculated factorial 
 * @returns the factorial of one number 
 */
export function factorial (value) {
    var fact = 1;
    for (let index = 2; index <= value; index++) {
        fact *= index;
    };
    return fact;
};
