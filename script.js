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

    // Store into cookies
if ($('#remember').attr('checked')) {
    var email = $('#email').attr("value");
    var passwrd = $('#password').attr("value");
    // set cookies to expire in 14 days
    $.cookie('email', email, { expires: 14 });
    $.cookie('password', password, { expires: 14 });
    $.cookie('remember', true, { expires: 14 });
  } else {
    // reset cookies
    $.cookie('email', null);
    $.cookie('password', null);
    $.cookie('remember', null);
  }
  
  // Read from cookies
  var remember = $.cookie('remember');
  if (remember == 'true') {
    var email = $.cookie('email');
    var passwrd = $.cookie('password');
    // autofill the fields
    $('#email').attr("value", email);
    $('#password').attr("value", passwrd);
  }