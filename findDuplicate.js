function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let i of arr) {
        if (seen.has(i)) {
            duplicates.add(i);
        } else {
            seen.add(i);
        }
    }
    return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6, 4]));