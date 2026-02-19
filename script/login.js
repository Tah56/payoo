document.getElementById("login-btn").addEventListener("click",function(){
    const mobile = document.getElementById("login-num");
    const num =mobile.value

    const pin =document.getElementById("login-pass");
    const pass =pin.value
    if(num ==="01611332175" && pass === "1234"){
        alert("login success");
        window.location.assign("/home.html")
    }else{
        alert("login failed")
    }
    
})