var lengthOfLastWord = function (s) {
    let result = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i]!==' '){
            if(s[i-1]!==' '){
                result+=1
            } else return result+1
        }
    }
    return result
};
console.log(lengthOfLastWord('Hello World  '))  //5
console.log(lengthOfLastWord('   fly me   to   the moon  '))  //4