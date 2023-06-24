// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]
// If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
function smaller(nums) {
    let i = 0
    const countSmaller = []

    while (i < nums.length) {
        const auxNumber = nums[i]
        const numsSmaller = nums.slice(i + 1).filter((el) => el < auxNumber).length

        countSmaller.push(numsSmaller)
        i++
    }

    return countSmaller

}

console.log(smaller([1, 2, 0]))