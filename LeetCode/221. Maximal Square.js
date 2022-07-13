/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix.length === 1) return Math.max(...matrix[0])
    const dp = [[]]
    let maxLength = 0;
    dp[0] = matrix[0].map((num) => { return parseInt(num) })
    maxLength = Math.max(...dp[0])
    for (let i = 1; i < matrix.length; i++) {
        dp[i] = []
        dp[i][0] = parseInt(matrix[i][0])
        maxLength = Math.max(dp[i][0], maxLength)
        for (let j = 1; j < matrix[0].length; j++) {
            if (parseInt(matrix[i][j]) === 1) {
                const min = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
                console.log({ i, j, min }, matrix[i][j], dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
                dp[i][j] = min + 1
                maxLength = Math.max(dp[i][j], maxLength)
            } else {
                dp[i][j] = 0
            }
        }
    }
    console.log(dp)
    return maxLength * maxLength
};
let matrix = `0 1 1 1 0
1 1 1 1 0
0 1 1 1 1
0 1 1 1 1
0 0 1 1 1`.split('\n').map((row) => { return row.split(" ") })
matrix = [["1", "0"], ["0", "0"]]
console.log(matrix)
console.log(maximalSquare(matrix))