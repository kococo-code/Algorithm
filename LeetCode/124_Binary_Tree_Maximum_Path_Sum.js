// https://leetcode.com/problems/binary-tree-maximum-path-sum/ 
// Difficulty : Hard
// Type : Graph Traversal 

var maxPathSum = function(root) {
    let maxPathSum = -Infinity;
    traversal(root)
    function traversal(root,local = 0){
        if(!root){
            return 0
        }
        let left = traversal(root.left,local)
        let right = traversal(root.right,local)
        local = Math.max(left + root.val, right + root.val,root.val)
        maxPathSum = Math.max(left + right + root.val, maxPathSum, local)
        return local;
    }
    return maxPathSum    
};