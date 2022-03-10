/* *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 实现思路：数组已经是一个有序数组，让数最小的方法就是中等大小的尽量放中间，两边平均分配
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

 var sortedArrayToBST = function(nums) {
    // 如果数组为空返回Null
    if(nums.length == null) return null
    // 得到中间数字的索引
    let midIndex = Math.floor(nums.length/2)
    // 以中间数字为根结点构建树
    let root = new TreeNode(nums[midIndex])
    // 获取树的分支 然后进行递归
    root.left = sortedArrayToBST(nums.slice(0,nums[midIndex]))
    root.right = sortedArrayToBST(nums.slice(nums[midIndex]+1))

    return root
};