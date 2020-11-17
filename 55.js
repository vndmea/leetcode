// 贪心算法
// 55. 跳跃游戏
// 给定一个非负整数数组，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个位置。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let farest = 0
    if (nums.length === 1) return true

    for (let i = 0; i < nums.length - 1 && i <= farest; i++) {
        farest = Math.max(farest, nums[i] + i)
        if (farest >= nums.length - 1) return true
    }

    return false

};

console.log(canJump([3,2,1,0,4]));