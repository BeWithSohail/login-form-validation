let userName = document.getElementById("username");
let password = document.getElementById("password");
let userError = document.getElementById("usererror");
let passwordError = document.getElementById("passworderror");
let flag = 1;

function validateForm(){
if(userName.value == ""){
    document.getElementById("usererror").innerHTML = "User Name is empty";
    flag= 0;
}else if(userName.value.length < 3){
    document.getElementById("usererror").innerHTML = "Please enter at least 3 characters";
    flag= 0;
}else{
    document.getElementById("usererror").innerHTML = "";
    flag= 1;
}

if(password.value==""){
    document.getElementById("passworderror").innerHTML = "Password is empty";
    flag= 0;
}else if(password.value.length < 3){
    document.getElementById("passworderror").innerHTML = "Please enter at least 3 characters of password";
    flag= 0;
}else{
    document.getElementById("passworderror").innerHTML = "";
    flag= 1;
}
if(flag){    
    return true;
}else{
    return false;
}


}