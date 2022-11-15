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