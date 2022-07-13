/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const maxRow = board.length - 1;
    const maxCol = board[0].length - 1;
    const isBorder = (row, col) => maxRow === row || maxCol === col || col === 0 || row === 0
    let visited = []
    let isSurrounded = true
    function floodfill(row, col) {
        if (isBorder(row, col) && board[row][col] === "O") {
            isSurrounded = false
            return false
        }
        visited.push([row, col])
        board[row][col] = 'X'
        if (board[row - 1][col] === 'O') {
            floodfill(row - 1, col)
        }
        if (board[row + 1][col] === 'O') {
            floodfill(row + 1, col)
        }
        if (board[row][col + 1] === 'O') {
            floodfill(row, col + 1)
        }
        if (board[row][col - 1] === 'O') {
            floodfill(row, col - 1)
        }
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === "O") {
                if (!isBorder(row, col)) {
                    visited = []
                    floodfill(row, col)
                    if (!isSurrounded) visited.forEach(([row, col]) => { board[row][col] = 'O' })
                    isSurrounded = true
                }
            }
        }
    }
};
let board = [
    ["X", "X", "X", "X", "X"],
    ["X", "O", "X", "O", "X"],
    ["X", "O", "X", "O", "X"],
    ["X", "O", "O", "X", "X"]
]
solve(board)
console.log(board)