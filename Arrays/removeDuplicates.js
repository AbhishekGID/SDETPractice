// // Remove Duplicates Using Set
let arr = [1, 2, 2, 4, 4, 4, 3, 1];
let unique = [...new Set(arr)];
console.log(unique);

//Remove using For loop and Set
function removeDupes(arr) {
  let seen = new Set();
  let dupes = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      dupes.push(arr[i]);
    }
  }
  return dupes;
}
console.log(removeDupes([1, 2, 2, 4, 5, 5, 5, 5, 5, 3, 1]));
