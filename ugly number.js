//An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

var isUgly = function (n) {
    if(n===0) return false
    if (n===1) return true
    if (n%2===0) return isUgly(n/2)
    if (n%3===0) return isUgly(n/3)
    if (n%5===0) return isUgly(n/5)
    return false
};
console.log(isUgly(6))   //true
console.log(isUgly(14))  //false
console.log(isUgly(5))   //true