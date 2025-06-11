const user_number = [1, 4, 2, 6, 7, 8, 9, 1, "Tun Tun"];

let result = user_number.map((item, index, ary) => {
  return item < 4;
});

console.log(result);

let result2 = user_number.forEach((number) => {
  console.log(number);
});

let result3 = user_number.filter((item) => {
  return item <= 3;
});

console.log(result3);

let result4 = user_number.find((item) => {
  return item == 1;
});

console.log(result4);
