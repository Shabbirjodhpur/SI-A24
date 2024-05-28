document.getElementById("gameBtn").addEventListener("click",()=>{
    document.getElementById("title").innerText = Math.ceil(Math.random()*6)
    // if(Math.random()<0.5){
    //     document.getElementById("title").innerText = 'SIT'
    // }else{
    //     document.getElementById("title").innerText = 'STAND'
    // }
})