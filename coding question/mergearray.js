function mergeArrays(arr1, arr2) {
  let mergeArr = [...arr1, ...arr2];
  return mergeArr;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

mergeArrays(["a"], ["b", "c"]); // ["a", "b", "c"]
mergeArrays([], [1, 2]); // [1, 2]
