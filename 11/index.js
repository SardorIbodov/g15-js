// let array = [1, 2, 6, 4, 8, 7, 11, 13];
//? 1
// let newArray = [];
// for (let item of array) {
//   if (item % 2 === 0) newArray.push(item);
// }
// console.log(newArray);
//? 2
//! filter(function)
//? callback
// let newArray = array.filter((value, index, array) => value % 2 === 1);
// const students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 8, year: 2002, name: "Shukurov Shohruh" },
// ];
// let newArray = [];
// for (let student of students) {
//   if (student.year > 2000) newArray.push(student);
// }
// console.log(newArray);

// students.filter((value) => value.year > 2000);
// console.log(students);

//! sort
// let array = [13, 2, 61, 43, 81, 75, 1100, 113];
// let newArray = array.sort((a, b) => b - a);

// const students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 8, year: 2002, name: "Shukurov Shohruh" },
// ];

// students.sort((a, b) => b.name.localeCompare(a.name));

// console.log(students);

// let newArray = students.sort((a, b) => b.year - a.year);

// let array = ["web", "brain", "aca", "demy"];
// let newArray = array.sort((a, b) => b.localeCompare(a))

//! map
// let numbers = [2, 4, 6, 8, 10];
// let newArray = numbers.map((value, index, array) => value * 2);
// console.log(numbers);

//! forEach
// let numbers = [2, 4, 6, 8, 10];
// let newArray = numbers.forEach((value, index, array) => {
//   return 1;
// });
// console.log(newArray);

//! find
// const students = [
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
// ];
// let searched = students.find((value, index, array) => value.year > 1995);

//! findIndex
// const students = [
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
// ];
// let searched = students.findIndex((value, index, array) => value.year === 1995);

//! findLastIndex
// const students = [
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
// ];
// let searched = students.findLastIndex(
//   (value, index, array) => value.year === 1995
// );

//! every => &&
// let numbers = [1, 3, 7, 19, 13, 7, 8];
// let isOdd = numbers.every((value, index, array) => value % 2 === 1);

//! some => ||
// let numbers = [1, 3, 7, 19, 13, 7, 9];
// let hasEven = numbers.some((v, i, a) => v % 2 === 0);

//! fill(value, start, end)
// let fruits = ["apple", "orange", "kiwi", "banana"]; // grapes
// let newFruits = fruits.fill("grapes", 1, 3);
// console.log(fruits);

//! copyWithin(pasteStart, start, end)
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newNumbers = numbers.copyWithin(1, 5, 8);
// console.log(newNumbers);
// console.log(numbers);

//! flat()
// let array = [1, [2, [3, [4, [5, 6]]]]];
// console.log(array.flat(Infinity));

//! Array.from()
// let string = "webbrain";
// let array = Array.from(string, (item) => {
//   return item + "+";
// });
// console.log(array);

//! reduce
// let numbers = [1, 2, 3, 4, 5, 6];

// let sum = numbers.reduce((value, current) => {
// 	return current * value;
  // 1)
	// current = 1
	// value = 0
	// 2)
	// current = 2
	// value = 1
	// 3)
	// current = 3
	// value = 3
	// 4) 
	// current = 4
	// value = 6
	// 5)
	// current = 5
	// value = 10
	// 6)
	// current = 6
	// value = 15
// }, 1);

// console.log(sum);
