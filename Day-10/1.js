const gameData = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
]
let player = 'X'

document.getElementById('resetBtn').addEventListener('click',()=>{
    // reset gameData
    for(let i=0;i<gameData.length;i++){
        gameData[i] = ''
    }
    // player = 'X'
    player = 'X'

    render()
})

function checkDraw(){
    for(let i=0;i<gameData.length;i++){
        if(gameData[i]=='') return false
    }
    return true
}

function checkWin(){
    // check for all rows
    for(let i=0;i<=6;i+=3){
        if(
            gameData[i] != '' &&
            gameData[i]==gameData[i+1] && 
            gameData[i+1]==gameData[i+2] 
        ) return gameData[i]
    }

    //check for all columns
    for(let i=0;i<=2;i++){
        if(
            gameData[i] != '' &&
            gameData[i]==gameData[i+3] && 
            gameData[i+3]==gameData[i+6] 
        ) return gameData[i]
    }

    //check for diagonals
    if(
        gameData[0] != '' &&
        gameData[0]==gameData[4] && 
        gameData[4]==gameData[8] 
    ) return gameData[0]   
    if(
        gameData[2] != '' &&
        gameData[2]==gameData[4] && 
        gameData[4]==gameData[6] 
    ) return gameData[2]  
    
    // if win doesnt happen
    return ''
}

function changePlayer(){
    if(player=='X'){
        player='O'
    }else{
        player='X'
    }
}

function render(){
    for(let i=0;i<gameData.length;i++){
        document.getElementById(i).innerText = gameData[i] 
    }
    document.getElementById('player-title').innerText = player
}

function modifyCell(num){
    if(gameData[num]!='') return;
    gameData[num] = player
    changePlayer()
}

function main(){
    for(let i=0;i<9;i++){
        document.getElementById(i).addEventListener('click',()=>{
            // console.log(i,'was clicked')
            modifyCell(i)
            render()
            let result = checkWin()
            if(result!=''){
                alert(`${result} has won`)
            }else{
                let draw = checkDraw()
                if(draw==true){
                    alert('draw has happen')
                }
            }
        })
    }
}
main()