class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    let arr = [...freq.entries()];

    arr.sort((a, b) => b[1] - a[1]);
    return arr.slice(0, k).map(item => item[0]);
    }
}
