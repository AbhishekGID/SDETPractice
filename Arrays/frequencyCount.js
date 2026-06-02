function frequencyCount(arr) {

    let final = {}

    for (let i of arr) {
        if (final[i]) {
            final[i]++
        } else {
            final[i] = 1
        }

    }
    return final
}

console.log(frequencyCount(['h', 'd', 'd', 'a', 'h', 'h']))
console.log(frequencyCount([1, 2, 2, 3, 1, 1]))