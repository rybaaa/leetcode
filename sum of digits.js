var addDigits = function(num) {
    let number = num.toString()
    while(number.length>1){
        let res = 0
        for (let i=0; i<number.length; i++){
            res= res + +number[i]
        }
        number=res.toString()
    }
    return number
};
console.log(addDigits(328))   // 3+2+8=13=>1+3=4