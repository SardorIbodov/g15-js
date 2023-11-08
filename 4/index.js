//! Hafta kunlari
// let number = prompt("1-7 gacha son kiriting:");
// if (number === "1") alert("Dushanba");
// else if (number === "2") alert("Seshanba");
// else if (number === "3") alert("Chorshanba");
// else if (number === "4") alert("Payshanba");
// else if (number === "5") alert("Juma");
// else if (number === "6") alert("Shanba");
// else if (number === "7") alert("Yakshanba");
// else alert("Noto'g'ri ma'lumot kiritildi");

// ||, &&, ??, >, <, *, /

//! Switch-case
// switch (number) {
//   case "1":
//   case "2":
// 		alert("Haftaning boshi!");
// 		break;
//   case "3":
//     alert("Chorshanba");
//     break;
//   case "4":
//     alert("Payshanba");
//     break;
//   case "5":
//     alert("Juma");
//     break;
//   case "6":
//     alert("Shanba");
//     break;
//   case "7":
//     alert("Yakshanba");
//     break;
//   default:
//     alert("Noto'g'ri ma'lumot kiritildi");
// }

//! Task
// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let amal = prompt("Amalni kiriting:");
// switch (amal) {
//   case "+":
//     alert(`${a} + ${b} = ${a + b}`);
//     break;
//   case "-":
//     alert(`${a} - ${b} = ${a - b}`);
//     break;
//   case "*":
//     alert(`${a} * ${b} = ${a * b}`);
//     break;
//   case "/":
//     alert(`${a} / ${b} = ${a / b}`);
//     break;
//   default:
//     alert("Noto'g'ri amal kiritildi!");
// }

//! Loops - (while, do-while, for)
//? while
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// let i = 1;
// while(i <= 10) {
// 	alert(i);
// 	i++;
// }

//! n gacha bo'lgan juft sonlarni topamiz
// 1 (0 <= 5)
// 2 (1 <= 5)
// 3 (2 <= 5)
// 4 (3 <= 5)
// 5 (4 <= 5)
// 6 (5 <= 5)
// 7 (6 <= 5)
// let n = +prompt("Son kiriting:"); // 5
// let i = 0;
// while (i <= n) {
//   if (i % 2 === 0) console.log(i);
//   i++;
// }

//! Task
// k = 5, n = 100
// let k = prompt('k ni kiriting:');
// let n = prompt('n ni kiriting:');
// let i = 1;
// while(i <= n) {
// 	console.log(k);
// 	i++;
// }

//! Task
// n = 50
// let n = +prompt("Son kiriting:");
// let i = n;
// while (i >= 1) {
//   console.log(i);
//   i /= 2;
// }

//? do-while
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 1);

// while (i < 1) {
//   console.log(i);
//   i++;
// }

//? for
// for(start, condition, step)
// 1) i = 1
// 2) i = 2
// 3) i = 3
// 4) i = 4
// for (let i = 1; i <= 3; i++) {
//   console.log(i, "for ni ichi");
// }

//! Task
// let k = prompt('k ni kiriting:');
// let n = prompt('n ni kiriting:');
// for(let i = 1; i <= n; i++) {
// 	console.log(k);
// }

//! Skipping
//? start
// let i = 0;
// for (; i <= 3; i++) {
//   console.log(i);
// }
//? step
// let i = 0;
// for(; i < 10; ) {
// 	console.log(i);
// 	i++;
// }
//? all
// for (;;) {
//   console.log(1);
// }

//! 1
// let a = +prompt("a ni kiriting:"); // 10
// let b = +prompt("b ni kiriting:"); // 7
// for(i = a; i >= b; i--) {
// 	console.log(i);
// }
// let i = b;
// while(i <= a) {
// 	console.log(i);
// 	i++;
// }

//! 4
// let price = 10000;
// for(let k = 1; k <= 10; k++) {
// 	console.log(k * price);
// }

//! 9
// let a = 10;
// let b = 20;
// 11, 12, ..., 19
// 11*11, 12*12, ..., 19*19
// let sum = 0;
// for(let i = a + 1; i < b; i++) {
// 	console.log(i);
// 	sum += i * i
// }
// console.log("Natija:", sum);

//! Tub son
// 2, 3, 5, 7, 11, 13, 17, 19, 23

//! n gacha bo'lgan tub son topish
// let n = 100;
// for(let i = 2; i <= n; i++) {
// 	let count = 0;
// 	for(let j = 1; j <= i; j++) {
// 		if(i % j === 0) count++;
// 	}
// 	if(count === 2) console.log(i);
// }

//! n gacha bo'lgan murakkab son topish
// let n = 100;
// for(let i = 2; i <= n; i++) {
// 	let count = 0;
// 	for(let j = 1; j <= i; j++) {
// 		if(i % j === 0) count++;
// 	}
// 	if(count > 2) console.log(i);
// }

//! 9, karra jadval
// for (let k = 1; k <= 9; k++) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${k} * ${i} = ${k * i}`);
//   }
// 	console.log("-------------------------");
// }

//! 16
// let n = 100;
// for(let i = 0; i <= n; i++) {
// 	if(i % 5 === 0) continue;
// 	console.log(i);
// }

// let n = 100;
// for(let i = 0; i <= n; i++) {
// 	if(i % 5 !== 0) console.log(i);
// }

//! 5
// a, b, c
// a > b && b > c

//! 6
// a = 8
// b = 15
// c = 10
// console.log(b < a && b > c || b > a && b < c);

//! 8
// a, b, c, d
// let a = 4, b = 3, c = 5, d = 1;
// console.log(a >= 0 && b >= 0 && c >= 0 && d >= 0);

//! 9
// a, b, c
// let a = 3,
//   b = 2,
//   c = 5;
// console.log(
//   (a >= 0 && b >= 0 && c <= 0) ||
//     (a <= 0 && b >= 0 && c >= 0) ||
//     (a >= 0 && b <= 0 && c >= 0)
// );

//! 14
// let a = +prompt("a");
// let b = +prompt("b");
// if (a > b) console.log("a katta");
// else if (b > a) console.log("b katta");
// else console.log("a va b teng");

//! 15
// let a = +prompt("a");
// let b = +prompt("b");
// let c = +prompt("c");

// if (a > b && a > c) console.log("a katta");
// else if (b > a && b > c) console.log("b katta");
// else if (c > a && c > b) console.log("c katta");
// else if (a === b && b === c) console.log("3 lasi teng");

//! 3 xonali son berilgan, raqamlari yigindisini topish
// 236 => 2 + 3 + 6
// 267 => 2 + 6 + 7

// let n = prompt("n");
// if (n >= 100 && n <= 999) {
//   let birlar = n % 10;
//   let onlar = ((n - (n % 10)) / 10) % 10;
//   let yuzlar = (n - onlar * 10 - birlar) / 100;
//   console.log(yuzlar + onlar + birlar);
// } else alert("3 xonali butun son kiriting!");
