function validateSignup(){
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(name == "") {
      alert("Error: Name cannot be blank!");
      document.getElementById("name").focus();
      document.getElementById("div_name").className = "form-group has-error";//Bootstrap error class
      return false;
    }
    if(username == ""){
        alert("Error: Username cannot be blank!")
        document.getElementById("username").focus();
        document.getElementById("div_username").className = "form-group has-error";
        return false;
    }
    if(password == ""){
        alert("Error: Password cannot be blank!")
        document.getElementById("password").focus();
        document.getElementById("div_password").className = "form-group has-error";
        return false;
    }
    else{
        return true;
    }
}