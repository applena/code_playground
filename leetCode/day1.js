/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

  Example 1:

  [2,3,4,6,9], 9

  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  Example 2:

  Input: nums = [3,2,4], target = 6
  Output: [1,2]
  Example 3:

  Input: nums = [3,3], target = 6
  Output: [0,1]
*/

function findSums(nums, target) {
  // for (let i = 0; i < nums.length; i++) {
  //   // console.log('in the outer loop', nums[i])
  //   for (let j = 0; j < nums.length; j++) {
  //     // console.log('in the inner loop', nums[j])
  //     if (i === j) continue;
  //     if (nums[i] + nums[j] === target) {
  //       // console.log('found it', nums[i], nums[j]);
  //       solution = [i, j];
  //       return solution;
  //     }
  //   }
  // }

  let solution = [];
  let table = {};

  for (let i = 0; i < nums.length; i++) {
    table[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let differenceNum = target - nums[i];
    if (table[differenceNum] && table[differenceNum] !== i) {
      solution = [i, table[differenceNum]];
      return solution;
    }
  }
}

const one = findSums([2, 3, 4, 5], 5);
const two = findSums([12, 24, 1, 4, 8], 9);
console.log(one, two)