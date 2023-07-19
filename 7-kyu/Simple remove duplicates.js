// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!
function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let duplicateNumber = false
        for (let current = i + 1; current < arr.length; current++) {
            if (arr[i] === arr[current]) {
                arr.splice(i, 1)
                duplicateNumber = true
                break
            }
        }

        if (duplicateNumber) {
            i--
        }
    }
    return arr
}

console.log(solve([1, 2, 1, 2, 1, 2, 3]))