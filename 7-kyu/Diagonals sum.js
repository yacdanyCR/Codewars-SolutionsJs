// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

// Matrix = array of n length whose elements are n length arrays of integers.

// 3x3 example:

// diagonals( [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ] ); 

// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7
function sum(matrix) {
    const numbers = []
    let rigthToLeftDiagonal = matrix.length - 1

    for (let f = 0; f < matrix.length; f++) {
        for (let c = 0; c < matrix.length; c++) {
            numbers.push(matrix[f][c])
            numbers.push(matrix[f][rigthToLeftDiagonal])
            rigthToLeftDiagonal--
            f++
        }
    }

    return numbers.reduce((pre, curr) => pre + curr, 0)
}

console.log(sum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))