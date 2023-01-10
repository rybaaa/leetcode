var canConstruct = function(ransomNote, magazine) {
    let arr_ransomNote = ransomNote.split('')
    let arr_magazine = magazine.split('')
    for (let i=0; i<arr_ransomNote.length; i++){
        if (!arr_magazine.includes(arr_ransomNote[i])) return false
        let deleted_letter = arr_magazine.findIndex(el=>el===arr_ransomNote[i])
        arr_magazine.splice(deleted_letter, 1)
    }
    return true
};
console.log(canConstruct('aa', 'ab'))     //false
console.log(canConstruct('aa', 'aab'))    //true