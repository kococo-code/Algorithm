/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }
  nums.sort((a, b) => {
    return a - b;
  });
  let longest_streak = 1;
  let current_streak = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] == nums[i - 1] + 1) {
        current_streak += 1;
      } else {
        longest_streak = Math.max(longest_streak, current_streak);
        current_streak = 1;
      }
    }
  }
  return Math.max(longest_streak, current_streak);
};
