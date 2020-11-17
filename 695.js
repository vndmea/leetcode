// 695.岛屿的最大面积

// DFS + 沉岛

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let maxArea = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            maxArea = Math.max(maxArea, dfs(grid, i, j))
        }
    }

    return maxArea

};

function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) {
        return 0
    }

    grid[i][j] = 0
    return 1 + dfs(grid, i + 1, j) + dfs(grid, i - 1, j) + dfs(grid, i, j + 1) + dfs(grid, i, j - 1)
}