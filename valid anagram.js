var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let arr_s = s.split('').sort()
    let arr_t = t.split('').sort()
    for (let i = 0; i < arr_s.length; i++) {
        if (arr_s[i] !== arr_t[i]) return false
    }
    return true
};
console.log(isAnagram('car', 'rat'))                //false
console.log(isAnagram('anagram', 'nagaram'))        //true