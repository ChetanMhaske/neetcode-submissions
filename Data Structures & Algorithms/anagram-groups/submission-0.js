class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(let str of strs){
            let sortedKey = str.split('').sort().join('')

            if(map[sortedKey]){
                map[sortedKey].push(str)
            }
            else{
                map[sortedKey] = [str]
            }
        }
        return Object.values(map)

    }
}
