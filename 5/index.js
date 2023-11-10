//! Function
//? 1. Function declaration
// function sayHi() {
//   alert("Hello world");
// }
// sayHi();

//! Local variable
// function sayHi() {
//   let son = 1;
// }
// sayHi();
// console.log(son);

//! Outer variable
// let son = 1;
// function showNumber() {
// 	console.log(son);
// }
// showNumber();

//! Pitfall => xususiy holat
// let son = 1;
// function showNumber() {
//   let son = 2;
//   console.log(son);
// }
// showNumber();
// console.log(son);

//! Parameter
// function isEven(a) {
//   if (a !== undefined) {
//     if (a % 2 === 0) console.log("Juft");
//     else console.log("Toq");
//   } else console.log("Noto'g'ri ma'lumot kiritildi!");
// }
// isEven(5);
// isEven(10);
// isEven(176);
// isEven(1011);
// isEven(1005);
// isEven(43);
// isEven(67);
// isEven();

//! Default value
// function sayHi(name = "user") {
//   alert(`Hello ${name}`);
// }
// sayHi();
// sayHi("John");

// function sayHi(name) {
//   if(name === undefined) name = "user";
//   name = name === undefined && "user";
//   console.log(`Hello ${name}`);
// }
// sayHi();

//! Argument vs parameter

//! return
// function sayHi(name) {
//   return {};
//   console.log(`Hello ${name}`);
// }
// let result = sayHi("John");
// console.log("natija:", result);

//! Tub sonlikka tekshiradigan funksiya
// function isPrime(son) {
//   if (typeof son === "number" && son > 0) {
//     if (son === 1) {
//       return "Tub ham emas, murakkab ham emas";
//     } else {
//       let count = 0;
//       for (let i = 1; i <= son; i++) {
//         son % i === 0 && count++;
//       }
//       if (count === 2) return "Tub son";
//       else return "Murakkab son";
//     }
//   } else return "Noto'g'ri ma'lumot kiritildi!";
// }
// let result = isPrime(6.6);
// console.log(result);

//! findMax
// function findMax(a, b) {
//   // return a > b ? `${a} katta` : a === b ? "Teng" : `${b} katta`;
//   if (a > b) return `${a} katta`;
//   else if (a === b) return `Teng`;
//   else return `${b} katta`;
// }
// const result = findMax(15, 0.15);
// console.log(result);

// function findMax(a, b) {
//   if (a > b) return `${a} katta`;
// }
// const result = findMax(15, 0.15);
// console.log(result);
