// if     else if   else

// let a = 12
// let b = 12

// if(a<b){
//     console.log('yo')
// }else if(a<=b){
//     console.log('not yo')
// }else{
//     console.log('not 123')
// }

// let count = 0
// while(count < 100){
//     if(count%2==0){
//         console.log(count)
//     }
//     count = count + 1
// }
// console.log("loop ended")

// 3 --- fizz
// 5 --- buzz
// 3 and 5 --- fizzbuzz
let count = 0
while(count < 100){
    if(count%3==0 && count%5==0){
        console.log(count,"fizzBuzz")
    }else if(count%5==0){
        console.log(count,"Buzz")
    }else if(count%3==0){
        console.log(count,"fizz")
    }
    count = count + 1
}