/* Email Validation */
function ValidateEmail() {
    // document.getElementById('signupform').reset();

    // document.getElementById("emailerror").classList.remove("errormessage")

    ///^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var input = document.getElementById("myMail").value;
    var errorValue = document.getElementById('emailError')
    if (input == "") {
        console.log('not entered mail')
        errorValue.innerHTML = "Please enter a mail."
        errorValue.classList.add('errorAdd');
        document.getElementById('myPassword').value = "";
        document.getElementById('myPassword_recur').value = "";
        document.getElementById('mobile').value = "";


        errorValue.classList.remove()
        return false;

    } else if (!input.match(validRegex)) {
        console.log('wrong mail')
        errorValue.innerHTML = "Please enter a valid mail."
        errorValue.classList.add('errorAdd');
        document.getElementById('myPassword').value = "";
        document.getElementById('myPassword_recur').value = "";
        document.getElementById('mobile').value = "";
        errorValue.classList.remove()
        return false;
    } else {
        errorValue.innerHTML = ""
    }

    var value1 = validatePassword();
    if (!value1) {
        return false;
    }

    var value2 = validateRe_TypePassword();
    if (!value2) {
        return false;
    }
    var value3 = checkNumber();
    if (!value3) {
        return false;
    }

    if (!document.getElementById('termCon').checked) {
        var errorValue = document.getElementById('errorTerms')
        errorValue.innerHTML = "Please accept terms and conditions"
        errorValue.classList.add('errorAdd');
        return false;
    } else {
        document.getElementById('errorTerms').classList.remove('errorAdd');
        document.getElementById('errorTerms').innerHTML = '';
    }
    location.href = "Hobbies.html";
    return true;

}


/* Password Validation */
function validatePassword() {

    // if (document.getElementById("errorPassword").classList.contains("errormessage"))
    //     return;


    var myInput = document.getElementById('myPassword').value;
    var errorValue = document.getElementById('errorPassword')
    var num_ = 0
    var special_char = 0
    var capital_char = 0
    var code = ''

    if (myInput == '') {
        console.log('Password not entered')
        errorValue.innerHTML = "Please enter a password."
        errorValue.classList.add('errorAdd');
        document.getElementById('myPassword_recur').value = "";
        document.getElementById('mobile').value = "";
        return false;
    }
    if (myInput.length < 6) {
        console.log('Invalid Length')
        errorValue.innerHTML = "Password should be of atleast 6 characters."
        errorValue.classList.add('errorAdd');
        document.getElementById('myPassword_recur').value = "";
        document.getElementById('mobile').value = "";
        return false;
    }

    for (i = 0, len = myInput.length; i < len; i++) {

        code = myInput.charCodeAt(i);
        if (code > 47 && code < 58)
            num_ = 1;
        if ((code >= 32 && code <= 47) || (code >= 58 && code <= 64) || (code >= 91 && code <= 96) || (code >= 123 && code <= 126)) {
            special_char = 1;
        }
        if (code >= 65 && code <= 90) {
            capital_char = 1;
        }
        if (num_ == 1 && special_char == 1 && capital_char == 1)
            break;

    }

    if (capital_char != 1) {
        console.log('Capital Letter missing')
        errorValue.innerHTML = "Password should of atleast one capital letter"
        errorValue.classList.add('errorAdd');
        document.getElementById('myPassword_recur').value = "";
        document.getElementById('mobile').value = "";
        return false;


    }

    if (num_ != 1) {
        console.log('No numeric Value')
        errorValue.innerHTML = "Password should have atleast one number."
        errorValue.classList.add('errorAdd');
        document.getElementById('myPassword_recur').value = "";
        document.getElementById('mobile').value = "";
        return false;
    }
    if (special_char != 1) {
        console.log('No Special caharacter')
        errorValue.innerHTML = "Password should have atleast one special character."
        errorValue.classList.add('errorAdd');
        document.getElementById('myPassword_recur').value = "";
        document.getElementById('mobile').value = "";
        return false;


    }

    document.getElementById('errorPassword').classList.remove('errorAdd')
    return true;
}

/* Password Validation */
function validateRe_TypePassword() {


    // if (document.getElementById("errorPassword_recur").classList.contains("errormessage"))
    //     return;

    var lastInput = document.getElementById('myPassword').value;
    var Input = document.getElementById('myPassword_recur').value;
    var errorValue = document.getElementById('errorPassword_recur')
    if (Input == '') {
        console.log('No password at re-type')
        errorValue.innerHTML = "Please enter the password"
        errorValue.classList.add('errorAdd');
        document.getElementById('mobile').value = "";
        return false;
    }
    if (lastInput != Input) {
        console.log('Password Not Matching')
        errorValue.innerHTML = "Password not same as above"
        errorValue.classList.add('errorAdd');
        document.getElementById('mobile').value = "";
        return false;

    }

    document.getElementById('errorPassword_recur').classList.remove('errorAdd')
    return true;


}

/* Mobile Check */
function checkNumber() {


    // if (document.getElementById("mobile").classList.contains("errormessage"))
    //     return;

    var Input = document.getElementById('mobile').value;
    var errorValue = document.getElementById('errorMobile')
    var intOrNot = Input
    if (Input == '') {
        console.log('No Mobile Number')
        errorValue.innerHTML = "Please enter you phone number"
        errorValue.classList.add('errorAdd');
        return false;
    }

    if (Number.isNaN(Number(intOrNot))) {
        console.log('is alpha numeric')
        errorValue.innerHTML = "Please enter valid number"
        errorValue.classList.add('errorAdd');
        return false;
    }

    if (Input.length != 10) {
        console.log('not of length 10')
        errorValue.innerHTML = "Not a phone number"
        errorValue.classList.add('errorAdd');
        return false;
    }
    document.getElementById('errorMobile').classList.remove('errorAdd')

    return true;

}

function toggle(){
    let pwdInput=document.getElementById('myPassword')
    let icon=document.getElementById('eye-icon')
    let value=pwdInput.value;
    if(pwdInput.type === 'password') {
        pwdInput.type = 'text';
       
    }
    else {
        pwdInput.type = 'password';
    }  
    pwdInput.value = value;
}
function toggle_confirm(){
    let pwdInput=document.getElementById('myPassword_recur')
    let value=pwdInput.value;
    if(pwdInput.type === 'password') {
        pwdInput.type = 'text';
    }
    else {
        pwdInput.type = 'password';
    }
    
    pwdInput.value = value;
}


// function saveInfo(){
//     var firstName = document.getElementById("floatingInput1").value;
//     var lastName = document.getElementById("floatingInput2").value;
//     var age=document.getElementById("floatingInput3").value;
//     var city=document.getElementById("floatingInput4").value;
//     var state=document.getElementById("floatingInput5").value;
    
//     sessionStorage.setItem('name', firstName)
//     sessionStorage.setItem('surname', lastName)
//     sessionStorage.setItem('age',age)
//     sessionStorage.setItem('city',city)
//     sessionStorage.setItem('state',state)

//     var form=document.getElementById('info_form')
//     form.reset()
// }