//Destructuring allows us to "unpack" values from data-structures (arrays, objects) into separate distinct variable

const foo = ["one", "two", "three", "four"];
// console.log(foo[0]);
// console.log(foo[1]);
// console.log(foo[2]);

// const [one] = foo;
// console.log(one);

const [red, green, blue, white, black] = foo;
console.log(red);
console.log(green);
console.log(blue);
console.log(white);
console.log(black);
