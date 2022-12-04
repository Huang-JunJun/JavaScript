
const inorderTraversalNode = (node, arr) =>{
  if(node !== null){
    inorderTraversalNode(node.left)
    arr.push(node.val)
    inorderTraversalNode(node.right)
  }
}

const inorderTraversal = (root) => {
  let arr = []
  inorderTraversalNode(root, arr)

  return arr
}