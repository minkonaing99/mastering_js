function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index right away
    }
  }
  return -1; // If not found, return -1
}

// Test cases:
console.log(findIndex([10, 20, 30, 40], 30)); // 2
console.log(findIndex([1, 2, 3, 4, 5], 6)); // -1
console.log(findIndex(["a", "b", "c"], "b")); // 1
