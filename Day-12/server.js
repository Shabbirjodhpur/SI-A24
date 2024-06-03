const readlineSync = require("readline-sync")
const fs = require("node:fs/promises")

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/api/todo',async (req,res)=>{
    const todo = req.body.todo

    let data = await fs.readFile('./data.json')
    data = JSON.parse(data)
    data.push({
        todo: todo,
        isDone: false
    })
    await fs.writeFile('./data.json', JSON.stringify(data))

    res.send("Okay")
})

app.get('/api/todo',async (req,res)=>{
    try{
        let data = await fs.readFile('./data.json')
        data = JSON.parse(data)
        res.json(data)
    }catch(e){
        console.log(e)
    }
})

app.patch('/api/todo/:id',async (req,res)=>{
    let data = await fs.readFile('./data.json')
    data = JSON.parse(data)

    data[req.params.id].isDone = !data[req.params.id].isDone

    await fs.writeFile('./data.json', JSON.stringify(data))
    res.send("okay")
})

app.delete('/api/todo/:id',async (req,res)=>{
    let data = await fs.readFile('./data.json')
    data = JSON.parse(data)

    data.splice(req.params.id, 1)

    await fs.writeFile('./data.json', JSON.stringify(data))
    res.send("okay")
})

app.listen(3000,()=>{
    console.log("Server listening on PORT 3000")
})