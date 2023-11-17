//! Object.freeze(target)
// let person = {
//   login: "john01",
//   password: "3232",
// };
// Object.freeze(person);
// person.login = "something";
// delete person.password;
// person.description = "premium";
// console.log(person);

//! Object.seal(target)
// let person = {
//   login: "john01",
//   password: "3232",
// };
// Object.seal(person);
// person.login = "something"; // t
// delete person.password // f
// person.description = "premium"; // f
// console.log(person);

//! Copying
//? initialize
// let person = {
//   login: "john01",
//   password: "3232",
// };
// let copyPerson = person;
// copyPerson.login = "john";
// console.log(copyPerson, "copy");
// console.log(person, "original");
//? structuredClone(target)
// let person = {
//   login: "john01",
//   password: "3232",
// };
// let copyPerson = structuredClone(person);
// console.log(copyPerson);
// copyPerson.login = "john";
// console.log(copyPerson, "copy");
// console.log(person, "original");

//! Object larni qo'shish
// let person = {
//   name: "Developer",
//   age: 30,
// };
// let addional = {
//   job: "programmer",
// };
// let extra = {
// 	height: 181,
// }

//? Object.assign(person, addional, ....)
// Object.assign(person, addional, extra);
// console.log(person);
// let copyPerson = Object.assign(person);
// copyPerson.name = "dev";
// console.log(person);

//! Abbriviation
// let name = "dev";
// let age = 30;

// let object = {
// 	name,
// 	age,
// }

// console.log(object);

//! Object in object (sum of ages)
// let grandfather = {
//   name: "Eshmat",
//   age: 80,
//   child: {
//     name: "Toshmat",
//     age: 50,
//     child: {
//       name: "Xolmat",
//       age: 20,
// 			child: {
// 				name: "some",
// 				age: 2
// 			}
//     },
//   },
// };

//?
// function sumOfAges(object) {
// 	let sum = 0;
// 	while(object) {
// 		sum += object.age;
// 		object = object.child;
// 	}
// 	return sum;
// }

//! 1
// sumOfAges(grandfather)
// object = grandfather
// while(grandfather)
// sum += grandfather.age = 80
// object = grandfather.child

//! 2
// sum += grandfather.child.age = 80 + 50
// object = grandfather.child.child

//! 3
// sum += 80 + 50 + 20
// object = grandfather.child.child.child

//! 4
// object = undefined

//! Garbage collection
// let object = {name: "web"};
// console.log(object);
// object = 2;
// console.log(object);

//! Function inside object
// let person = {
//   firstName: "John",
//   height: 180,
//   toMeter: function () {
//     return person.height / 100;
//   },
// };

// let person = {
//   firstName: "John",
//   height: 180,
//   toMeter: () => {
//     return person.height / 100;
//   },
// };

// let person = {
//   firstName: "John",
//   height: 180,
//   toMeter(){
//     return person.height / 100;
//   },
// };

// console.log(person.toMeter());

//! this
// let person = {
// 	name: "web",
// 	age: 30,
// 	showThis: function() {
// 		console.log(this.name, this.age);
// 	}
// }

// person.showThis()

// let circle = {
//   radius: 5,
//   getSquare: function () {
//     return this.radius ** 2 * 3.14;
//   },
// };

// console.log(circle.getSquare());

// let circle = {
//   radius: 5,
// 	info: {
// 		color: "red",
// 		showThis: function() {
// 			console.log(this);
// 		}
// 	}
// };

// circle.info.showThis()

//! Destructure => qayta nomlash
// let radius = 45;

// let circle = {
//   radius: 5,
//   color: "red",
//   info: {
//     name: "Web",
//   },
// };

// let radius = circle.radius;
// let color = circle.color;

// let { radius: RADIUS, color: rang, info: {name} } = circle;

// console.log(RADIUS);
// console.log(rang);
// console.log(name);

//! Optional chaining (?)
// let animal = undefined
// console.log(animal.age);
// console.log(animal?.age?.info);

//! spread operator (...)
// let person = {
//   name: "Developer",
//   age: 30,
// };

// let newPerson = {...person, job: "frontend"};
// console.log(newPerson);

// let salaries = {
//   john: 300,
//   ann: 250,
//   pete: 400,
//   pete2: 450,
//   pete3: 450,
// };
// function sum(object) {
// 	let sum = 0;
// 	for(let person in object) {
// 		sum += object[person];
// 	}
// 	return sum;
// }
// console.log(sum(salaries))

function getPow(x, y) {
	let pow = x;
	for(let i = y; i > 1; i--) {
		x *= pow; 
	}
	return x;
}

console.log(getPow(2, 5));
