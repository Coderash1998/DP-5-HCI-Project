var sendMessageButton = document.getElementById("messageButton")
sendMessageButton.addEventListener("click", textValidation);

function textValidation() {
    console.log("Hello")
    let checkText = document.getElementById('message').value;
    if ((checkText === '')) {
        $('#viewGroup').modal('show');
        $('#failureMessage').modal('show')
    }
    else {
        $('#viewGroup').modal('hide');
        $('#successMessage').modal('show')
        document.getElementById('message').value = ""
    }
}

function getId(id) {
    let nameId = "name" + id.replace("button", "")
    console.log(nameId)
    let imageId = "image" + id.replace("button", "")
    let getName = document.getElementById(nameId).textContent;
    let getImage = document.getElementById(imageId)
    var modalImg = document.getElementById("modalImage")
    modalImg.src = getImage.src
    document.getElementById('modalTitle').innerHTML = getName;
}


const box1 = document.getElementById('modalyes1');
box1.addEventListener('click', () => {

    var rem = document.getElementById("card1");
    rem.parentNode.removeChild(rem);
});


const box2 = document.getElementById('modalyes2');
box2.addEventListener('click', () => {

    var rem = document.getElementById("card2");
    rem.parentNode.removeChild(rem);
});

const box3 = document.getElementById('modalyes3');
box3.addEventListener('click', () => {

    var rem = document.getElementById("card3");
    rem.parentNode.removeChild(rem);
});