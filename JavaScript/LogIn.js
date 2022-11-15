/* Email Validation */
function ValidateEmail() {

    // document.getElementById("emailerror").classList.remove("errormessage")
    console.log("========================")
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var input = document.getElementById("myMail").value;
    var errorValue = document.getElementById('emailError')
    if (input == "") {
        console.log('not entered mail')
        errorValue.innerHTML = "Please enter your mail."
        errorValue.classList.add('errorAdd');
        document.getElementById('myPassword').value = "";
        return false;
    }
    if (input.match(validRegex)) {
        if (input != 'admin@utdallas.edu') {
            console.log('Wrong mail entered')
            errorValue.innerHTML = "Mail doesn't exist!!!"
            errorValue.classList.add('errorAdd');
            document.getElementById('myPassword').value = "";
            return false;
        }
        errorValue.classList.remove('errorAdd')
        validatePassword();

        return true;

    } else {

        console.log('Invalid Mail')
        errorValue.innerHTML = "Invalid Mail!!"
        errorValue.classList.add('errorAdd');
        document.getElementById('myPassword').value = "";
        return false;

    }

}

/* Password Validation */
function validatePassword() {

    var input = document.getElementById("myPassword").value;
    var errorValue = document.getElementById('errorPassword')
    if (input == "") {
        console.log('no password')
        errorValue.innerHTML = "Please enter your password."
        errorValue.classList.add('errorAdd');
        return false;
    }
    if (input != 'Admin@123') {
        console.log('wrong password')
        errorValue.innerHTML = "Wrong Password."
        errorValue.classList.add('errorAdd');
        return false;
    }
    errorValue.classList.remove('errorAdd')
    location.href = "Home.html";
    return true;
}
