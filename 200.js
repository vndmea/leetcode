// 200. 岛屿数量
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    function walk(i, j) {
        if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === '0') {
            return
        }
        grid[i][j] = '0'
        walk(i, j + 1)
        walk(i, j - 1)
        walk(i + 1, j)
        walk(i - 1, j)
    }

    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++
                walk(i, j)
            }
        }
    }

    return count
};

const grid = [["1", "0", "1", "1", "1"], ["1", "0", "1", "0", "1"], ["1", "1", "1", "0", "1"]]
// const grid = [["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]]
console.log(numIslands(grid))