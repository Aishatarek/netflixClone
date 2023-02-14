submitBtn = document.getElementById("submitBtn")
submitBtn.disabled = true;
function valid() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    emailError = document.getElementById("emailError");
    passwordError = document.getElementById("passwordError");
    if (email.indexOf('@') == -1 || email.length < 0) {
        emailError.innerHTML = "Please enter a valid email";
        submitBtn.disabled = true;
    }
    else if (email.indexOf('@') > -1 && email.length > 0) {
        emailError.innerHTML = "";
    }
    if (password.length < 4 || password.length > 60) {
        passwordError.innerHTML = "Your password must contain between 4 and 60 characters.";
        submitBtn.disabled = true;
    }
    else if (password.length > 4 && password.length < 60) {
        passwordError.innerHTML = ""
    }
    if (email.indexOf('@') > -1 && email.length > 0 && password.length > 4 && password.length < 60) {
        submitBtn.disabled = false;
    }
}
