var isPerfectSquare = function(num) {
    return  (num**0.5) === (Math.ceil(num**0.5))
};
console.log(isPerfectSquare(16))   //16**0.54=4
console.log(isPerfectSquare(14))   // 14**0.5 = 3,741
