// split
// join
// reverse
// toLowerCase and toUpperCase
// includes
// trim

let Firstname = "ABHISHEK";
//Reverse
let ReverseName = Firstname.split("").reverse().join("");
console.log(Firstname);
console.log(ReverseName);

//toLowerCase
let LowerCaseName = Firstname.toLowerCase();
console.log(LowerCaseName);

//toUpperrCase
const LastName = "tyagi";
let UpperCaseName = LastName.toUpperCase();
console.log(UpperCaseName);

// To print each Char of the string
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
