function form(){
    let fastname = document.getElementById("a").value.trim();
    let lastname = document.getElementById("b").value.trim();
    let password = document.getElementById("c").value.trim()
    let error = document.getElementById("error");

    error.innerHTML ="";
    if (fastname === "" || lastname || password === "") {
        error.innerHTML = "Please fill all required fields";
        return false;
    }
    if (password.length <= 8) {
        error.innerHTML = "Password must be above 8 characters.";
        return false;
    }
    return true;
}