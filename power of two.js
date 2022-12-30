var isPowerOfTwo = function (n) {
    let res = 2
    if (res ** 0 === n || res ** 1 ===n) return true
    while (res <= n) {
        if (res * 2 === n) return true
        res = res * 2
    }
    return false
};
console.log(isPowerOfTwo(16))  // true
console.log(isPowerOfTwo(3))   //false
console.log(isPowerOfTwo(1))  //true