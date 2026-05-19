function maxMin(arr) {
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxMin([2, 3, 4, 5, 6, 7, 6]))