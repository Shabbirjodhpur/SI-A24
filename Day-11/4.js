const readlineSync = require("readline-sync")
const fs = require("node:fs/promises")

async function addTodo(){
    try{
        let data = await fs.readFile('./data.json')
        data = JSON.parse(data)
        const todo = readlineSync.question('give me a todo ')
        data.push({
            todo:todo,
            isDone:false
        })
        await fs.writeFile('./data.json',JSON.stringify(data))
    }catch(e){
        console.log(e)
    }
}

async function viewTodo(){
    // 0. shabbir
    // 1. CFI
    // 2. maker
    // STEP 1:
    let data = await fs.readFile('./data.json')
    data = JSON.parse(data)
    // console.log(data)
    // STEP 2: Format it
    for(let i=0;i<data.length;i++){
        console.log(i,data[i].todo,data[i].isDone)
    }
}
async function deleteTodo(){
    // STEP 1: Show todo
    await viewTodo()
    // STEP 2: Ask user to choose a index
    const index = parseInt(readlineSync.question("Choose a todo to delete"))
    // STEP 3: Read data.json
    // STEP 4: Delete that todo from data
    // STEP 5: Write to data.json again
}
viewTodo()