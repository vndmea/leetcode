// 1248. 统计「优美子数组」
// 给你一个整数数组 nums 和一个整数 k。

// 如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。

// 请返回这个数组中「优美子数组」的数目。

// 示例 1：

// 输入：nums = [1,1,2,1,1], k = 3
// 输出：2
// 解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。
// 示例 2：

// 输入：nums = [2,4,6], k = 1
// 输出：0
// 解释：数列中不包含任何奇数，所以不存在优美子数组。
// 示例 3：

// 输入：nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// 输出：16


var numberOfSubarrays = function (nums, k) {
    // 准备数组
    const oddIndexArray = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            oddIndexArray.push(i)
        }
    }

    oddIndexArray.push(nums.length) // 注意这里是原数组长度
    oddIndexArray.unshift(-1)

    let total = 0

    for (let i = 1; i < oddIndexArray.length - k; i++) {
        total += (oddIndexArray[i] - oddIndexArray[i - 1]) * (oddIndexArray[i + k] - oddIndexArray[i + k - 1])
    }

    return total
};