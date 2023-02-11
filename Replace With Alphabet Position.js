function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let arr = text.toLowerCase().match(/[a-z]/g)
    if (!arr) return ''
    let result = ''
    for (let i=0; i<arr.length; i++){
        result+= alphabet.indexOf(arr[i])+1 + ' '
    }
    return result.trim()
}

console.log(alphabetPosition('.:# {<|5'))  // ''

//Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )