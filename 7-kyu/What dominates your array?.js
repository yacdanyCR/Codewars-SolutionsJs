// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.
const mapNumbers = (array) => {
    const uniqueNumbers = [...new Set(array)];
    const numbersMap = new Map();

    for (let i = 0; i < uniqueNumbers.length; i++) {
        numbersMap.set(uniqueNumbers[i], 0)
    }
    return numbersMap
}

const fillRepNumbers = (repNumbers, arr) => {
    for (let i = 0; i < arr.length; i++) {
        const prevNum = repNumbers.get(arr[i])
        repNumbers.set(arr[i], prevNum + 1)
    }
    return repNumbers
}

function dominator(arr) {
    let repNumbers = mapNumbers(arr);
    repNumbers = fillRepNumbers(repNumbers, arr);

    const maxNumRep = {
        key: 0,
        max: Math.max(...repNumbers.values())
    }
    for (const value of repNumbers) {
        if (maxNumRep.max === value[1]) {
            maxNumRep.key = value[0]
            break
        }
    }

    return maxNumRep.max > arr.length / 2 ? maxNumRep.key : -1
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]))