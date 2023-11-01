//! String ga o'tish
// let boolean = true;
// console.log(typeof boolean, boolean);
// let number = 2;
// console.log(number);
//? 1. String()
// let satr = String(boolean);
// console.log(typeof satr, satr);
// let satr = String(number);
// console.log(String(number));
//? 2. ``
// let satr = `${boolean}`;
// console.log(typeof satr);
// let satr = `${number}`;
// console.log(satr);

// let boolean = false;
// console.log(String(boolean) + 10);

//! Numeric convertion
// let string = "5";
// let string2 = "10";
// let symbol = "a";
//? 1. Number()
// console.log(Number(string) + Number(string2));
//? 2. +
// console.log((+string) + (+string2));
//?
// console.log(Number(symbol));
// console.log(+symbol);
//! "5" + "10" => "510"
//! "5" * "10" => 500
//! "5" - "10" => -5
//! "5" / "10" => 0.5
// console.log("5" - "10");
// console.log("5" * "10");
// console.log("5" / "10");
//?
// let n = null;
// console.log(+n);
//?
// let u;
// console.log(+u);
//?
// console.log(+true);
// console.log(+false);

//! Boolean conversion
//? Boolean()
//? 1
// true => 1, " ", ["salom"], {},
// false => 0, "", null, undefined, NaN
// console.log(Boolean());
// console.log(Boolean("\na") - 2);
// console.log(Boolean("\na") - 2);
// console.log(4 > 3);
// console.log(4 < 3);
// console.log(+Boolean("0"));
// console.log(Boolean(" "));

//! Qoldiqli bo'lish
// console.log(5 % 2);
// console.log(10 % 2);
// console.log(13 % 3);

//! Daraja
// console.log(3 * 3 * 3 * 3);
// console.log(3 ** 4);

//!
// let a = 10;
// a = a + 5;
// a += 5;
// console.log(a);

//! Increment ++, Decrement --
//! ++a => prefix
//! a++ => postfix
//? a++ = a + 1
//? a-- = a - 1
// let a = 10;
// console.log(a++);
// console.log(a);

//! Mantiqiy operatorlar
//? Mantiqiy inkor
// console.log(!"salom");
//? ==, ===
//? == (faqat qiymat bilan tekshiradi)
// console.log(2 == "2");
//? === (qiymat va data-type bilan tekshiradi)
// console.log(2 === "2");
//? !==
// console.log(3 !== 3);

//! Mantiqiy qo'shish (or, ||), Mantiqiy ko'paytirish (and, &&)
//? OR
//? 1 || 1 => 1
//? 1 || 0 => 1
//? 0 || 0 => 0
//? 0 || 1 => 1

//? And
//? 1 && 1 => 1
//? 1 && 0 => 0
//? 0 && 0 => 0
//? 0 && 1 => 0

// console.log(null || "some" && undefined || 4 && {} || []);
// console.log(null || undefined || 4 && {} || []);
// console.log(null || undefined || {} || []);
// console.log({});
