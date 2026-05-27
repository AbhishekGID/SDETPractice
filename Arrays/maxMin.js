// Find Maximum Number in Array
function max(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (max < num) {
      max = num;
    }
  }
  return max;
}
console.log(max([2, 3, 9, 10, 8, 1]));

// Find Minimum Number in Array
function Min(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
console.log(Min([2, 3, 4, 1, 5, 6, 7, 6]));
