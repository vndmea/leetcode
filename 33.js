// 33. 搜索旋转排序数组
// 左右指针，二分查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length === 0) return -1
    let peakIndex = findPeakIndex(nums)
    if (target >= nums[0] && target <= nums[peakIndex]) {
        return binarySearch(nums, 0, peakIndex, target)
    }
    return binarySearch(nums, peakIndex + 1, nums.length - 1, target)
};

function findPeakIndex(nums) {
    if (nums.length === 1) return 0
    let left = 0, right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[mid + 1]) {
            return mid
        } else if (nums[mid] >= nums[left]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return 0
}

function binarySearch(nums, leftStartIndex, rightStartIndex, target) {
    let left = leftStartIndex, right = rightStartIndex

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}