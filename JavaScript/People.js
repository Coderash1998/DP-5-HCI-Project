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
    if (nameId == "name2") {
        document.getElementById("hobby").innerHTML = "Chess"
        document.getElementById("status").innerHTML = "Always ready for a quick game of chess."
    } else if (nameId == "name3") {
        document.getElementById("hobby").innerHTML = "Debate, Basketball"
        document.getElementById("status").innerHTML = "Always eager to dicuss about anything."
    } else if (nameId == "name4") {
        document.getElementById("hobby").innerHTML = "Stitching, Art&Craft"
        document.getElementById("status").innerHTML = "My house is decorated with my art pieces."
    } else if (nameId == "name5") {
        document.getElementById("hobby").innerHTML = "Travelling, Tennis, Reading"
        document.getElementById("status").innerHTML = "A book and plane ticktes are all I need in life."
    } else if (nameId == "name6") {
        document.getElementById("hobby").innerHTML = "Cooking"
        document.getElementById("status").innerHTML = "My recipes are amazing. I love to share them with others."
    }
}

function sortTime(){
    let a=document.getElementById("A")
    let b=document.getElementById("B")
    let c=document.getElementById("C")
    let d=document.getElementById("D")
    let e=document.getElementById("E")
    let f=document.getElementById("F")

    let arr=[b,e,f,d,a,c];
    var ul=document.getElementById("groups-list")
    arr.forEach(item=>ul.appendChild(item))
}

function sortName(){
    var ul=document.getElementById("groups-list")
    Array.from(ul.getElementsByTagName("LI")).sort((a,b)=>a.textContent.localeCompare(b.textContent))
    .forEach(li=>ul.appendChild(li))
}

function selectOptions(){
    let item=document.getElementById("sorting_options").value;
    if(item==="alphabetical")
        sortName();
    if(item==="active")
        sortTime();
}

function search(){
   let search_text=document.getElementById("search_box").value.toUpperCase();
   let people_list=document.getElementById("groups-list")
   let people=people_list.getElementsByTagName("li")
   let person_name=people_list.getElementsByTagName("h5")
    
   for(let i=0;i<person_name.length;i++){
    console.log(people[i]);
    let match=people[i].getElementsByTagName('h5')[0]
    if(match){
        let textValue=match.textContent || match.innerHTML
        if(textValue.toUpperCase().indexOf(search_text)>-1){
            people[i].style.display=""
        }
        else{
            people[i].style.display="none"
        }
    }
   }
}