for(let i=0;i<49;i++){
    let newDiv = document.createElement('div')
    newDiv.classList.add('border-2','border-black','h-[50px]')
    newDiv.id=i
    document.getElementById('container').appendChild(newDiv)
}

const gameData = []
for(let i=0;i<49;i++){
    gameData.push({
        blue:false,
        red:false
    })
}

gameData[0].red=true
gameData[0].blue=true

function render(){
    for(let i=0;i<gameData.length;i++){
        if(gameData[i].blue==true && gameData[i].red==true){
            document.getElementById(i).style.backgroundColor = 'black'
        }else if(gameData[i].blue==true){
            document.getElementById(i).style.backgroundColor = 'blue'
        }else if(gameData[i].red==true){
            document.getElementById(i).style.backgroundColor = 'red'
        }
    }
}

render()