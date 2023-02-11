function duplicateEncode(word){
    let result = ''
    let arr = word.toLowerCase().split('')
    for(let i=0; i<arr.length; i++){
        if((arr.slice(0,i).concat(arr.slice(i+1)).includes(arr[i]))) {
            result+=')'
        } else {
            result += '('
        }
    }
    return result
}

//