/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
  if (num >= 0 && num % 3 === 0)
    return [
      Math.floor(num / 3) - 1,
      Math.floor(num / 3),
      Math.floor(num / 3) + 1,
    ];
  else return [];
};

// Test Code
console.log(sumOfThree(123123123123));
