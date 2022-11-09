/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  const ret = []
  if(!root) return ret

  const q = []
  q.push(root)
  while( q.length !== 0){
    const currentLevelSize = q.length
    ret.push([])
    for (let i = 0; i < currentLevelSize; i++) {
      const node = q.shift()
      ret[ret.length - 1].push(node.val)
      if(node.left) q.push(node.left)
      if(node.right) q.push(node.right)
    }
  }

  let dep = 0
  ret.forEach(i => {
    if(Array.isArray(i)) dep++
  })

  return dep
};