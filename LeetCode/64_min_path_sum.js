/**
 * @param {number[][]} grid
 * @return {number}
 */
// https://leetcode.com/problems/minimum-path-sum/
var minPathSum = function (grid) {
  const width = grid[0].length;
  const height = grid.length;
  const dp = new Array(height).fill(Infinity).map(() => {
    return new Array(width).fill(Infinity);
  });
  dp[0][0] = grid[0][0];
  if (width === 0 && height === 0) return dp[0][0];
  /*
    function moveCell(row,col,direction="None"){
        if(row > height -1 || col > width -1) return;
        if(direction === 'right'){
            dp[row][col] = Math.min(dp[row][col-1] + grid[row][col], dp[row][col])
        }
        if(direction === 'down'){
            dp[row][col] = Math.min(dp[row-1][col] + grid[row][col], dp[row][col])
        }
        if(row === height -1 && col === width -1){ return;
            //dp[row][col] = Math.min(dp[row][col-1], dp[row-1][col]) + grid[row][col]
        }
        // Move Right;
        moveCell(row, col +1,"right")
        // Move Down;
        moveCell(row +1, col,"down")        
    }
    moveCell(0,0)
    */
  for (let i = 1; i < height; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < width; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[height - 1][width - 1];
};
