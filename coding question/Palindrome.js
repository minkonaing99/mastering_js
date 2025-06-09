function isPalindrome(str) {
  let char = str.toLowerCase().split("");
  char.reverse();
  let reverse = char.join("");
  console.log(str.toLowerCase() == reverse);
}
isPalindrome("racecar"); // true
isPalindrome("Madam"); // true
isPalindrome("hello"); // false
isPalindrome("Level"); // true
