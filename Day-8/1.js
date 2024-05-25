let a = [1, 2, 3, "wef"]
a[1]
// push
// pop



// function sum(a,b){
//     return a+b
// }
// const sum = (a,b)=>{
//     return a+b
// }

fetch('https://abaya-looks-backend.vercel.app/api/v1/test').then((res)=>{
    res.json().then(data=>{
        let userData = data.list
        console.log(userData)
        for (let i = 0; i < userData.length; i++) {
            // console.log(userData[i].name)
            let newDiv = document.createElement('div')
            let newStatus = document.createElement('h1')
            let newName = document.createElement('p')
            newName.innerText = userData[i].name
            
            if (userData[i].passed) {
                newStatus.innerText = userData[i].name + ' has passed'
            } else {
                newStatus.innerText = userData[i].name + ' has not passed'
            }
            newDiv.appendChild(newName)
            newDiv.appendChild(newStatus)

            newDiv.style.display = 'flex'
            newDiv.style.alignItems = 'center'
            newDiv.style.justifyContent = 'space-between'

            document.body.appendChild(newDiv)
        }
    })
})

// shabbir has passed
// mubashhir has not passed

// let practisingJson = JSON.stringify([1,2,3])
// console.log(practisingJson)

let practisingJson = JSON.parse('[1,2,3]')
console.log(practisingJson)

// console.log([1,2,3])

// console.log(document.getElementById('title').innerText)

// document.getElementById('title').innerText = 'Shabbir'
