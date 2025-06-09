function reverseString(str) {
  // Step 1: Split the string into an array of characters
  let chars = str.split("");
  // Step 2: Reverse the array
  chars.reverse();
  // Step 3: Join the array back into a string
  return chars.join("");
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("junior")); // Output: "roinuj"

function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString("hello"));
