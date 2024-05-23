// let check = 54685846

// let i = 2
// let flag = false

// while(i<check){
//     if(check%i==0){
//         flag = true
//     }
//     i++ 
// }
// if(flag == false){
//     console.log(check,'Is a prime')
// }else{
//     console.log(check,'Is not a prime')
// }

// let i = 0
// while(i<100){
//     console.log(i)
//     i++
// }

// for(let i=0;i<100;i++){
//     console.log(i)
// }

// block of code


function shabbir(a, xyz) {
    console.log('hello', a, 'your age is', xyz)
}

function sum(a, b) {
    console.log(a + b)
}
function isPrime(num) {
    let flag = true

    for(let i=2;i<num;i++){
        if(num%i==0){
            flag=false
        }
    }

    return flag
}

for(let i=0;i<100;i++){
    if(isPrime(i)){
        console.log(i)
    }
}