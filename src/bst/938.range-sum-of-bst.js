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
function rangeSumBST(root, L, R) {
  if (root === null) {
    return 0;
  }

  let sum = 0;
  const stack = [root];

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (currentNode) {
      if (currentNode.val >= L && R >= currentNode.val) {
        sum += currentNode.val;
      }

      if (currentNode.val > L) {
        stack.push(currentNode.left);
      }

      if (R > currentNode.val) {
        stack.push(currentNode.right);
      }
    }
  }

  return sum;
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
