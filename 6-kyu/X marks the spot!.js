// // Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. The X will be represented by 1's and the rest will be 0's.
// // E.g.

// x(5) === [[1, 0, 0, 0, 1],
//           [0, 1, 0, 1, 0],
//           [0, 0, 1, 0, 0],
//           [0, 1, 0, 1, 0],
//           [1, 0, 0, 0, 1]];

// x(6) === [[1, 0, 0, 0, 0, 1],
//           [0, 1, 0, 0, 1, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 1, 0, 0, 1, 0],
//           [1, 0, 0, 0, 0, 1]];

const setLeftDiagonal = (matrix) => {
    for (let f = 0; f < matrix.length; f++) {
        for (let c = 0; c < matrix.length; c++) {
            matrix[f][c] = 1
            f++
        }
    }
}

const setRightDiagonal = (matrix) => {
    let rightDiagonal = matrix.length - 1

    for (let f = 0; f < matrix.length; f++) {
        for (let c = 0; c < matrix.length; c++) {
            matrix[f][rightDiagonal] = 1
            f++
            rightDiagonal -= 1
        }
    }
}

const fillMatrix = (matrix) => {
    for (let f = 0; f < matrix.length; f++) {
        for (let c = 0; c < matrix.length; c++) {
            if (matrix[f][c] !== 1) {
                matrix[f][c] = 0
            }
        }
    }
}

function x(n) {
    const matrix = new Array(n)

    for (let index = 0; index < matrix.length; index++) {
        matrix[index] = new Array(n)
    }

    setLeftDiagonal(matrix)
    setRightDiagonal(matrix)
    fillMatrix(matrix)

    return matrix
}


console.log(x(5))