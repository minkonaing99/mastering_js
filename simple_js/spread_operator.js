// Spread Operator
// Function, Array, Object

// function giveMe4(a, b, c, d) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// }

// giveMe4(1, 2, 3, 4);

// const colors = ["red", "green", "blue", "teal"];

// giveMe4(...colors);
// console.log(...colors);

// const strNums = ["one", "two", "three"];
// const moreStrNums = ["four", "five", "six"];

// const concat = [...strNums, ...moreStrNums];
// console.log(concat);

// console.log(...concat, "seven");

// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// let person = {
//   name: "Thomas",
//   age: 25,
//   gender: "male",
// };

// const clone = { ...person, work: "Developer" };
// console.log(clone);

//problems

let arr = [1, 2, 3];
let arr2 = [4, 5];

const user = {
  name: "jen",
  age: 22,
};

const arr3 = [...arr, ...arr2];
console.log(arr3);

const clone = { ...user };
console.log(clone);
