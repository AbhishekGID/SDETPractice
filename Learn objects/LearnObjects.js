// Creating an object
let user = {
    name: "Abhishek",
    role: "QA",
    experience: 6
}

// Incrementing the experience value by 1
user.experience++

console.log(user.experience) // 7

// Getting all keys from object
console.log(Object.keys(user))
// ["name", "role", "experience"]

// Getting all values from object
console.log(Object.values(user))
// ["Abhishek", "QA", 7]

// Printing full object
console.log(user)

// Getting key-value pairs
console.log(Object.entries(user))

// Checking if key exists
console.log(user.hasOwnProperty("name"))
// true

// Deleting a property
delete user.role

console.log(user)
// { name: 'Abhishek', experience: 7 }

// Freezing object (no changes allowed after this)
Object.freeze(user)

// Trying to change value after freeze
user.name = "Rahul"

console.log(user.name)
// Still prints: Abhishek