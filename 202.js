// 202. 快乐数

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let hashMap = {}
    let sum
    
    while(sum !== 1) {
        sum = 0
        n += ''
        for (let i = 0; i < n.length; i++) {
            sum += n[i]* n[i]
        }

        if (hashMap[sum]) {
            return false
        }

        hashMap[sum] = true
        n = sum + ''
    }
    
    return true
};