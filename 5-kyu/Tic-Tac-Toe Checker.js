// DESCRIPTION:
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
const checkRows = (board) => {
    for (let f = 0; f < board.length; f++) {
        let player_1 = 0
        let player_2 = 0
        for (let c = 0; c < board.length; c++) {
            if (board[f][c] === 1) {
                player_1++
            }
            if (board[f][c] === 2) {
                player_2++
            }
        }

        if (player_1 === 3) {
            return [true, 1]
        } else if (player_2 === 3) {
            return [true, 2]
        }
    }
    return [false]
}

const checkColumns = (board) => {
    let column = 0

    for (let f = 0; f < board.length; f++) {
        let player_1 = 0
        let player_2 = 0
        let row = 0
        for (let c = 0; c < board.length; c++) {
            if (board[row][column] === 1) {
                player_1++
            }
            if (board[row][column] === 2) {
                player_2++
            }
            row++
        }

        if (player_1 === 3) {
            return [true, 1]
        } else if (player_2 === 3) {
            return [true, 0]
        }
        column++
    }
    return [false]
}

const checkDiagonals = (board) => {
    let diagLefToRight = 0
    for (let f = 0; f < 1; f++) {
        let player_1 = 0
        let player_2 = 0

        for (let c = 0; c < board.length; c++) {
            if (board[diagLefToRight][c] === 1) {
                player_1++
            }
            if (board[diagLefToRight][c] === 2) {
                player_2++
            }
            diagLefToRight++
        }

        if (player_1 === 3) {
            return [true, 1]
        } else if (player_2 === 3) {
            return [true, 2]
        }
    }
    return [false]
}

const checkFillBoard = (board) => {
    const boardElements = []
    for (let f = 0; f < board.length; f++) {
        for (let c = 0; c < board.length; c++) {
            if ((board[f][c] === 1) || (board[f][c] === 2)) {
                boardElements.push(board[f][c])
            }
        }

    }
    return boardElements.length === board.length * board.length
}

const checkBoard = (board) => {
    const rows = checkRows(board);
    const columns = checkColumns(board);
    const diagonals = checkDiagonals(board);

    return rows[0] ? rows[1] :
        columns[0] ? columns[1] :
            diagonals[0] ? diagonals[1] :
                checkFillBoard(board) ? 0 : -1
}
function isSolved(board) {
    return checkBoard(board)
}

console.log(isSolved([[1, 2, 1], [1, 1, 2], [2, 2, 0]]))