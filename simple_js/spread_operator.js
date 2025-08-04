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

const strNums = ["one", "two", "three"];
const moreStrNums = ["four", "five", "six"];

const concat = [...strNums, ...moreStrNums];
console.log(concat);

console.log(...concat, "seven");
