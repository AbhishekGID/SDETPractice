function fibonacci(n) {
    let a = 0
    let b = 1
    console.log(a)
    console.log(b)
    for (let i = 2; i < n; i++) {

        let next = a + b

        console.log(next)

        a = b
        b = next
    }
}
fibonacci(17)


// Store Fibonacci in Array
function fibonaccii(n) {
    let series = [0, 1]
    for (let i = 2; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2]
    }
    return series
}

console.log(fibonaccii(20))
