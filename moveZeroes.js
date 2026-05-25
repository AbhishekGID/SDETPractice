// Move all 0s to the end of array.
// Input:
// [1,0,2,0,3,4,0]
// Output:
// [1,2,3,4,0,0,0]

function moveZeros(arr) {
  let result = [];
  let zeroCount = 0;

  for (let num of arr) {
    if (!num == 0) {
      result.push(num);
    } else {
      zeroCount++;
    }
  }

  for (i = 1; i <= zeroCount; i++) {
    result.push(0);
  }
  return result;
}

console.log(moveZeros([1, 0, 2, 0, 3, 4, 0]));
console.log(moveZeros([1, 0, 0, 2]));
