// let a = ['shabbir','CFI',"EVP"]
// let b = ['shabbir',98,78,true]
// let c = [1,45,154,1545,4964,154]

// console.log(a[0])

// let a = [90,80,76,80,12]
// let b = ['shabbir','THS',"CFI","EVP","XYZ"]

// for(let i=0;i<a.length;i++){
//     if(a[i]<75){
//         console.log(b[i],'not passed')
//     }else{
//         console.log(b[i],'passed')
//     }
// }

// let a = [90,80,76,80,12]
// // 
// // 
// // 
// // 
// a.push(12000)
// a.pop()
// a.pop()
// a.pop()
// console.log(a)




// let a = []
// function isPrime(num) {
//     let flag = true

//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             flag=false
//         }
//     }

//     return flag
// }
// for(let i=0;i<10000;i++){
//     if(isPrime(i)){
//         a.push(i)
//     }
// }
// console.log(a[a.length-1-3])
// console.log(a)





// write a logic to store all even numbers from 0 to 100 in a array
let a = []

for(let i=0;i<100;i++){
    if(i%2==0){
        a.push(i)
    }
}
console.log(a)