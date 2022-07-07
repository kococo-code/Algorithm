/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  /* Memory Usage Less than 5.41% 
    const queue= []
    let maxDepth = 0;
    function bfs(node, level){
        maxDepth = level;
        if(node.left) queue.push([node.left,level+1]); 
        if(node.right) queue.push([node.right,level+1])
        if(queue.length ===0) return 
        const [_node,_value] = queue.shift();
        bfs(_node,_value)
    }
    if(root){
        bfs(root, 1);
    }
    */
  // Memory Usage Less than 37.41%
  if (!root) return 0;
  return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1;
};
