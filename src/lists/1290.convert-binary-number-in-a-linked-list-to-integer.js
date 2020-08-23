// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

const nodemon = require('nodemon');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
  let binaryNum = '';
  let node = head;

  while (node) {
    binaryNum += node.val;
    node = node.next;
  }

  return parseInt(binaryNum, 2);
}

const list1 = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 1
    }
  }
};
console.log(getDecimalValue(list1));
// 5

const list2 = {
  val: 0
};
console.log(getDecimalValue(list2));
// 0

const list3 = {
  val: 1
};
console.log(getDecimalValue(list3));
// 1

const list4 = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 0,
      next: {
        val: 1,
        next: {
          val: 0,
          next: {
            val: 0,
            next: {
              val: 1,
              next: {
                val: 1,
                next: {
                  val: 1,
                  next: {
                    val: 0,
                    next: {
                      val: 0,
                      next: {
                        val: 0,
                        next: {
                          val: 0,
                          next: {
                            val: 0,
                            next: {
                              val: 0
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
console.log(getDecimalValue(list4));
// 18880

const list5 = {
  val: 0,
  next: {
    val: 0
  }
};
console.log(getDecimalValue(list5));
// 0
