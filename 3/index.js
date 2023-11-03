//! alert()
// alert("Hello world");

//! confirm()
// let answer = confirm("Are you a student?");
// alert(answer);

//! prompt()
// let answer = prompt("How old are you?");
// alert(`Siz kiritgan yosh: ${answer}`);

//! if
// let answer = prompt("Alisher nechanchi yil tug'ilgan?");
// if (+answer === 1441) {
//   alert("Sizning javobingiz to'g'ri!");
// } else {
// 	alert("Sizning javobingiz xato!")
// 	alert("Qaytadan urunib ko'ring!")
// }

//! Juft toq son
// let answer = prompt("Son kiriting:");
// if(+answer % 2 === 0) alert("Siz juft son kiritdingiz!");
// else alert("Siz toq son kiritdingiz!");

//! Ichma-ich if
// let answer = prompt("Son kiriting:");
// if (!isNaN(+answer)) {
//   if (+answer % 2 === 0) alert("Siz juft son kiritdingiz!");
//   else alert("Siz toq son kiritdingiz!");
// } else alert("Raqam kiriting!");

//! Passport va prava olish
// let age = prompt("Yoshingizni kiriting:");
// if (!isNaN(age)) {
//   if (age >= 18) {
//     alert("Passport va prava oladi!");
//   } else {
//     if (age >= 16) {
//       alert("Faqat passport oladi");
//     } else alert("2 lasini ham olmaydi!");
//   }
// } else {
// 	alert("Son kiriting!");
// 	window.location.reload();
// };

// if(age <= 18 && age >= 16) console.log("16 va 18 oraligida");
// if (age.trim() === "") window.location.reload();

//! Mantiqiy operatorlar (||, &&, !, ??)
// Nullish operator
// console.log(undefined ?? null ?? false);

// console.log(null || ((undefined ?? false) && "19") || []);
// console.log(null || false && "19" || []);
// console.log(null || false || []);

//! Ternary operator
// let answer = prompt("Son kiriting:");
// if(+answer % 2 === 0) alert("Siz juft son kiritdingiz!");
// else alert("Siz toq son kiritdingiz!");
// +answer % 2 === 0
//   ? alert("Siz juft son kiritdingiz!")
//   : alert("Siz toq son kiritdingiz!");

// let age = prompt("Yoshingizni kiriting:");
// if (!isNaN(age)) {
//   if (age >= 18) {
//     alert("Passport va prava oladi!");
//   } else {
//     if (age >= 16) {
//       alert("Faqat passport oladi");
//     } else alert("2 lasini ham olmaydi!");
//   }
// } else {
// 	alert("Son kiriting!");
// 	window.location.reload();
// };

// !isNaN(age)
//   ? age >= 18
//     ? alert("Passport va prava oladi!")
//     : age >= 16
//     ? alert("Faqat passport oladi")
//     : alert("2 lasini ham olmaydi!")
//   : alert("Son kiriting!");

// age >= 18 ? alert("Katta") : alert("Kichik")