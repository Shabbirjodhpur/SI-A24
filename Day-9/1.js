document.getElementById("submitbtn").addEventListener("click",()=>{
    let username = document.getElementById("userTextBox").value
    let password = document.getElementById("password").value

    //push data using api
    const response = fetch("https://abaya-looks-backend.vercel.app/api/v1/test", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user:username,
            type:password
        })
      }).then(res=>{
        // window.location.replace('./2.html')
        res.json().then(data=>{
            window.localStorage.setItem('token',data.msg)
            console.log('done')
        })
      }).catch(err=>{
        alert('wrong credential')
      })
})