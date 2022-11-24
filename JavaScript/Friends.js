var clickButton = document.getElementById("accept1");
clickButton.addEventListener("click", clickAccepted1);

function clickAccepted1() {
    var accept = document.getElementById('accept1');
    accept.parentNode.removeChild(accept);

    var reject = document.getElementById('reject1');
    reject.parentNode.removeChild(reject);

    document.getElementById('clickText1').innerHTML = "Accepted";
    document.getElementById("clickText1").classList.add('text-success');

}

var clickButton = document.getElementById("reject1");
clickButton.addEventListener("click", clickRejected1);

function clickRejected1() {
    var reject = document.getElementById('reject1');
    reject.parentNode.removeChild(reject);

    var accept = document.getElementById('accept1');
    accept.parentNode.removeChild(accept);

    document.getElementById('clickText1').innerHTML = "Rejected";
    document.getElementById("clickText1").classList.add('text-danger');

}


var clickButton = document.getElementById("accept2");
clickButton.addEventListener("click", clickAccepted2);

function clickAccepted2() {
    var accept = document.getElementById('accept2');
    accept.parentNode.removeChild(accept);

    var reject = document.getElementById('reject2');
    reject.parentNode.removeChild(reject);

    document.getElementById('clickText2').innerHTML = "Accepted";
    document.getElementById("clickText2").classList.add('text-success');

}

var clickButton = document.getElementById("reject2");
clickButton.addEventListener("click", clickRejected2);

function clickRejected2() {
    var reject = document.getElementById('reject2');
    reject.parentNode.removeChild(reject);

    var accept = document.getElementById('accept2');
    accept.parentNode.removeChild(accept);

    document.getElementById('clickText2').innerHTML = "Rejected";
    document.getElementById("clickText2").classList.add('text-danger');

}


var clickButton = document.getElementById("accept3");
clickButton.addEventListener("click", clickAccepted3);

function clickAccepted3() {
    var accept = document.getElementById('accept3');
    accept.parentNode.removeChild(accept);

    var reject = document.getElementById('reject3');
    reject.parentNode.removeChild(reject);

    document.getElementById('clickText3').innerHTML = "Accepted";
    document.getElementById("clickText3").classList.add('text-success');

}

var clickButton = document.getElementById("reject3");
clickButton.addEventListener("click", clickRejected3);

function clickRejected3() {
    var reject = document.getElementById('reject3');
    reject.parentNode.removeChild(reject);

    var accept = document.getElementById('accept3');
    accept.parentNode.removeChild(accept);

    document.getElementById('clickText3').innerHTML = "Rejected";
    document.getElementById("clickText3").classList.add('text-danger');

}

var sendMessageButton1 = document.getElementById("messageButton1")
sendMessageButton1.addEventListener("click", textValidation1);

function textValidation1() {
    let checkText1 = document.getElementById('message1').value;
    if ((checkText1==='')){
        $('#viewJane').modal('show');
        $('#failureMessage').modal('show')
    }
    else{
        $('#viewJane').modal('hide');
        $('#successMessage').modal('show')
        document.getElementById('message1').value=""
    }
}


var sendMessageButton2 = document.getElementById("messageButton2")
sendMessageButton2.addEventListener("click", textValidation2);

function textValidation2() {
    let checkText2 = document.getElementById('message2').value;
    if ((checkText2==='') ){
        $('#viewKurt').modal('show');
        $('#failureMessage').modal('show');
    }
    else{
        $('#viewKurt').modal('hide');
        $('#successMessage').modal('show');
        document.getElementById('message2').value=""
    }
}



var sendMessageButton3 = document.getElementById("messageButton3")
sendMessageButton3.addEventListener("click", textValidation3);

function textValidation3() {
    let checkText3 = document.getElementById('message3').value;
    if ((checkText3==='')){
        $('#viewMorgan').modal('show');
        $('#failureMessage').modal('show')
    }
    else{
        $('#viewMorgan').modal('hide');
        $('#successMessage').modal('show')
        document.getElementById('message3').value=""
    }
}