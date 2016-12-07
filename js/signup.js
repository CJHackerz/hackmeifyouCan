function Validatesignup(){
    var name = document.getElementById("name").value;
    if(name == "") {
      alert("Error: Name cannot be blank!");
      document.getElementById("name").focus();
      document.getElementById("div_name").className = "form-group has-error";//Bootstrap error class
      return false;
    }
    else{
        return true;
    }
}