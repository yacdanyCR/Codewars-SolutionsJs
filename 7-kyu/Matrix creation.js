// Create an identity matrix of the specified size( >= 0).

// Some examples:

// (1)  =>  [[1]]

// (2) => [ [1,0],
//          [0,1] ]

//        [ [1,0,0,0,0],
//          [0,1,0,0,0],
// (5) =>   [0,0,1,0,0],
//          [0,0,0,1,0],
//          [0,0,0,0,1] ]   
const fillMatrix = (matrix) => {
    let leftDiagonal = 0, position = 0

    for (let f = 0; f < matrix.length; f++) {
        for (let c = 0; c < matrix.length; c++) {
            leftDiagonal === f && position === c ? matrix[f][c] = 1 : matrix[f][c] = 0
        }
        leftDiagonal++
        position++
    }
    return matrix
}

function getMatrix(number) {
    const matrix = new Array(number)

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(number)
    }

    return fillMatrix(matrix)
}

console.log(getMatrix(5))