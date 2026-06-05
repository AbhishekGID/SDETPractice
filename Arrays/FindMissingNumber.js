function findMissingNumber(arr) {
  for (let i = 1; i <= arr.length + 1; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}
console.log(findMissingNumber([1, 2, 3, 4, 6]));
