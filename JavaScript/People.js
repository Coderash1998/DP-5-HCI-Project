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

function sortTime(){
    var ul=document.getElementById("groups-list")
    var list=ul.getElementsByTagName("LI");
    for(let i=0;i<list.length;i++)
        console.log(list[0]);
}

function sortName(){
    console.log('sortNames')
    var ul=document.getElementById("groups-list")
    Array.from(ul.getElementsByTagName("LI")).sort((a,b)=>a.textContent.localeCompare(b.textContent))
    .forEach(li=>ul.appendChild(li))

    var ul2=document.getElementById("groups-list2")
    Array.from(ul2.getElementsByTagName("LI")).sort((a,b)=>a.textContent.localeCompare(b.textContent))
    .forEach(li=>ul2.appendChild(li))
}

function selectOptions(){
    let item=document.getElementById("sorting_options").value;
    if(item==="alphabetical")
        sortName();
    if(item==="active")
        sortTime();
}