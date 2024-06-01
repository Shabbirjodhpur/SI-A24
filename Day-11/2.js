const readlineSync = require("readline-sync")

let userName = readlineSync.question('What is your name')

console.log('your name is '+ userName)

// write a program that ask user for number and loops from 0 to that number and prints it
let num = readlineSync.question('give me a num ')

for (let i = 0; i < num; i++) {
    console.log(i)  
}
