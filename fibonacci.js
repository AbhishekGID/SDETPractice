function fibb(n) {
  let f1 = 0;
  let f2 = 1;
  console.log(f1);
  console.log(f2);
  for (i = 2; i <= n; i++) {
    let next = f1 + f2;
    console.log(next);
    f1 = f2;
    f2 = next;
  }
}
fibb(6);

// Store Fibonacci in Array
function fibonaccii(n) {
  let series = [0, 1];
  for (let i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
}

console.log(fibonaccii(20));
