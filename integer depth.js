function computeDepth (x){
    let arr=[]
    let i =1
    while(arr.length!==10){
        let res = (x*i).toString()
        for(let j=0; j<res.length; j++){
            if(!arr.includes(res[j])){
                arr.push(res[j])
            }
        }
        i++
    }
    return i-1
}

console.log(computeDepth(42))   //9
console.log(computeDepth(1))   //10

//let see n=42
//
// Multiple         value         digits     comment
// 42*1              42            2,4
// 42*2              84             8         4 existed
// 42*3              126           1,6        2 existed
// 42*4              168            -         all existed
// 42*5              210            0         2,1 existed
// 42*6              252            5         2 existed
// 42*7              294            9         2,4 existed
// 42*8              336            3         6 existed
// 42*9              378            7         3,8 existed