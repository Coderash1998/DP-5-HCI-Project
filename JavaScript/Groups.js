var sendMessageButton = document.getElementById("messageButton")
sendMessageButton.addEventListener("click", textValidation);

function textValidation() {
    console.log("Hello")
    let checkText = document.getElementById('message').value;
    if ((checkText==='')){
        $('#viewGroup').modal('show');
        $('#failureMessage').modal('show')
    }
    else{
        $('#viewGroup').modal('hide');
        $('#successMessage').modal('show')
        document.getElementById('message').value=""
    }
}

function getId(id){
    let nameId="name"+id.replace("button","")
    console.log(nameId)
    let imageId = "image"+id.replace("button","")
    let getName = document.getElementById(nameId).textContent;
    let getImage = document.getElementById(imageId)
    var modalImg = document.getElementById("modalImage")
    modalImg.src=getImage.src
    document.getElementById('modalTitle').innerHTML=getName;
}