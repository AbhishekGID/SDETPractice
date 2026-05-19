function findOddEven(arr) {
    let even = []
    let odd = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])

        }
        else {
            odd.push(arr[i])
        }
    }

    console.log(even)
    console.log(odd)

}

findOddEven([2, 3, 4, 5, 5, 6, 7, 8])