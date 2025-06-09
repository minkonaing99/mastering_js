function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

findMax([1, 5, 3, 9, 2]); // 9
findMax([-10, -3, -1, -20]); // -1
