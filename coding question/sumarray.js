function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

sumArray([1, 2, 3, 4, 5]); // 15
sumArray([-2, 5, 10]); // 13
sumArray([]); // 0
