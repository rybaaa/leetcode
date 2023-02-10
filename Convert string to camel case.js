function toCamelCase(str){
    let new_arr = str.replace(/-|_/g, ' ').split(' ')
    let result = [new_arr[0]]
    for (let i=1; i<new_arr.length; i++){
        result.push(new_arr[i][0].toUpperCase() + new_arr[i].slice(1))
    }
    return result.join('')
}


console.log(toCamelCase('the-stealth-warrior'))    //theStealthWarrior
console.log(toCamelCase('The_Stealth_Warrior'))    //TheStealthWarrior