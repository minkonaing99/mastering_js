const person = {
  name: "John Doe",
  age: 20,
  email: "js@gmail.com",
  inSubscribed: true,
  hobbies: ["reading", "playing games"],
  address: {
    city: "New York",
    idk: true,
  },
};

//JSON.stringify()
const personJson = JSON.stringify(person);
console.log(person);
console.log(personJson);

const parsedObject = JSON.parse(personJson);
console.log(parsedObject);
