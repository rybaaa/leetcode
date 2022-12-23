var plusOne = function (digits) {
    let i = digits.length - 1
    if (digits[i] === 9) {
        while (digits[i] === 9) {
            digits[i] = 0
            if (digits[i - 1] !== 9) {
                digits[i - 1] = digits[i - 1] + 1
                break;
            }
            i--
        }
        if (digits[0] === 0) {
            digits.unshift(1)
        } else {

        }
    } else {
        digits[digits.length - 1] = digits[digits.length - 1] + 1
    }

    return digits
};
console.log(plusOne([8, 9, 9, 9]))   //[9,0,0,0]
console.log(plusOne([7,2,9,4,9]))    //[7,2,9,5,0]