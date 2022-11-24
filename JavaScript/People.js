var sendMessageButton = document.getElementById("messageButton")
sendMessageButton.addEventListener("click", textValidation);

function textValidation() {
    let checkText = document.getElementById('message').value;
    if ((checkText==='')){
        $('#viewProfile').modal('show');
        $('#failureMessage').modal('show')
    }
    else{
        $('#viewProfile').modal('hide');
        $('#successMessage').modal('show')
        document.getElementById('message').value=""
    }
}

function getId(id){
    let nameId="name"+id.replace("button","")
    let imageId = "image"+id.replace("button","")
    let getName = document.getElementById(nameId).textContent;
    let getImage = document.getElementById(imageId)
    var modalImg = document.getElementById("modalImage")
    modalImg.src=getImage.src
    document.getElementById('modalTitle').innerHTML=getName;
}