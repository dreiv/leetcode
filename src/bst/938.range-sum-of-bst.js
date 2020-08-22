// https://leetcode.com/problems/range-sum-of-bst/

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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
function rangeSumBST(root, L, R, sum = 0) {
  if (!root) {
    return sum;
  }

  if (root.val <= R && root.val >= L) {
    sum += root.val;
  }

  return sum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
}

const bst1 = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3
    },
    right: {
      val: 7
    }
  },
  right: {
    val: 15,
    right: {
      val: 18
    }
  }
};
console.log(rangeSumBST(bst1, 7, 15));
// 32
