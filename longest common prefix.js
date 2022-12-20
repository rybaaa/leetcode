var longestCommonPrefix = function (strs) {
    let longest = Math.min(...strs.map(str=>str.length))
    let result = ''
    for (let i = 0; i < longest; i++) {
        result += strs[0][i]
        for(let j = 0; j<strs.length; j++){
            if (strs[j][i] !== result[i]){
                return result.slice(0, i)
            }
        }
    }
    return result
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))