//! CRUD => Create + Read + Update + Delete

let students = [
  { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
  { id: 2, year: 2002, name: "Najmiddin Nazarov" },
  { id: 3, year: 2000, name: "Asilbek Tolipov" },
  { id: 4, year: 2002, name: "Mominov Abdulloh" },
  { id: 5, year: 1995, name: "Sardor Tursunboyev" },
  { id: 6, year: 2002, name: "Mohichehra Hudoyberdieva" },
  { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
  { id: 8, year: 2002, name: "Shohruh Shukurov" },
];

//? Create
// function createStudent(info) {
// 	let newStudents = [...students, {id: students.length + 1, ...info}];
// 	students = newStudents;
// }
// createStudent({year: 2001, name: "Student of WBA"});
// createStudent({year: 2002, name: "2nd Student of WBA"});
// console.log(students);

//? Read
// function sortByYear() {
// 	let newStudents = students.sort((a, b) => a.year - b.year);
// 	students = newStudents;
// }
// sortByYear();
// function sortByName() {
//   let newStudents = students.sort((a, b) => a.name.localeCompare(b.name));
//   students = newStudents;
// }
// sortByName();
// console.log(students);
// function searchByName(name) {
//   let newStudents = students.filter((value) =>
//     value.name.toLowerCase().includes(name.toLowerCase())
//   );
//   students = newStudents;
// }
// searchByName("asilbek");
// console.log(students);

//? Update
// function updateStudent(id, info) {
//   let newStudents = students.map((value) =>
//     value.id === id ? { ...value, ...info } : value
//   );
//   students = newStudents;
// }
// updateStudent(5, { year: 2003, name: "Student of WBA" });
// console.log(students);

//? Delete
// function deleteStudent(id1, id2) {
//   let newStudents = students.filter((value) => value.id !== id1 && value.id !== id2);
//   students = newStudents;
// }
// function deleteStudent(id) {
//   let newStudents = students.filter((value) => value.id !== id);
//   students = newStudents;
// }
// deleteStudent(5);
// deleteStudent(6);
// deleteStudent(5, 6);
// console.log(students);
