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

//! Break
// for(let i = 0; i < 10; i++) {
// 	console.log(i);
// 	if(i === 5) break;
// }

//! Continue
// for(let i = 0; i < 10; i++) {
// 	if(i === 5) continue;
// 	console.log(i);
// }