// Function to calculate sum using for...of loop
function Sum(arr) {
  let sum = 0;
  // Loop through each number in array
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(`Sum is ${Sum([1, 2, 3])}`);

// Function to calculate sum using normal for loop
function sumArray(arr) {
  let sum = 0;
  // Loop through array using index
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumArray([1, 2, 4, 7]);
