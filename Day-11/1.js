const fs = require("node:fs")

let str = ''

// add 1- 100 numbers in str
for(let i=0;i<100;i++){
    str = str + i + ' '
}


fs.writeFile('./test.txt',"Testing file system",(err)=>{
    console.log(err)
})

// let a = 12333

// fs.writeFile('./test.txt',a,(err)=>{
//     console.log(err)
// })