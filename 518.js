// 动态规划

// 518. 零钱兑换 II
// 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = []
    for (let i = 0; i <= coins.length; i++) { // <=
        dp[i] = []
        for (let j = 0; j <= amount; j++) { //<=
            dp[i][j] = 0

            if (j === 0) {
                dp[i][j] = 1
            }
        }
    }

    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j < coins[i - 1]) { // 币值超过
                dp[i][j] = dp[i - 1][j] // dp[i-1][j]
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
            }
        }
    }

    return dp[coins.length][amount]

};


// amount = 5, coins = [1, 2, 5]
console.log(change(5, [1, 2, 5]))