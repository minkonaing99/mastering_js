capitalizeWords("hello world"); // "Hello World"
capitalizeWords("junior developer test"); // "Junior Developer Test"
capitalizeWords("javascript"); // "Javascript"

function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words.length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  console.log(words.join(" "));
}

capitalizeWords("hello world"); // "Hello World"
capitalizeWords("junior developer test"); // "Junior Developer Test"
capitalizeWords("javascript"); // "Javascript"
