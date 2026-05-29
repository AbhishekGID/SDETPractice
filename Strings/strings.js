// split
// join
// reverse
// toLowerCase
// includes
// trim

let Firstname = "ABHISHEK";
let ReverseName = Firstname.split("").reverse().join("");
console.log(Firstname);
console.log(ReverseName);
let LowerCaseName = Firstname.toLowerCase();
console.log(LowerCaseName);

for (let char of Firstname) {
  console.log(char);
}

// TRIM
let randomWord = "  HEllo  abhishek";
console.log(randomWord);
let trimWord = randomWord.trim("");
console.log(trimWord);

//Includes
const searchInput = "Abhishek Tyagi";
const isMatch = searchInput.includes("Abhishek");

console.log(isMatch); // Output: true
