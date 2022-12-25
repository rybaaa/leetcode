var isPalindrome = function(s) {
    let reverseArr = s.toLowerCase().split('').reverse()
    let arr = s.toLowerCase().split('')
    let invalid = [',', ';', '!', '?', ' ', ':', '.', '@', '#', '_', '[', ']', '{', '}', '\"', '\'', '\\', '-', '(', ')', '`']
    let startString= ''
    let palindrome = ''
    for (let i=0; i<arr.length; i++){
        if (!invalid.includes(arr[i])){
            startString+=arr[i]
        }
        if (!invalid.includes(reverseArr[i])){
            palindrome+=reverseArr[i]
        }
    }
    return palindrome.split().join('') === startString.split().reverse().join('')

};
console.log(isPalindrome(`Marge, let's \\"[went].\\" I await {news} telegram.`))  //true
console.log(isPalindrome("A man, a plan, a canal: Panama"))  //true
console.log(isPalindrome("race a car"))  //false
