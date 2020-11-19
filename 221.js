/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let maxLength = 0

    let dp = new Array(matrix.length)
    for (let i = 0; i < matrix.length; i++) {
        dp[i] = new Array(matrix[i].length).fill(0)

        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]
                    ) + 1
                }

                maxLength = Math.max(maxLength, dp[i][j])
            }

        }


    }
    return maxLength * maxLength

};