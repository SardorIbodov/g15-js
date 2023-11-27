//! Array
//? 1
// const array = [1, "string", false, {}, [], function() {}];
//? 2
// const array = new Array(2, 4, 6, 8, 10);
// console.log(array);
//?
// const array = new Array(2);
// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
//?
// const array = new Array("2");
// console.log(array);

//! index
// const numbers = [2, 4, 6, 8, 10];
//?
// console.log(numbers[0]);
// console.log(numbers[-1]);
// console.log(numbers[5]);
//? at
// console.log(numbers.at(0));
// console.log(numbers.at(-1));

//! length
// const numbers = [2, 4, 6, 8, 10];
// const numbers = new Array(2);
// console.log(numbers.length, numbers);

//! editing
// let string = "webbrain";
// let array = ["w", "e", "b", "b", "r", "a", "i", "n"];
//? immutable
// string[1] = "a";
// console.log(string);
//? mutable
// array[1] = "a";
// console.log(array);

//! String => Array (split(divider))
// let string = "salom-dunyo-hello";
// let array = string.split("");
// console.log(array);

//! Array => String (join())
// let array = ["w", "e", "b", "b", "r", "a", "i", "n"];
// let string = array.join("-");
// console.log(string);

//! Practice
// let string = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
// let array = string.split(" ");
// console.log(array.length);

//! Array larni qo'shish
// let array1 = [2, 4, 6, 8, 10];
// let array2 = [12, 14, 16, 18, 20];
// let result = array1.concat(array2);
// console.log(result);
// console.log(array1);
// console.log(array1 + array2);

//! Type
// let array1 = [2, 4, 6, 8, 10];
// console.log(typeof array1);
//? Array.isArray()
// console.log(Array.isArray(array1));

//! Loop
// let array1 = [2, 4, 6, 8, 10];
//? for
// for(let i = 0; i < array1.length; i++) {
// 	console.log(array1[i]);
// }
//? for-in
// for(let index in array1) {
// 	console.log(index);
// }
//? for-of
// for(let element of array1) {
// 	console.log(element);
// }

//! Methods
// let array1 = [2, 4, 6, 8, 8, 10];
//? push()
// array1.push(12);
// console.log(array1);
//? pop()
// array1.pop();
// console.log(array1);
//? unshift()
// array1.unshift(0);
// console.log(array1);
//? shift()
// array1.shift();
// console.log(array1);
//? indexOf
// console.log(array1.indexOf(10));
// console.log(array1.indexOf(100));
// console.log(array1.indexOf(8, 4));
//? reverse
// let array = ["w", "e", "b", "b", "r", "a", "i", "n"];
// console.log(array.reverse());
//? slice(start, end)
// console.log(array.slice(3, 6, "s"));
// console.log(array);
//? splice(start, deleteCount, additional)
// array.splice(3, 1)
// console.log(array);
// array.splice(3, 1, "s", "w")
// console.log(array);

// function addLength(str) {
//   let result = [];
//   let arr = str.split(" ");
//   for (let item of arr) {
//     result.push(`${item} ${item.length}`);
//   }
//   return result;
// }
// console.log(addLength("you will win"));
// console.log(Math.sqrt(7) === Math.trunc(Math.sqrt(7)));

// function dominator(arr) {
//   let dominant = -1;
//   for(let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for(let j = 0; j < arr.length; j++) {
//       if(arr[i] === arr[j]) count++;
//     }
//     if(count > arr.length / 2) return arr[i];
//   }
//   return dominant;
// }

// console.log(dominator([3,4,3,2,3,1,3,3]));