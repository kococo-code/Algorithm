/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// https://leetcode.com/problems/median-of-two-sorted-arrays/ 
// Difficulty : Hard  
// Type : Array
// Formula : https://www.gstatic.com/education/formulas2/397133473/en/median_formula.svg 
// Odd : x[n/2], Even : x[n-1/2] + x[n/2] / 2
 var findMedianSortedArrays = function(nums1, nums2) {
    function median(values){
      if(values.length ===0) return;
      values.sort((a,b)=>{ return a-b });
      const half = Math.floor(values.length / 2); 
      if (values.length % 2)
            return values[half];
      return (values[half - 1] + values[half]) / 2.0;
    }
    return median([...nums1, ...nums2])
};