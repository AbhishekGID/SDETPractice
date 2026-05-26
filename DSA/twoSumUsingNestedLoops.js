// Input:
// arr = [2, 7, 11, 15]
// target = 9

// Two SUM Using Nested Loop
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]]
            }
        }
    }
}

console.log(twoSum([3, 8, 11, 6], 9))