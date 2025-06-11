const user_number = [1, 4, 2, 6, 7, 8, 9, 1];

let result = user_number.map((item, index, ary) => {
  return item < 4;
});

console.log(result);

let result2 = user_number.forEach((number) => {
  return number * 10;
});

console.log(result2);
