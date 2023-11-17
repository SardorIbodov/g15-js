// Number -> 64 bit

//! Numbers with underscore
// let million = 1000000;
// let millionSimple = 1_000_000;
// console.log(million);
// console.log(millionSimple);

//! Numbers with e
// let number = 1000000000;
// let eNumber = 1e9;
// let number = 0.00001;
// let eNumber = 1e-5;
// console.log(number);
// console.log(eNumber);

//! Sanoq sistemalari
//? 10 lik => 0, 1, 2, ... , 9
//? 2 lik (binary) => 0, 1
//? 16 lik => 0, 1, 2, ... , 9, A, B, C, D, E, F
// console.log(100);
//? 1 => 1
//? 2 => 10
//? 3 => 11
//? 4 => 100
//? 5 => 101
// console.log(0b100);
// console.log(0b111);
// console.log(0xFF);
//! 10 lik => 2 lik
//! 10 lik => 16 lik
//! number.toString(... lik) (2 - 36)
// let n = 47;
// console.log(+n.toString(2));
// console.log(n.toString(16));
//! toString => (number -> string)
// let n = 100;
// console.log(n.toString());
// console.log(5..toString(2));
// console.log((5).toString(2));

//! Rounding
//? Math.ceil()
// let number = 5;
// let number = -5.6;
// console.log(Math.ceil(number));
//? Math.floor()
// let number = 5.9999;
// let number = -5.65;
// console.log(Math.floor(number));
//? Math.round
// let number = 5.49;
// console.log(Math.round(number));
//? Math.trunc
// let number = 5.65;
// let number = -5.65;
// console.log(Math.trunc(number));

//! toFixed()
// let number = 5.678;
// console.log(+number.toFixed(1));
// console.log(+number.toFixed(2));
// console.log(+number.toFixed(7));

//! check
// console.log(1e500);

//!
// console.log(+(0.1 + 0.2).toFixed(1));
// console.log((0.1).toFixed(20));

//! isNaN
// console.log(isNaN(NaN));
// console.log(NaN === NaN);

//! isFinite
// console.log(isFinite(Infinity));

//! ==, ===, Object.is(v1, v2)
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));

//! +, parseInt, parseFloat
// console.log(parseInt("3.532"));
// console.log(parseFloat("3.532"));

// console.log(parseInt("2b3a"));
// console.log(parseFloat("2b3a"));

//! 
// console.log(parseInt(1011, 2));

//! Math.max()
// console.log(Math.max(4, 3, 6));

//! Math.min()
// console.log(Math.min(4, 3, 6));

//! Math.pow(a, b)
// console.log(Math.pow(3, 4));

//! Math.random() => [0, 1)
// console.log(Math.trunc(Math.random() * 26));

//! function getRandom(a, b) {};
// a = 10
// b = 100

// console.log(Math.trunc(Math.random() * 91) + 10);

//! sign
// console.log(Math.sign(-0));

//! abs
// console.log(Math.abs(-10));

