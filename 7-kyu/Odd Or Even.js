Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    return array.length === 0 ? 'even' :
        array.reduce((pre, curr) => pre + curr) % 2 === 0
            ? 'even'
            : 'odd'
}