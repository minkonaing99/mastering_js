function removeDuplicate(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

const arr1 = [1, 2, 3, 4, 5, 6, 1, 2, 5];
console.log(removeDuplicate(arr1));
