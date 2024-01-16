var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

function checkLen(email, password) {
    return email.length > 6 && password.length > 6;
  }
  
 