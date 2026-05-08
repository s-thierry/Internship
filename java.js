function form(){
    let fastname = document.getElementById("a").value.trim();
    let lastname = document.getElementById("b").value.trim();
    let password = document.getElementById("c").value.trim()
    let error = document.getElementById("error");

    error.innerHTML ="";
    if (firstname === "" || lastname || password === "") {
        error.innerHTML = "Please fill all required fields";
        return false;
    }
    if (password.length <= 8) {
        error.innerHTML = "Password must be above 8 characters.";
        return false;
    }
    return true;
}
function admission(){
    let Fastname = document.getElementById("fname").value.trim();
    let Lastname = document.getElementById("lname").value.trim();

    error.innerHTML="";
    if (Firstname==="" || Lastname==="") {
         error.innerHTML="Please fill all fields";
         return false;
    }
    return true;
}