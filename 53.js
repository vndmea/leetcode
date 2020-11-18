/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0]
    let dp = Array.from({ length: nums.length })
    dp[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + Math.max(dp[i - 1], 0)
        maxSum = Math.max(maxSum, dp[i])
    }

    return maxSum

};