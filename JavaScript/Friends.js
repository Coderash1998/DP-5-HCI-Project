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

var sendMessageButton4 = document.getElementById("messageButton4")
sendMessageButton4.addEventListener("click", textValidation4);

function textValidation4() {
    let checkText4 = document.getElementById('message4').value;
    if ((checkText4==='')){
        $('#failureMessage').modal('show')
        $('#sendMessage1').modal('show');
    }
    else{
        $('#sendMessage1').modal('hide');
        $('#successMessage').modal('show')
        document.getElementById('message4').value=""
    }
}


var sendMessageButton5 = document.getElementById("messageButton5")
sendMessageButton5.addEventListener("click", textValidation5);

function textValidation5() {
    let checkText5 = document.getElementById('message5').value;
    if ((checkText5==='')){
        $('#failureMessage').modal('show')
        $('#sendMessage2').modal('show');
    }
    else{
        $('#sendMessage').modal('hide');
        $('#successMessage').modal('show')
        document.getElementById('message5').value=""
    }
}

const Emergency1 = document.getElementById("Emergency1")
Emergency1.addEventListener("click",emergencyModal1);

function emergencyModal1(){
    const initialText = 'Add to Emergency Contacts';

    if (Emergency1.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        
      Emergency1.textContent = 'Remove from Emergency Contacts';
      $('#successEmergency').modal('show')
      Emergency1.classList.remove("btn-success")
      Emergency1.classList.add("btn-danger")
    } else {
        Emergency1.classList.remove("btn-danger")
        Emergency1.classList.add("btn-success")
      Emergency1.textContent = initialText;
      $('#failureEmergency').modal('show')
    }
}

const Emergency2 = document.getElementById("Emergency2")
Emergency2.addEventListener("click",emergencyModal2);

function emergencyModal2(){
    const initialText = 'Add to Emergency Contacts';

    if (Emergency2.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        
      Emergency2.textContent = 'Remove from Emergency Contacts';
      $('#successEmergency').modal('show')
      Emergency2.classList.remove("btn-success")
      Emergency2.classList.add("btn-danger")
    } else {
        Emergency2.classList.remove("btn-danger")
        Emergency2.classList.add("btn-success")
      Emergency2.textContent = initialText;
      $('#failureEmergency').modal('show')
    }
}
let popup=this.document.getElementById("popup")

        function openPopup(){
            popup.classList.add("open-popup")
        }
        function closePopup(){
            popup.classList.remove("open-popup")
        }
