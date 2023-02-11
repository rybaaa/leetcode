function findOdd(A) {
    let obj = {}
    for (let i = 0; i < A.length; i++) {
        if (Object.hasOwn(obj, A[i])) {
            obj[A[i]] += 1
        } else {
            obj[A[i]] = 1
        }
    }
    console.log(obj)
    for (key in obj){
        if(obj[key]%2!==0) return +key
    }
}

console.log(findOdd([1,1,2]))    //2

//Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).