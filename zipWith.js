function zipWith(fn,a0,a1) {
    let arr = []
    for (let i=0; i<(a0.length<a1.length?a0.length:a1.length); i++){
        arr.push(fn(a0[i], a1[i]))
    }
    return arr
}

console.log(zipWith( Math.pow, [10,10,10,10], [0,1,2,3] ) )    //[1,10,100,1000]
console.log(zipWith( (a,b) => a+b,[0,1,2,3], [0,1,2,3] ) )  //[4,7,7,4,7,7]