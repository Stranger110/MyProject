let showpswd = document.getElementById("showpswd");
let password = document.getElementById("password");
    
    showpswd.onclick = function(){
   
    if(password.type == "password")
    {
        showpswd.style.opacity = "1";
        password.type = "text";
    }
    else
    {
        showpswd.style.opacity = "0.5";
        password.type = "password";
    } 
    }