/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const stack = [];
    const realHead = head;
    while(head){
        stack.push(head.val)
        head = head.next
    } 
    head = realHead; 
    let depth = 0;
    while(head){
        if(depth % 2 === 0){
            head.val = stack.shift()
        }else{
            head.val = stack.pop()
        }
        head = head.next
        depth +=1;
        
    }
};
