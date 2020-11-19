/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x

    let left = 1, right = Math.floor(x / 2)
    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2)
        if (mid * mid === x) {
            return mid
        } else if (mid * mid > x) {
            right = mid
        } else {
            left = mid
        }
    }

    if (right * right > x) {
        return left
    }

    return right
};