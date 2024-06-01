const readlineSync = require("readline-sync")
const fs = require("node:fs")

function addData(){
    // let todo = readlineSync.question('Give me a todo ')
    fs.readFile('./data.json',(err,data)=>{
        data = String(data)

        const todo = readlineSync.question('give me a todo ')
        data = data + ' ' + todo
        fs.writeFile('./data.json',data,(err)=>{
            console.log(err)
        })
    })
}

addData()