// https://leetcode.com/problems/number-of-islands/
// Difficulty : Medium 
// Type : DFS, Graph Flood Fill
var numIslands = function(grid) {
    const height = grid.length; 
    const width = grid[0].length; 
    let islandCnt = 0;
    function floodfill(row,col){
        if(row >= height || row < 0 || col >= width || col < 0 || grid[row][col] !== "1"){
            return ;
        }
        grid[row][col] = "0";
        floodfill(row+1,col);
        floodfill(row-1,col);
        floodfill(row,col+1);
        floodfill(row,col-1);
    }
    for(let i=0; i< height; i++){
        for(let j=0; j< width; j++){
            if(grid[i][j] === "1"){
                islandCnt+=1;
                floodfill(i,j)
            }
        }
    }
    return islandCnt
};