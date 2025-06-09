function countVowels(str) {
  let char = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < char.length; i++) {
    if (vowels.includes(char[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello")); // 2
console.log(countVowels("JuniorDeveloper")); // 7
console.log(countVowels("XYZ")); // 0
