// https://leetcode.com/problems/max-area-of-island/
// Difficulty : Medium 
// Using Algorithm : DFS 

var maxAreaOfIsland = function(grid) {
    const row = grid.length;
    const col = grid[0].length; 
    let maxArea = 0;
    function findArea(localRow,localCol){
        if(localRow < 0 || localRow >= row || localCol >= col || localCol < 0){   
            return 0;
        }
        const val = grid[localRow][localCol]
        if(val === 0){ 
            return 0;
        }
        grid[localRow][localCol] = 0
        return 1 + findArea(localRow+1, localCol) + findArea(localRow-1, localCol) + findArea(localRow, localCol+1) + findArea(localRow, localCol-1);           
    }
    for(let i=0 ; i< row; i++){
        for(let j=0; j< col; j++){
            if(grid[i][j] === 1){
                const result = findArea(i,j)
                maxArea = Math.max(result,maxArea)
            }
        }
    }
    return maxArea
}