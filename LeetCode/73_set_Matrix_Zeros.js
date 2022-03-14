/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = {};
    const cols = {};
    for(let row =0; row < matrix.length; row++){
        for (let col = 0; col < matrix[0].length ; col++){
            if(matrix[row][col] === 0){
                rows[row] = row
                cols[col] = col 
            }
        }
    }
    Object.keys(rows).forEach(row=>{
        for(let i =0 ; i < matrix[row].length ; i++){
            matrix[row][i] = 0
        }
    })
    Object.keys(cols).forEach(col=>{
        for(let i =0 ; i < matrix.length ; i++){
            matrix[i][col] = 0
        }
    })
};
