function BinarySearchTree(){
  // 创建结点构造函数
  function Node(key){
    this.key = key
    this.left = null
    this.right = null
  }

  // 保存根属性
  this.root = null

  BinarySearchTree.prototype.insertNode = function (root, node) {
    let curNode = root
    // 递归不用循环
    while(curNode.key !== node.key){
      if(curNode.key > node.key) {
        if(curNode.left !== null) {
          curNode = curNode.left
          // this.insertNode(curNode.left)
        } else {
          curNode.left = node
        }
      }

      if(curNode.key < node.key) {
        if(curNode.right !== null) {
          curNode = curNode.right
          // this.insertNode(curNode.right)
        } else {
          curNode.right = node
        }
      }
    }
  }
  // 二叉搜索树的相关方法
  BinarySearchTree.prototype.insert = function(key) {
    let newNode = new Node(key)

    // 判断根结点是否有值
    if(this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  // 先序遍历
  BinarySearchTree.prototype.preOrderTraversalNode = function (node) {
    if(node !== null) {
      // 打印当前经过结点
      console.log(node.key)
      // 遍历所有左结点
      this.preOrderTraversalNode(node.left)
      // 遍历所有右结点
      this.preOrderTraversalNode(node.right)
    }
  }

  BinarySearchTree.prototype.preOrderTraversal = function () {
    this.preOrderTraversalNode(this.root)
  }
  // 中序遍历
  BinarySearchTree.prototype.midOrderTraversalNode = function (node) {
    if(node !== null) {
      // 遍历所有左结点
      this.midOrderTraversalNode(node.left)
      // 打印当前经过结点
      console.log(node.key)
      // 遍历所有右结点
      this.midOrderTraversalNode(node.right)
    }
  }

  BinarySearchTree.prototype.midOrderTraversal = function () {
    this.midOrderTraversalNode(this.root)
  }

  // 后序遍历
  BinarySearchTree.prototype.postOrderTraversalNode = function (node) {
    if(node !== null) {
      // 遍历所有左结点
      this.postOrderTraversalNode(node.left)
      // 遍历所有右结点
      this.postOrderTraversalNode(node.right)
      // 打印当前经过结点
      console.log(node.key)
    }
  }

  BinarySearchTree.prototype.postOrderTraversal = function () {
    this.postOrderTraversalNode(this.root)
  }

  // 查找树中的最小值
  BinarySearchTree.prototype.min = function () {
    return this.minNode(this.root)
  }
  
  BinarySearchTree.prototype.minNode = function(root) {
    let curNode = root
    while(curNode !== null && curNode.left !== null){
      curNode = curNode.left
    }
    return curNode
  }

  // 查找树中的最大值
  BinarySearchTree.prototype.max = function () {
    return this.maxNode(this.root)
  }
  
  BinarySearchTree.prototype.maxNode = function(root) {
    let curNode = root
    while(curNode !== null && curNode.right !== null){
      curNode = curNode.right
    }
    return curNode
  }

  // 查找树中的值
  BinarySearchTree.prototype.search = function (key) {
    return this.searchNode(this.root, key)
  }
  
  BinarySearchTree.prototype.searchNode = function(root, key) {
    if(root === null) return false
    let curNode = root
    
    if(curNode.key > key){
      return this.searchNode(curNode.left, key)
    } else if(curNode.key < key) {
      return this.searchNode(curNode.right, key)
    } else {
      return true
    }
  }

  // 删除树中的值
  BinarySearchTree.prototype.remove = function (key) {
    let current = this.root
    let parent = null
    let isLeftChild = true

    while(current.key !== key) {
      parent = current
      if(key < current.key) {
        isLeftChild = true
        current = current.left
      } else {
        isLeftChild = false
        current = current.right
      }
      // 已经找到最后的结点
      if(current.left && current.right) return false
    }

    // 处理删除结点
    if(!current.left && !current.right) {
      if(parent === this.root) {
        this.root = null
      }

      if(parent.key > current.key){
        parent.left = null
      } else {
        parent.right = null
      }
    }
    // 只有一个结点的情况
    if(!current.left && current.right) {
      if(isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    }

    if(current.left && !current.right) {
      if(isLeftChild) {
        parent.left = current.left  
      } else {
        parent.right = current.left
      }
    }
    // 两个结点都存在时
    if(current.left && current.right) {
      if(isLeftChild) {
        parent.left = current.left
        current.left = null
        parent.left.right = current.right
      } else {
        parent.right = current.left
        current.left = null
        parent.right.right = current.right
      }
    }
  }
  
  BinarySearchTree.prototype.removeNode = function(root, key) {
    if(root === null) return false
    let curNode = root
    
    if(curNode.key > key){
      return this.removeNode(curNode.left, key)
    } else if(curNode.key < key) {
      return this.removeNode(curNode.right, key)
    } else {
      return true
    }
  }
}

const bst = new BinarySearchTree()

bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(9)
bst.insert(13)
bst.insert(20)
bst.insert(3)
bst.insert(6)
bst.insert(12)
bst.insert(6)
bst.insert(8)
bst.insert(10)
bst.insert(14)
bst.insert(18)
bst.insert(25)

console.log(bst.preOrderTraversal());
console.log('-------');
console.log(bst.midOrderTraversal());
console.log(bst.search(30));