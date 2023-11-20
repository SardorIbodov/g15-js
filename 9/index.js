//! 1 - 100
// const randomNumber1 = Math.trunc(Math.random() * 100 + 1);
// console.log(randomNumber1);
// [0, 1) * 100 => [0, 100) + 1 => [1, 101) => [1, 100]

//! 20 - 30
// const randomNumber2 = Math.trunc(Math.random() * 11) + 20;
// console.log(randomNumber2);
// [0, 1) * 11 => [0, 11) => [0, 10] + 20 => [20, 30]

//! 50 - 55
// const randomNumber3 = Math.trunc(Math.random() * 6) + 50;
// console.log(randomNumber3);

//! Function
// const randomNumber = (min, max) =>
//   Math.trunc(Math.random() * (max - min + 1)) + min;

// let result = randomNumber(3, 8);
// console.log(result);

//! hexToDec
// const hexToDec = (hexString) => parseInt(hexString, 16);

//! trunc, sign, abs, ceil, floor, max, min

//! String
//? '', "", ``

//? Escape character, tab, enter
// console.log("Innovatsiya jamoasi");
// console.log("Innovatsiya\njamoasi");

//? uzunligi (length)
// console.log("web".length);
// console.log("1234".length);
// console.log("              ".length);
// console.log("".length);

//? Katta, kichik
//! toUpperCase()
// let firstName = "sardor";
// console.log(firstName.toUpperCase());
//! toLowerCase()
// let firstName = "saRDor";
// console.log(firstName.toLowerCase());
// let firstName = "saRDor";
// console.log(firstName.toLocaleLowerCase());

//? Index
// let email = "web";
//? 1 => []
// console.log(email[0].toUpperCase());
// console.log(email[1].toUpperCase());
// console.log(email[-1]);
//? 2 => at
// console.log(email.at(-1));
//? 3 => charAt
// console.log(email.charAt(1));

//? indexOf()
// let string = "webrabin";
// console.log(string.indexOf("i"));
// console.log(string.indexOf("ra"));
// console.log(string.indexOf("rain"));
// console.log(string.indexOf("o"));
// console.log(string.indexOf("webbrain"));
// console.log(string.indexOf("b"));
// console.log(string.indexOf("b", 3));

//? lastIndexOf()
// let string = "webrabin";
// console.log(string.lastIndexOf("ib", 4));

//? includes()
// let string = "webrabin";
// console.log(string.includes("a"));
// console.log(string.includes("o"));

//? startsWith, endsWith
// let phoneNumber = "+9969012345671";
// console.log(phoneNumber.startsWith("+998"));
// console.log(phoneNumber.endsWith("7"));

//? padEnd, padStart
// let firstName = "some name";
// console.log(firstName.padEnd(3, "#"));
// console.log(firstName.padStart(12, "#"));

//? trim(), trimStart(), trimEnd()
// let spaces = "       a b         ";
// console.log(spaces.length);
// console.log(spaces.trimStart().length);
// console.log(spaces.trimEnd().length);
// console.log(spaces.trim().length);

//? string larni qo'shish
// let st1 = "hello";
// let st2 = "world";
// console.log(st1 + st2);
// console.log(st1.concat(st2));

//? replace(), replaceAll()
// let string = "webbwrain";
// string = string.replaceAll("w", "W");
// string = string.replace("W", "w");
// console.log(string);

//? slice(start, end)
// let string = "webbrain";
// string = string.slice(3, 0);
// console.log(string);

//? subString(start, end)
// let string = "webbrain";
// string = string.substring(3, -1);
// console.log(string);

//? substr(start, count)
// let string = "webbrain";
// console.log(string.substr(2, 3));

// let string = "webbrain";
//! for
// for(let i = 0; i < string.length; i++) {
// 	console.log(string[i]);
// }

//! for-in
// for(let index in string) {
// 	console.log(index, string[index]);
// }

//! for-of
// for(let item of string) {
// 	console.log(item);
// }

//! string => ASCII code
// let string = "*";
// console.log(string.charCodeAt());

//! ASCII code => string
// let number = 126;
// console.log(String.fromCharCode(number));

// let string = "webbrain";
// console.log(string[0]);
// console.log(string[string.length - 1]);
