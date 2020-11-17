// 双指针


// 11. 盛最多水的容器

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    let left = 0;
    let right = height.length - 1

    while (left < right) {
        const current = (right - left) * Math.min(height[left], height[right])
        max = max > current ? max : current

        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }

    return max

};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
